import React, { useEffect, useRef } from 'react';
import './FallingLeaves.css';

const FallingLeaves = () => {
   const leafContainerRef = useRef(null);

   useEffect(() => {
      const respon = window.innerWidth > 992;
      const numDes = 4;
      const numMB = 1;
      const leaveDes = 14;
      const leaveMob = 8;
      const numLeavesWind = respon ? leaveDes : leaveMob;
      const windSpeed = respon ? numDes : numMB;

      class LeafScene {
         constructor(viewport) {
            this.viewport = viewport;
            this.world = document.createElement('div');
            this.leaves = [];
            this.options = {
               numLeaves: numLeavesWind,
               wind: {
                  magnitude: 1.2,
                  maxSpeed: windSpeed,
                  duration: 100,
                  start: 0,
                  speed: 0,
               },
            };
            this.width = this.viewport.offsetWidth;
            this.height = this.viewport.offsetHeight;
            this.timer = 0;
            this._resetLeaf = function (t) {
               t.x = this.width / 2 + (Math.random() * this.width) / 2 - (Math.random() * this.width) / 2;
               t.y = -10;
               t.z = 200 * Math.random();
               t.rotation.speed = 10 * Math.random();
               const e = Math.random();
               e > 0.5
                  ? (t.rotation.axis = 'X')
                  : e > 0.25
                  ? ((t.rotation.axis = 'Y'), (t.rotation.x = 180 * Math.random() + 90))
                  : ((t.rotation.axis = 'Z'),
                    (t.rotation.x = 360 * Math.random() - 180),
                    (t.rotation.speed = 3 * Math.random()));
               t.xSpeedVariation = 0.8 * Math.random() - 0.4;
               t.ySpeed = Math.random() + 1.5;
               return t;
            };
            this._updateLeaf = function (t) {
               const e = this.options.wind.speed(this.timer - this.options.wind.start, t.y) + t.xSpeedVariation;
               t.x -= e;
               t.y += t.ySpeed;
               t.rotation.value += t.rotation.speed;
               let i = `translateX(${t.x}px) translateY(${t.y}px) translateZ(${t.z}px) rotate${t.rotation.axis}(${t.rotation.value}deg)`;
               t.rotation.axis !== 'X' && (i += ` rotateX(${t.rotation.x}deg)`);
               t.el.style.transform = i;
               (t.x < -10 || t.y > this.height + 10) && this._resetLeaf(t);
            };
            this._updateWind = function () {
               if (this.timer === 0 || this.timer > this.options.wind.start + this.options.wind.duration) {
                  this.options.wind.magnitude = Math.random() * this.options.wind.maxSpeed;
                  this.options.wind.duration = 50 * this.options.wind.magnitude + (20 * Math.random() - 10);
                  this.options.wind.start = this.timer;
                  const t = this.height;
                  this.options.wind.speed = function (e, i) {
                     const a = ((this.magnitude / 1.5) * (t - (2 * i) / 3)) / t;
                     return a * Math.sin(((2 * Math.PI) / this.duration) * e + (3 * Math.PI) / 2) + a;
                  };
               }
            };
         }

         init() {
            for (let t = 0; t < this.options.numLeaves; t++) {
               const e = {
                  el: document.createElement('div'),
                  x: 80,
                  y: 80,
                  z: 80,
                  rotation: { axis: 'X', value: 200, speed: 100, x: 0 },
                  xSpeedVariation: 0,
                  ySpeed: 0,
                  path: { type: 1, start: 0 },
                  image: 1,
               };
               this._resetLeaf(e);
               this.leaves.push(e);
               this.world.appendChild(e.el);
            }
            this.world.className = 'leaf-scene';
            this.viewport.appendChild(this.world);
            this.world.style.perspective = '1440px';

            window.onresize = () => {
               this.width = this.viewport.offsetWidth;
               this.height = this.viewport.offsetHeight;
            };
         }

         render() {
            this._updateWind();
            for (let t = 0; t < this.leaves.length; t++) this._updateLeaf(this.leaves[t]);
            this.timer++;
            requestAnimationFrame(this.render.bind(this));
         }
      }

      const leaves = new LeafScene(leafContainerRef.current);
      leaves.init();
      leaves.render();
   }, []);

   return <div className="falling-leaves" ref={leafContainerRef}></div>;
};

export default FallingLeaves;

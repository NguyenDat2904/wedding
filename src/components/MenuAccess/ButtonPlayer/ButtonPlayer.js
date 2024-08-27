import React, { useEffect, useRef, useState } from 'react';
import './ButtonPlayer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForwardStep, faBackwardStep } from '@fortawesome/free-solid-svg-icons';
import Song1 from '../../../assets/music/Ido.mp3';
import Song2 from '../../../assets/music/beautifulinwhite.mp3';
import Song3 from '../../../assets/music/talacuanhau.mp3';
import Song4 from '../../../assets/music/xungdoicuoithoi.mp3';
import Song5 from '../../../assets/music/yesido.mp3';
import Song6 from '../../../assets/music/yeukhongcanhua.mp3';

function ButtonPlayer() {
   const songList = [Song1, Song2, Song3, Song4, Song5, Song6];
   const [currentSongIndex, setCurrentSongIndex] = useState(Math.floor(Math.random() * songList.length));
   const [isPlaying, setIsPlaying] = useState(true);

   const audioRef = useRef(null);

   useEffect(() => {
      if (audioRef.current) {
         audioRef.current.play().catch((error) => console.error('Error attempting to play audio:', error));
      }
   }, [currentSongIndex]);

   useEffect(() => {
      if (audioRef.current) {
         audioRef.current.play().catch((error) => console.error('Error attempting to play audio:', error));
      }
   }, [audioRef.current]);

   const togglePlayPause = () => {
      if (isPlaying) {
         audioRef.current.pause();
      } else {
         audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
   };

   const nextSong = () => {
      setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songList.length);
   };

   const prevSong = () => {
      setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songList.length) % songList.length);
   };

   return (
      <div>
         <audio ref={audioRef} src={songList[currentSongIndex]} autoPlay />

         <div className="bii-player bii-prev" style={{ display: 'block' }} onClick={prevSong}>
            <div className="bii-player-secondary">
               <div className="bii-player-secondary-content">Bài trước</div>
            </div>
            <div className="playerIcon">
               <span style={{ display: 'block' }} id="playerVolumeOn">
                  <FontAwesomeIcon icon={faBackwardStep} />
               </span>
            </div>
         </div>

         <div className="bii-player" style={{ display: 'block' }} onClick={togglePlayPause}>
            <div className="bii-player-secondary">
               <div className="bii-player-secondary-content">
                  Click vào đây để {isPlaying ? 'tạm dừng' : 'phát nhạc'}!
               </div>
            </div>
            <div className="playerIcon">
               <span style={{ display: isPlaying ? 'none' : 'block' }} id="playerVolumeOff">
                  <FontAwesomeIcon icon={faPlay} />
               </span>
               <span style={{ display: isPlaying ? 'block' : 'none' }} id="playerVolumeOn">
                  <FontAwesomeIcon icon={faPause} />
               </span>
            </div>
         </div>

         <div className="bii-player bii-next" style={{ display: 'block' }} onClick={nextSong}>
            <div className="bii-player-secondary">
               <div className="bii-player-secondary-content">Bài tiếp theo</div>
            </div>
            <div className="playerIcon">
               <span style={{ display: 'block' }} id="playerVolumeOn">
                  <FontAwesomeIcon icon={faForwardStep} />
               </span>
            </div>
         </div>
      </div>
   );
}

export default ButtonPlayer;

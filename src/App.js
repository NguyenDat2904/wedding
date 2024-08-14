import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home/Home';
import AboutUs from './components/section/AboutUs/AboutUs';

class App extends Component {
   render() {
      return (
         <div className="App">
            <Home />
            <AboutUs />
         </div>
      );
   }
}

export default App;

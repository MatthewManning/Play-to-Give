'use strict';

import React, { Component }			from 'react';

class Twenty48 extends Component{

  constructor(props) {
      super(props);
  }
  
  componentDidMount() {
		const script = document.createElement("script");
        script.src = "http://localhost:9000/js/bind_polyfill.js";
		script.async = true;
        document.body.appendChild(script);
		
		const script2 = document.createElement("script");
		script2.src = "http://localhost:9000/js/classlist_polyfill.js";
		script2.async = true;
        document.body.appendChild(script2);
		
		const script3 = document.createElement("script");
		script3.src = "http://localhost:9000/js/animframe_polyfill.js";
		script3.async = true;
        document.body.appendChild(script3);
		
		const script4 = document.createElement("script");
		script4.src = "http://localhost:9000/js/keyboard_input_manager.js";
		script4.async = true;
        document.getElementById('content').appendChild(script4);
		
		const script5 = document.createElement("script");
		script5.src = "http://localhost:9000/js/html_actuator.js";
		script5.async = true;
        document.body.appendChild(script5);
		
		const script6 = document.createElement("script");
		script6.src = "http://localhost:9000/js/grid.js";
		script6.async = true;
        document.body.appendChild(script6);
		
		const script7 = document.createElement("script");
		script7.src = "http://localhost:9000/js/tile.js";
		script7.async = true;
        document.body.appendChild(script7);
		
		const script8 = document.createElement("script");
		script8.src = "http://localhost:9000/js/local_storage_manager.js";
		script8.async = true;
        document.body.appendChild(script8);
		
		const script9 = document.createElement("script");
		script9.src = "http://localhost:9000/js/game_manager.js";
		script9.async = true;
        document.body.appendChild(script9);
		
		const script10 = document.createElement("script");
		script10.src = "http://localhost:9000/js/application.js";
		script10.async = true;
        document.body.appendChild(script10);
        
    }

  render(){
    return (
      <div id="content">
	  <link href="/css/main.css" rel="stylesheet" type="text/css"></link>
	  <link href="/css/main.scss" rel="stylesheet" type="text/css"></link>
	  <link href="/css/helper.scss" rel="stylesheet" type="text/css"></link>

      <div className="container">
          <div className="heading">
            <h1 className="title">2048</h1>
            <div className="scores-container">
              <div className="score-container">0</div>
              <div className="best-container">0</div>
            </div>
          </div>

          <div className="above-game">
            <p className="game-intro">Join the numbers and get to the <strong>2048 tile!</strong></p>
            <a className="restart-button">New Game</a>
          </div>

          <div className="game-container">
            <div className="game-message">
              <p></p>
              <div className="lower">
      	        <a className="keep-playing-button">Keep going</a>
                <a className="retry-button">Try again</a>
              </div>
            </div>

            <div className="grid-container">
              <div className="grid-row">
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
              </div>
              <div className="grid-row">
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
              </div>
              <div className="grid-row">
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
              </div>
              <div className="grid-row">
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
              </div>
            </div>

            <div className="tile-container">

            </div>
          </div>

          <p className="game-explanation">
            <strong className="important">How to play:</strong> Use your <strong>arrow keys</strong> to move the tiles. When two tiles with the same number touch, they <strong>merge into one!</strong>
          </p>
          <p>
          <strong className="important">Note:</strong> This site is the official version of 2048. You can play it on your phone via <a href="http://git.io/2048">http://git.io/2048.</a> All other apps or sites are derivatives or fakes, and should be used with caution.
          </p>
          <p>
          Created by <a href="http://gabrielecirulli.com" target="_blank">Gabriele Cirulli.</a> Based on <a href="https://itunes.apple.com/us/app/1024!/id823499224" target="_blank">1024 by Veewo Studio</a> and conceptually similar to <a href="http://asherv.com/threes/" target="_blank">Threes by Asher Vollmer.</a>
          </p>
        </div>

      </div>
    )
  }
}

export default Twenty48

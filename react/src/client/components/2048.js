'use strict';

import React, { Component }			from 'react';

class Twenty48 extends Component{

  constructor(props) {
      super(props);
  }

  render(){
    return (
      <div>
      <div class="container">
          <div class="heading">
            <h1 class="title">2048</h1>
            <div class="scores-container">
              <div class="score-container">0</div>
              <div class="best-container">0</div>
            </div>
          </div>

          <div class="above-game">
            <p class="game-intro">Join the numbers and get to the <strong>2048 tile!</strong></p>
            <a class="restart-button">New Game</a>
          </div>

          <div class="game-container">
            <div class="game-message">
              <p></p>
              <div class="lower">
      	        <a class="keep-playing-button">Keep going</a>
                <a class="retry-button">Try again</a>
              </div>
            </div>

            <div class="grid-container">
              <div class="grid-row">
                <div class="grid-cell"></div>
                <div class="grid-cell"></div>
                <div class="grid-cell"></div>
                <div class="grid-cell"></div>
              </div>
              <div class="grid-row">
                <div class="grid-cell"></div>
                <div class="grid-cell"></div>
                <div class="grid-cell"></div>
                <div class="grid-cell"></div>
              </div>
              <div class="grid-row">
                <div class="grid-cell"></div>
                <div class="grid-cell"></div>
                <div class="grid-cell"></div>
                <div class="grid-cell"></div>
              </div>
              <div class="grid-row">
                <div class="grid-cell"></div>
                <div class="grid-cell"></div>
                <div class="grid-cell"></div>
                <div class="grid-cell"></div>
              </div>
            </div>

            <div class="tile-container">

            </div>
          </div>

          <p class="game-explanation">
            <strong class="important">How to play:</strong> Use your <strong>arrow keys</strong> to move the tiles. When two tiles with the same number touch, they <strong>merge into one!</strong>
          </p>
          <p>
          <strong class="important">Note:</strong> This site is the official version of 2048. You can play it on your phone via <a href="http://git.io/2048">http://git.io/2048.</a> All other apps or sites are derivatives or fakes, and should be used with caution.
          </p>
          <p>
          Created by <a href="http://gabrielecirulli.com" target="_blank">Gabriele Cirulli.</a> Based on <a href="https://itunes.apple.com/us/app/1024!/id823499224" target="_blank">1024 by Veewo Studio</a> and conceptually similar to <a href="http://asherv.com/threes/" target="_blank">Threes by Asher Vollmer.</a>
          </p>
        </div>

          <script src="/js/bind_polyfill.js"></script>
          <script src="/js/classlist_polyfill.js"></script>
          <script src="/js/animframe_polyfill.js"></script>
          <script src="/js/keyboard_input_manager.js"></script>
          <script src="/js/html_actuator.js"></script>
          <script src="/js/grid.js"></script>
          <script src="/js/tile.js"></script>
          <script src="/js/local_storage_manager.js"></script>
          <script src="/js/game_manager.js"></script>
          <script src="/js/application.js"></script>
        </div>
    )
  }
}

export default Twenty48

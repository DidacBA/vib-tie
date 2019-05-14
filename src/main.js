import { element, grab, DOMScrubber } from '../lib/DOMHelp';
// import { Game } from './game';

const main = () => {

  const buildSplashScreen = () => {
    grab('app').append(element({
      tagName: 'div',
      attributes: {
        id: 'splash-screen',
      },
      innerHTML: [
        {
          tagName: 'h1',
          attributes: {
            id: 'game-title'
          },
          text: 'Vib-Tie'
        },
        {
          tagName: 'div',
          attributes: {
            id: 'start-buttons'
          },
          innerHTML: [
            {
              tagName: 'button',
              attributes: {
                id: 'start-game-button',
                class: 'menu-buttons'
              },
              text: 'Start'
            },
          ]
        }
      ]
    }));
    
    grab('start-game-button').addEventListener('click', startGame);
  }

  const startGame = () => {

    DOMScrubber(['splash-screen']);

    grab('app').append(element({
      tagName: 'canvas',
      attributes: {
        id: 'canvas',
      },
    }));

    const canvas = grab('canvas');
    // const game = new Game(canvas);
// 
    // game.start();
  }

  buildSplashScreen();
}

window.addEventListener('load', main);
import gameBoard from './factories/gameBoard';
import player from './factories/player';
import newShip from './factories/ship';
import DomTasks from './DomTasks/dom_manager';

const gameController = (() => {
  const initializeAiPlay = () => {
    let board = gameBoard();
    let ship1 = newShip(1);
    let ship2 = newShip(2);
    let ship3 = newShip(3);
    let ship4 = newShip(4);
    let ship5 = newShip(5);
    board.placeShip(ship1, [[0,0]]);
    board.placeShip(ship2, [[2, 0], [2, 1]]);
    board.placeShip(ship3, [[5, 5], [6, 5], [7, 5]]);
    board.placeShip(ship4, [[9, 2], [9, 3], [9, 4], [9, 5]]);
    board.placeShip(ship5, [[8, 4], [8, 5], [8, 6], [8, 7], [8, 8]]);
    return board
  }

  const initializePlayer = () => {
    let board = gameBoard();
    let ship1 = newShip(1);
    let ship2 = newShip(2);
    let ship3 = newShip(3);
    let ship4 = newShip(4);
    let ship5 = newShip(5);
    board.placeShip(ship1, [[9, 9]]);
    board.placeShip(ship2, [[8, 0], [8, 1]]);
    board.placeShip(ship3, [[5, 4], [6, 4], [7, 4]]);
    board.placeShip(ship4, [[9, 2], [9, 3], [9, 4], [9, 5]]);
    board.placeShip(ship5, [[2, 4], [2, 5], [2, 6], [2, 7], [2, 8]]);
    return board
  }

  const startGame = () => {
    DomTasks.renderBoards()
  }

  return {initializeAiPlay, initializePlayer, startGame}

})();

export default gameController;

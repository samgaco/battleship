import gameBoard from './factories/gameBoard';
import newShip from './factories/ship';
import player from './factories/player';
import DomTasks from './DomTasks/dom_manager';


const gameController = (() => {
  const initializeBoard2 = (ai = false) => {

    const board = gameBoard();
    const ship1 = newShip(1);
    const ship2 = newShip(2);
    const ship3 = newShip(3);
    const ship4 = newShip(4);
    const ship5 = newShip(5);

    let r1 = Math.round(Math.random()*9)
    board.placeShip(ship1, [[r1, 9]]);

    let r2 = Math.round(Math.random()*7)
    board.placeShip(ship2, [[8, r2], [8, r2+1]]);

    let r3 =  Math.round(Math.random()*2)
    let r3s = Math.round(Math.random()*8)
    board.placeShip(ship3, [[r3+3, r3s], [r3+4, r3s], [r3+5, r3s]]);

    let r4 =  Math.round(Math.random()*5)
    board.placeShip(ship4, [[9, r4], [9, r4+1], [9, r4+2], [9, r4+3]]);

    if(ai === false){
      let r5 = Math.round(Math.random()*4)
      let r5s = Math.round(Math.random()*2)
      board.placeShip(ship5, [[r5s, r5], [r5s, r5+1], [r5s, r5+2], [r5s, r5+3], [r5s, r5+4]]);
    }

    return board;
  };

  const initializeBoard3 = (ai = false) => {

    const board = gameBoard();
    const ship1 = newShip(1);
    const ship2 = newShip(2);
    const ship3 = newShip(3);
    const ship4 = newShip(4);
    const ship5 = newShip(5);
    

    board.placeShip(ship1, [[5 + Math.round(Math.random()*1), Math.round(Math.random()*6)]]);

    let r2 = Math.round(Math.random()*6)
    let r2s = Math.round(Math.random()*3)
    board.placeShip(ship2, [[r2s, r2], [r2s+1, r2]]);

    let r3s = Math.round(Math.random()*4)
    board.placeShip(ship3, [[7, r3s], [7, r3s+1], [7, r3s+2]]);

    let r4= Math.round(Math.random()*3)
    let r4s= Math.round(Math.random()*1)
    board.placeShip(ship4, [[r4s+8, r4], [r4s+8, r4+1], [r4s+8, r4+2], [r4s+8, r4+3]]);

    if(ai===false){
      let r5 = Math.round(Math.random()*5)
      let r5s = Math.round(Math.random()*2)
      board.placeShip(ship5, [[r5,r5s+7], [r5+1, r5s+7], [r5+2, r5s+7], [r5+3, r5s+7], [r5+4, r5s+7]]);
    }
  
    return board;
  };

  const initializeBoard1 = (ai = false) => {

    const board = gameBoard();
    const ship1 = newShip(1);
    const ship2 = newShip(2);
    const ship3 = newShip(3);
    const ship4 = newShip(4);
    const ship5 = newShip(5);
    
    board.placeShip(ship1, [[0, Math.round(Math.random()*9)]]);

    let r2 = Math.round(Math.random()*3)
    let r2s = Math.round(Math.random()*6)
    board.placeShip(ship2, [[r2s+1, r2], [r2s+1, r2+1]]);

    let r3 = Math.round(Math.random()*4)
    let r3s = Math.round(Math.random()*4)
    board.placeShip(ship3, [[r3+1, r3s+5], [r3+2, r3s+5], [r3+3, r3s+5]]);

    let r4= Math.round(Math.random()*6)
    board.placeShip(ship4, [[9, r4], [9, r4+1], [9, r4+2], [9, r4+3]]);

    if(ai === false){
      let r5 = Math.round(Math.random()*5)
      board.placeShip(ship5, [[8, r5], [8, r5+1], [8, r5+2], [8, r5+3], [8, r5+4]]);
    }
   
    return board;
  };

  const switchTurns = (player1, player2) => {
    if (player1.turn === true) {
      player1.turn === false;
      player2.turn === true;
    } else {
      player1.turn === true;
      player2.turn === false;
    }

    return { player1, player2 };
  };

  const startGame = () => {
    DomTasks.renderBoards();
  };

  return {
    initializeBoard1, initializeBoard2, initializeBoard3, startGame, switchTurns,
  };
})();

export default gameController;

import gameController from '../main_game';
import player from '../factories/player';

const DomTasks = (() => {
  const drawRows = (type) => {
    const rows = [];
    for (let i = 0; i < 10; i += 1) {
      const newRow = document.createElement('div');
      newRow.classList.add('row');
      newRow.setAttribute('id', `${type}-board-row-${i}`);
      rows.push(newRow);
    }
    return rows;
  };

  const drawBoxes = (type) => {
    const rows = drawRows(type);
    rows.forEach((row, index) => {
      for (let i = 0; i < 10; i += 1) {
        const box = document.createElement('div');
        box.setAttribute('id', `${type}-row-${index}-${i}`);
        box.dataset.coordinates = `${index}${i}`;
        box.classList.add('box');
        row.appendChild(box);
      }
    });
    return rows;
  };

  const drawBoards = () => {
    const playerRows = drawBoxes('player');
    playerRows.forEach((row) => {
      document.querySelector('#player-board').appendChild(row);
    });

    const aiRows = drawBoxes('ai');
    aiRows.forEach((row) => {
      document.querySelector('#ai-board').appendChild(row);
    });
  };


  const addStylesBoxes = (mark, box) => {
    switch (mark) {
      case '*':
        box.style.background = '#7bd6e2';
        break;
      case 'M':
        box.style.background = 'blue';
        break;
      case 'X':
        box.style.background = 'black';
        break;
      case 'O':
        box.style.background = 'red';
        break;
      default:
        box.style.background = '#7bd6e2';
    }
  };

  const gameOver = (board, msg) => {
    const aiBoard = document.querySelector('#ai-board');
    const children = aiBoard.childNodes;
    const nodeList = [...children];
    nodeList.forEach((node) => {
      node.parentNode.replaceChild(node.cloneNode(true), node);
    });

    const gameOver = document.querySelector('.game-over');
    const gameOverMsg = document.querySelector('#over');
    gameOverMsg.textContent = `
    ${msg}
    ${board.shipsSunk()} ships taken down!
  `;
    gameOver.style.display = 'table-cell';
    document.querySelector('#restart').addEventListener('click', () => {
      location.reload();
    });
  };

  const displayInfo = (board, id) => {
    document.querySelector(`.${id}-info`).textContent = `Ships Left: ${board.shipsLeft()} out of ${board.ships.length}`;
  };

  const addAttackFunctionality = (filledBoard, box, playerai, playerBoard) => {
    const coorX = Number(box.dataset.coordinates[0]);
    const coorY = Number(box.dataset.coordinates[1]);
    const mark = filledBoard.receiveAttack([coorX, coorY]);

    addStylesBoxes(mark, box);
    if (filledBoard.gameStop() === true) {
      gameOver(filledBoard, 'You win the game!');
    }

    displayInfo(filledBoard, 'ai-board');

    setTimeout(() => {
      const coorAI = playerai.aiPlay();
      const coorXai = coorAI[0];
      const coorYai = coorAI[1];
      const markai = playerBoard.receiveAttack([coorXai, coorYai]);

      const ownbox = document.getElementById(`player-row-${coorAI[0]}-${coorAI[1]}`);

      addStylesBoxes(markai, ownbox);

      // ownbox.textContent = markai;
      displayInfo(playerBoard, 'player-board');
      if (playerBoard.gameStop() === true) {
        gameOver(playerBoard, 'Ooops, you lost!');
      }
    }, 500);
    box.parentNode.replaceChild(box.cloneNode(), box);
  };


  const fillBoxes = (filledBoard, id, playerai, playerBoard = null) => {
    document.getElementById(id).childNodes.forEach((row, indexRow) => {
      row.childNodes.forEach((box, indexBox) => {
        if (id === 'ai-board') {
          box.style.background = '#7bd6e2';
          box.addEventListener('click', () => addAttackFunctionality(filledBoard, box, playerai, playerBoard));
        } else {
          addStylesBoxes(filledBoard.table[indexRow - 1][indexBox], box);
        }
      });
    });
  };

  const renderBoards = () => {
    const boardsAvailable = [gameController.initializeBoard1(), gameController.initializeBoard2(), gameController.initializeBoard3()];
    const boardsAvailablePlayer = [gameController.initializeBoard1(true), gameController.initializeBoard2(true), gameController.initializeBoard3(true)];
    const playerBoard = boardsAvailablePlayer[Math.round(Math.random() * 2)];
    const aiBoard = boardsAvailable[Math.round(Math.random() * 2)];
    const playerai = player();
    drawBoards();
    fillBoxes(playerBoard, 'player-board', playerai);
    fillBoxes(aiBoard, 'ai-board', playerai, playerBoard);
  };

  return { renderBoards };
})();

export default DomTasks;

import gameController from '../main_game';

const DomTasks = (() => {

  const drawRows = () => {
    let rows = []
    for(let i = 0; i < 10; i += 1){
      let newRow = document.createElement('div');
      newRow.classList.add('row');
      newRow.setAttribute('id', `row-${i}`);
      rows.push(newRow);
    }
    return rows;
  }

  const drawBoxes = () => {
    let rows = drawRows();
    rows.forEach((row, index) => {
      for(let i = 0; i < 10; i += 1){
        let box = document.createElement('div');
        box.setAttribute('id', `row-${index}-${i}`)
        box.classList.add('box');
        row.appendChild(box);
      }
    });
    return rows;
  }

  const drawBoards = (playerBoard, aiBoard) => {
    const playerRows = drawBoxes();
    playerRows.forEach(row => {
      document.querySelector('#player-board').appendChild(row);
    })

    const aiRows = drawBoxes();
    aiRows.forEach(row => {
      document.querySelector('#ai-board').appendChild(row);
    })
  }

  const renderBoards = () => {
    let playerBoard = gameController.initializePlayer();
    let aiBoard = gameController.initializeAiPlay();
    drawBoards(playerBoard, aiBoard);
  }

  return {renderBoards}
})();

export default DomTasks;

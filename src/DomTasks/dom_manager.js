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
        box.dataset.coordinates = `${index}${i}`;
        box.classList.add('box');
        row.appendChild(box);
      }
    });
    return rows;
  }

  const drawBoards = () => {
    const playerRows = drawBoxes();
    playerRows.forEach(row => {
      document.querySelector('#player-board').appendChild(row);
    })

    const aiRows = drawBoxes();
    aiRows.forEach(row => {
      document.querySelector('#ai-board').appendChild(row);
    })
  }

  const addAttackFunctionality = (filledBoard, box) =>{
    box.addEventListener('click', () =>{
          let mark = filledBoard.receiveAttack([Number(box.dataset.coordinates[0]),Number(box.dataset.coordinates[1])])
          box.textContent = mark;
        })
}

  const fillBoxes = (filledBoard, id) => {
      document.getElementById(id).childNodes.forEach((row, indexRow) =>{
        row.childNodes.forEach((box, indexBox) => {
          box.textContent =  filledBoard.table[indexRow-1][indexBox];
          addAttackFunctionality(filledBoard, box);
        })
      })
  }

  const renderBoards = () => {
    let playerBoard = gameController.initializePlayer();
    let aiBoard = gameController.initializeAiPlay();
    drawBoards();
    fillBoxes(playerBoard,'player-board');
    fillBoxes(aiBoard, 'ai-board');
  }

  return {renderBoards}
})();

export default DomTasks;

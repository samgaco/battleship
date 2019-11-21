import gameController from '../main_game';
import player from '../factories/player';

const DomTasks = (() => {

  const drawRows = (type) => {
    let rows = []
    for(let i = 0; i < 10; i += 1){
      let newRow = document.createElement('div');
      newRow.classList.add('row');
      newRow.setAttribute('id', `${type}-board-row-${i}`);
      rows.push(newRow);
    }
    return rows;
  }

  const drawBoxes = (type) => {
    let rows = drawRows(type);
    rows.forEach((row, index) => {
      for(let i = 0; i < 10; i += 1){
        let box = document.createElement('div');
        box.setAttribute('id', `${type}-row-${index}-${i}`)
        box.dataset.coordinates = `${index}${i}`;
        box.classList.add('box');
        row.appendChild(box);
      }
    });
    return rows;
  }

  const drawBoards = () => {
    const playerRows = drawBoxes('player');
    playerRows.forEach(row => {
      document.querySelector('#player-board').appendChild(row);
    })

    const aiRows = drawBoxes('ai');
    aiRows.forEach(row => {
      document.querySelector('#ai-board').appendChild(row);
    })
  }

  const addAiAttackFunctionality = (filledBoard, box, playerai) =>{
    box.addEventListener('click', () =>{
          console.log(playerai)
          let coorAI = playerai.aiPlay();
          let coorX = coorAI[0];
          let coorY = coorAI[1];
          let mark = filledBoard.receiveAttack([coorX, coorY])
          document.getElementById(`ai-row-${coorAI[0]}-${coorAI[1]}`).textContent = mark;
    })
}


  const fillBoxes = (filledBoard, id, playerai = false) => {
      document.getElementById(id).childNodes.forEach((row, indexRow) =>{
        row.childNodes.forEach((box, indexBox) => {
          if(id === 'ai-board' && playerai){
            box.textContent = '';
            addAiAttackFunctionality(filledBoard, box, playerai)
          }else{
            box.textContent =  filledBoard.table[indexRow-1][indexBox];
            addAttackFunctionality(filledBoard, box); 
            // the AI should execute after the player throws 
          }
        })
      })
  }


  const addAttackFunctionality = (filledBoard, box) =>{
    box.addEventListener('click', () =>{
          let coorX = Number(box.dataset.coordinates[0]);
          let coorY = Number(box.dataset.coordinates[1]);
          let mark = filledBoard.receiveAttack([coorX, coorY])
          box.textContent = mark;
    })
}


  const renderBoards = () => {
    let playerBoard = gameController.initializeBoard1();
    let aiBoard = gameController.initializeBoard2();
    let playerai = player();
    drawBoards();
    fillBoxes(playerBoard,'player-board', false);
    fillBoxes(aiBoard, 'ai-board', playerai);
  }

  return {renderBoards}
})();

export default DomTasks;

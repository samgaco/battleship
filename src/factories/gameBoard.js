const gameBoard = (() => {

    let table = [['*','*','*','*','*','*','*','*','*','*'],
         ['*','*','*','*','*','*','*','*','*','*'],
         ['*','*','*','*','*','*','*','*','*','*'],
         ['*','*','*','*','*','*','*','*','*','*'],
         ['*','*','*','*','*','*','*','*','*','*'],
         ['*','*','*','*','*','*','*','*','*','*'],
         ['*','*','*','*','*','*','*','*','*','*'],
         ['*','*','*','*','*','*','*','*','*','*'],
         ['*','*','*','*','*','*','*','*','*','*'],
         ['*','*','*','*','*','*','*','*','*','*'] ]


    const placeShip = (ship, coor) =>{
        let lastC = coor.length - 1;
        let x = [coor[0][0],coor[lastC][0]];
        let y = [coor[0][1],coor[lastC][1]];
        let firstPostDiff = x[1] - x[0];
        let lastPostDiff = y[1] - y[0] ;
        let distance = Math.sqrt((firstPostDiff)**2 + (lastPostDiff)**2);
        let validCoor = distance === ship.length- 1;
        
        if(validCoor){
            coor.forEach(el => {
                if(table[el[0]][el[1]] === '*'){
                    table[el[0]][el[1]] = 'X'
                }else{
                    throw new Error('Error Already Occupied')
                }   });
        }else{
            throw Error;
        }

    }

    return {table, placeShip}

})
  

module.exports = gameBoard;
  

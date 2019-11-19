const gameBoard = ((ships = []) => {

    return {
      ships: ships,
      table: [['*','*','*','*','*','*','*','*','*','*'],
           ['*','*','*','*','*','*','*','*','*','*'],
           ['*','*','*','*','*','*','*','*','*','*'],
           ['*','*','*','*','*','*','*','*','*','*'],
           ['*','*','*','*','*','*','*','*','*','*'],
           ['*','*','*','*','*','*','*','*','*','*'],
           ['*','*','*','*','*','*','*','*','*','*'],
           ['*','*','*','*','*','*','*','*','*','*'],
           ['*','*','*','*','*','*','*','*','*','*'],
           ['*','*','*','*','*','*','*','*','*','*'] ],


      placeShip(ship, coor) {
          let lastC = coor.length - 1;
          let x = [coor[0][0],coor[lastC][0]];
          let y = [coor[0][1],coor[lastC][1]];
          let firstPostDiff = x[1] - x[0];
          let lastPostDiff = y[1] - y[0] ;
          let distance = Math.sqrt((firstPostDiff)**2 + (lastPostDiff)**2);
          let validCoor = distance === ship.length- 1;

          if(validCoor){
              coor.forEach(el => {
                  if(this.table[el[0]][el[1]] === '*'){
                      this.table[el[0]][el[1]] = 'X'
                      ship.position.push([el[0],el[1]]);
                  }else{
                      throw new Error('Space already occupied')
                  }   });
          }else{
              throw Error;
          }

          this.ships.push(ship);

      },

      receiveAttack(coord) {
        let found = false;
        let index = 0
        this.ships.forEach(ship => {
          console.log(ship.position.includes(coord), ship.position, coord)
          for(let i = 0; i < ship.position.length; i++){
            if (ship.position[i][0] === coord[0] && ship.position[i][1] === coord[1]){
              found = true;
              ship.hit();
              this.table[coord[0]][coord[1]] = 'O';
              return;
            }
          }
        });
        if(found === false){
          this.table[coord[0]][coord[1]] = 'M';
      }
    }
    }


})


module.exports = gameBoard;

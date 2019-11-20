const player = ((turnV = true) => {

    let turn = turnV;
    let PosTaken = Array(100).fill().map((x,i)=>i+1);
    let movesdone = []

    const aiPlay = () =>{
        Math.round()
        let randMove = PosTaken[Math.floor(Math.random() * PosTaken.length)];
        PosTaken.splice(PosTaken.indexOf(randMove),1)
        movesdone.push(randMove)
        return randMove
    }

    return{aiPlay, PosTaken, turn, movesdone}

})
  
module.exports = player;
  
const player = require('../factories/player');

// testing its turn
test('its turn is true by default', () => {
    let playerRand = player();
    expect(playerRand.turn).toBe(true)
});

// testing its "AI" method
test('it doesnt repeat a move, and it chooses between 100 moves', () => {
    let playerRand = player();
    for(let i = 0; i <=100; i += 1){
        playerRand.aiPlay();
    }
    expect(playerRand.PosTaken.length).toBe(0)

});
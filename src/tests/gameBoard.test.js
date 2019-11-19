const gameBoard = require('../factories/gameBoard');
const newShip = require('../factories/ship');

// testing table
test('it should return an array with ten arrays inside', () => {
    let gBoard = gameBoard();
    expect(gBoard.table.length).toBe(10)
});

test('it should return an array that contains arrays of length 10 inside', () => {
    let gBoard = gameBoard();
    for(let i = 0; i < 10; i += 1){
        expect(gBoard.table[i].length).toBe(10)
    }
});

// testing method placeShip
test('it should be able to place ships within an array on the board horizontally', () => {
    let randomShip = newShip(4)
    let gBoard = gameBoard();
    gBoard.placeShip(randomShip, [[0,0],[0,1],[0,2],[0,3]]);
    expect(gBoard.table[0][0]).toBe("X");
    expect(gBoard.table[0][1]).toBe("X");
    expect(gBoard.table[0][2]).toBe("X");
    expect(gBoard.table[0][3]).toBe("X");
    expect(gBoard.table[0][4]).toBe("*");
});

test('it should be able to place ships within an array on the board vertically', () => {
    let randomShip = newShip(4)
    let gBoard = gameBoard();
    gBoard.placeShip(randomShip, [[1,0],[1,1],[1,2],[1,3]]);
    expect(gBoard.table[1][0]).toBe("X");
    expect(gBoard.table[1][1]).toBe("X");
    expect(gBoard.table[1][2]).toBe("X");
    expect(gBoard.table[1][3]).toBe("X");
    expect(gBoard.table[1][4]).toBe("*");
});

test('it should not be able to place a ship where there is a ship already', () => {
    let randomShip = newShip(4)
    let gBoard = gameBoard();
    gBoard.placeShip(randomShip, [[0,0],[0,1],[0,2],[0,3]]);
    expect(gBoard.placeShip(randomShip, [[0,0],[0,1],[0,2],[0,3]])).toThrow('Error Already Occupied')
});


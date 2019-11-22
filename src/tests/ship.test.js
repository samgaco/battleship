const newShip = require('../factories/ship');

const makaveli = newShip(4);

test('newShip factory takes length as a parameter and returns a new instance of ship object', () => {
  expect(makaveli.length).toBe(4);
});

test('Increases the number of hit after a successful hit', () => {
  makaveli.hit();
  expect(makaveli.hits).toBe(1);
});

test('The ship sinks when the number of hits equals the length of the ship', () => {
  for (let i = 0; i < 3; i+=1 {
    makaveli.hit();
  }
  expect(makaveli.isSunk()).toBe(true);
});

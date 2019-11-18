const newShip = () => {
  let position = [];
  let hits = 0;

  const hit = () => {
    this.isSunk() ? undefined : this.hits += 1;
  }

  const isSunk = () => {
    return this.hits >= this.length
  }

module.exports = newShip;

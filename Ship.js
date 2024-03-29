class Ship {
  constructor(length, hits = [], sunk = false, coordinates = []) {
    this.length = length;
    this.hits = new Array(length).fill(0);
    this.sunk = sunk;
    this.coordinates = [];
  }

  hit(index) {
    if (this.hits[index] === 1) {
      return "You've already hit this location";
    }
    this.hits[index] = 1;
  }

  isSunk() {
    return this.hits.every((hit) => hit === 1);
  }
}

export default Ship;

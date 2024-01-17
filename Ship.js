class Ship {
  constructor(length, hits, sunk) {
    this.length = length;
    this.hits = hits || 0;
    this.sunk = sunk || false;
  }

  hit() {
    this.hits++;
    if (this.hits === this.length) {
      this.sunk = true;
    }
  }

  isSunk() {
    return this.sunk;
  }
}

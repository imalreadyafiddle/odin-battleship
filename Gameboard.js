import Ship from "./Ship.js";

class Gameboard {
  constructor() {
    this.grid = this.createBoard();
    this.ships = [];
  }

  createBoard() {
    // a battleship board is a 10 x 10 grid of cells
    // vertical axis is lettered A-J
    // horizontal axis is numbered 1-10
    // cells be referencable as a human would call shots against them
    // (e.g., a human would not say[A, 0] but[A1] to refer to the first cell in the first row)
    // e.g., this.grid.A1 = { ship: null, hit: false }
    const board = {};
    const rows = "ABCDEFGHIJ";
    for (let row of rows) {
      for (let i = 1; i <= 10; i++) {
        board[`${row}${i}`] = { ship: null, hit: false };
      }
    }
    return board;
  }

  placeShip(length, originCell, direction) {
    //example function call placeShip(3, A1, 'horizontal')
    //if any piece of a ship would be placed outside the board, throw an error
    //if any piece of a ship would overlap with another ship, throw an error
    //otherwise place the ship in the correct position
    const ship = new Ship(length);
    const origin = this.grid[originCell];

    if (direction === "horizontal") {
      const row = originCell[0];
      const start = Number(originCell.slice(1));
      const end = start + length;
      if (end > 10) {
        throw new Error("Invalid placement");
      }
      for (let i = start; i < end; i++) {
        const cell = this.grid[`${row}${i}`];
        if (cell.ship) {
          throw new Error("Invalid placement");
        }
      }
      for (let i = start; i < end; i++) {
        const cell = this.grid[`${row}${i}`];
        cell.ship = ship;
        ship.coordinates.push(`${row}${i}`);
      }
    } else if (direction === "vertical") {
      const start = originCell[1];
      const row = originCell[0];
      const end = rows[rows.indexOf(row) + length];
      if (end > "J") {
        throw new Error("Invalid placement");
      }
      for (let i = row; i < end; i++) {
        const cell = this.grid[`${i}${start}`];
        if (cell.ship) {
          throw new Error("Invalid placement");
        }
      }
      for (let i = row; i < end; i++) {
        const cell = this.grid[`${i}${start}`];
        cell.ship = ship;
        ship.coordinates.push(`${i}${start}`);
      }
    }
    this.ships.push(ship);
  }

  receiveAttack(coordinates) {}
}

export default Gameboard;

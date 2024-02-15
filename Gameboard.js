import Ship from "./Ship.js";

class Gameboard {
  constructor() {
    this.grid = this.createBoard();
    this.ships = [];
  }

  createBoard() {
    // vertical axis is lettered A-J
    // horizontal axis is numbered 1-10
    // cells should be referencable as a human would call shots against them for ease of reading
    // (e.g., a human would not say[A, 0] but[A1] to refer to the first cell in the first row)
    const board = {};
    const rows = "ABCDEFGHIJ";
    for (let row of rows) {
      for (let i = 1; i <= 10; i++) {
        board[`${row}${i}`] = { ship: null, hit: false };
      }
    }
    return board;
  }

  //example function call placeShip(3, grid.A1, 'horizontal') would result in a 3 length ship placed at grid.A1, grid.A2, grid.A3
  placeShip(length, originCell, direction) {
    //if any piece of a ship would be placed outside the board, throw an error (e.g., A11, K1)
    //if any piece of a ship would overlap with another ship, throw an error
    //otherwise place the ship on the board and update the ships array
    const ship = new Ship(length);
    //if the ship is placed horizontally
    if (direction === "horizontal") {
      const row = originCell[0];
      const start = Number(originCell.slice(1));
      for (let i = start; i < start + length; i++) {
        const cell = `${row}${i}`;
        if (!this.grid[cell]) {
          throw new Error("Ship cannot be placed outside the board");
        }
        if (this.grid[cell].ship) {
          throw new Error("Ship cannot be placed on top of another ship");
        }
        this.grid[cell].ship = ship;
        ship.coordinates.push(cell);
      }
    }
    //if the ship is placed vertically
    if (direction === "vertical") {
      const startRow = originCell[0];
      const start = Number(originCell.slice(1));
      const rows = "ABCDEFGHIJ";
      const startIndex = rows.indexOf(startRow);
      for (let i = startIndex; i < startIndex + length; i++) {
        const cell = `${rows[i]}${start}`;
        if (!this.grid[cell]) {
          throw new Error("Ship cannot be placed outside the board");
        }
        if (this.grid[cell].ship) {
          throw new Error("Ship cannot be placed on top of another ship");
        }
        this.grid[cell].ship = ship;
        ship.coordinates.push(cell);
      }
    }
    this.ships.push(ship);
  }

  receiveAttack(coordinates) {}
}

export default Gameboard;

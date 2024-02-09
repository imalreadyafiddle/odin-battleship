// a battleship board is a 10 x 10 grid of cells
// vertical axis is lettered A-J
// horizontal axis is numbered 1-10
class Gameboard {
  constructor() {
    this.board = this.createBoard();
    this.ships = [];
  }
}

export default Gameboard;

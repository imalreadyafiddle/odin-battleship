// a battleship board is a 10 x 10 grid of cells
// vertical axis is lettered A-J
// horizontal axis is numbered 1-10
class Gameboard {
  constructor() {
    this.board = this.createBoard();
    this.ships = [];
  }

  createBoard() {
    let board = [];
    for (let i = 0; i < 10; i++) {
      board.push([]);
      for (let j = 0; j < 10; j++) {
        board[i].push(null);
      }
    }
    return board;
  }
}

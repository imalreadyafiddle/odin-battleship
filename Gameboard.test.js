import Gameboard from "./Gameboard.js";
import Ship from "./Ship.js";

it("is created correctly", () => {
  const board = new Gameboard();
  expect(board.grid.A1).toEqual({ ship: null, hit: false });
  expect(board.grid.J10).toEqual({ ship: null, hit: false });
  expect(board.ships).toEqual([]);
  expect(board.grid.K1).toBeUndefined();
  expect(board.grid.A11).toBeUndefined();
});
it("places ships horizontally correctly", () => {
  const board = new Gameboard();
  board.placeShip(3, "A1", "horizontal");
  expect(board.grid.A1.ship).toBeInstanceOf(Ship);
  expect(board.grid.A2.ship).toBeInstanceOf(Ship);
  expect(board.grid.A3.ship).toBeInstanceOf(Ship);
  expect(board.ships[0].coordinates).toEqual(["A1", "A2", "A3"]);
});
it("places ships vertically correctly", () => {
  const board = new Gameboard();
  board.placeShip(3, "A1", "vertical");
  expect(board.grid.A1.ship).toBeInstanceOf(Ship);
  expect(board.grid.B1.ship).toBeInstanceOf(Ship);
  expect(board.grid.C1.ship).toBeInstanceOf(Ship);
  expect(board.ships[0].coordinates).toEqual(["A1", "B1", "C1"]);
});
it("cannot place a ship outside the board", () => {
  const board = new Gameboard();
  expect(() => {
    board.placeShip(3, "A9", "horizontal");
  }).toThrow("Ship cannot be placed outside the board");
});
it.todo("cannot place a ship onto an occupied space");
it.todo("signals when all ships on a board are sunk");
it.todo("can receive an attack");
it.todo("can send an attack");

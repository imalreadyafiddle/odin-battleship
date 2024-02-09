import Gameboard from "./Gameboard.js";
import Ship from "./Ship.js";

it("is created correctly", () => {
  const gameboard = new Gameboard();
  expect(gameboard.grid.A1).toEqual({ ship: null, hit: false });
  expect(gameboard.grid.J10).toEqual({ ship: null, hit: false });
  expect(gameboard.grid.K11).toBeUndefined();
  expect(gameboard.grid.A0).toBeUndefined();
});
it("can place a ship on itself", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(3, "A1", "horizontal");
  expect(gameboard.grid.A1.ship).toBeInstanceOf(Ship);
  expect(gameboard.grid.A2.ship).toBeInstanceOf(Ship);
  expect(gameboard.grid.A3.ship).toBeInstanceOf(Ship);
  expect(gameboard.grid.A4.ship).toBe(null);
  expect(gameboard.grid.B1.ship).toBe(null);
});
it("places the ship in the correct positions", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(3, "A1", "horizontal");
  expect(gameboard.grid.A1.ship.coordinates).toEqual(["A1", "A2", "A3"]);
});
it("cannot place a ship outside itself", () => {
  const gameboard = new Gameboard();
  expect(() => {
    gameboard.placeShip(3, "A8", "horizontal");
  }).toThrow("Invalid placement");
});
it("cannot place a ship onto an occupied space", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(3, "A1", "horizontal");
  expect(() => {
    gameboard.placeShip(3, "A1", "horizontal");
  }).toThrow("Invalid placement");
});
it.todo("signals when all ships on a board are sunk");
it.todo("can receive an attack");
it.todo("can send an attack");

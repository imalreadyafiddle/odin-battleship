import Ship from "./Ship";

it("is correctly created", () => {
  const ship = new Ship(3);
  expect(ship).toEqual({ length: 3, hits: [0, 0, 0], sunk: false });
});

it("can be hit at a specific location", () => {
  const ship = new Ship(3);
  ship.hit(1);
  expect(ship.hits).toEqual([0, 1, 0]);
});

it("sinks when hits array contains all 1s", () => {
  const ship = new Ship(3);
  ship.hit(0);
  ship.hit(1);
  ship.hit(2);
  expect(ship.isSunk()).toBe(true);
});

it("does not sink when hits array does not contain all 1s", () => {
  const ship = new Ship(3);
  ship.hit(0);
  ship.hit(1);
  expect(ship.isSunk()).toBe(false);
});

it("rejects hits in the same location", () => {
  const ship = new Ship(3);
  ship.hit(0);
  expect(ship.hit(0)).toBe("You've already hit this location");
});

import battleShipFactory from "../battleShipFactory.js";


const battleShip = battleShipFactory(1);

it('takeHit',() => {
	expect(battleShip.hit(0)).toEqual(1);
});

it('checkIfSunk: not fullySunk',() => {
	expect(battleShip.checkIfSunk()).toEqual(false);
});

it('takeHit',() => {
	expect(battleShip.hit(1)).toEqual(2);
});

it('checkIfSunk: fullySunk',() => {
	expect(battleShip.checkIfSunk()).toEqual(true);
});

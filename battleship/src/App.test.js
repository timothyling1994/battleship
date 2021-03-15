import battleShipFactory from "./battleShipFactory.js";

const battleShip = battleShipFactory(2);

it('registerEnemyAttack: hit',() => {
	expect(battleShip.registerEnemyAttack([0,0])).toEqual("hit");
});
/*
it('checkIfSunk: fullySunk',() => {
	expect(battleShip.checkIfSunk()).toEqual(false);
});*/

it('registerEnemyAttack: miss',() => {
	expect(battleShip.registerEnemyAttack([0,2])).toEqual("miss");
});

it('registerEnemyAttack: miss',() => {
	expect(battleShip.registerEnemyAttack([0,1])).toEqual("Fully sunk!");
});
/*
it('checkIfSunk: fullySunk',() => {
	expect(battleShip.checkIfSunk()).toEqual(true);
});*/
import gameBoardFactory from "../gameBoardFactory.js";

const gameBoard = gameBoardFactory([[0],[1,2],[3,4,5],[10,11,12,13],[14,15,16,17,18]]);

beforeAll(()=>{
	return gameBoard.initBattleShips();
});

it('receiveAttack - hit',() => {
	expect(gameBoard.receiveAttack([0])).toEqual(true);
});

it('receiveAttack - miss',() => {
	expect(gameBoard.receiveAttack([20])).toEqual(false);
});

it('receiveAttack - hit',() => {
	expect(gameBoard.receiveAttack([1])).toEqual(true);
});

it('receiveAttack - hit',() => {
	expect(gameBoard.receiveAttack([2])).toEqual(true);
});

it('receiveAttack - hit',() => {
	expect(gameBoard.receiveAttack([3])).toEqual(true);
});

it('receiveAttack - hit',() => {
	expect(gameBoard.receiveAttack([4])).toEqual(true);
});

it('receiveAttack - hit',() => {
	expect(gameBoard.receiveAttack([5])).toEqual(true);
});

it('receiveAttack - hit',() => {
	expect(gameBoard.receiveAttack([10])).toEqual(true);
});
it('receiveAttack - hit',() => {
	expect(gameBoard.receiveAttack([11])).toEqual(true);
});
it('receiveAttack - hit',() => {
	expect(gameBoard.receiveAttack([12])).toEqual(true);
});
it('receiveAttack - hit',() => {
	expect(gameBoard.receiveAttack([13])).toEqual(true);
});
it('receiveAttack - hit',() => {
	expect(gameBoard.receiveAttack([14])).toEqual(true);
});
it('receiveAttack - hit',() => {
	expect(gameBoard.receiveAttack([15])).toEqual(true);
});
it('receiveAttack - hit',() => {
	expect(gameBoard.receiveAttack([16])).toEqual(true);
});
it('receiveAttack - hit',() => {
	expect(gameBoard.receiveAttack([17])).toEqual(true);
});

it('checkIfAllSunk - false',() => {
	expect(gameBoard.checkIfAllSunk()).toEqual(false);
});

it('receiveAttack - hit',() => {
	expect(gameBoard.receiveAttack([18])).toEqual(true);
});

it('checkIfAllSunk - true',() => {
	expect(gameBoard.checkIfAllSunk()).toEqual(true);
});
import gameBoardFactory from "../gameBoardFactory.js";

const gameBoard = gameBoardFactory([[[0,0]],[[1,1],[1,2]],[[2,0],[2,1],[2,2]],[[3,1],[3,2],[3,3],[3,4]],[[4,1],[4,2],[4,3],[4,4],[4,5]]]);

beforeAll(()=>{
	return gameBoard.initBattleShips();
});

it('receiveAttack - hit',() => {
	expect(gameBoard.receiveAttack([0,0])).toEqual(true);
});

it('receiveAttack - miss',() => {
	expect(gameBoard.receiveAttack([10,10])).toEqual(false);
});

it('receiveAttack - hit',() => {
	expect(gameBoard.receiveAttack([1,1])).toEqual(true);
});

it('receiveAttack - hit',() => {
	expect(gameBoard.receiveAttack([1,2])).toEqual(true);
});

it('receiveAttack - hit',() => {
	expect(gameBoard.receiveAttack([2,0])).toEqual(true);
});

it('receiveAttack - hit',() => {
	expect(gameBoard.receiveAttack([2,1])).toEqual(true);
});

it('receiveAttack - hit',() => {
	expect(gameBoard.receiveAttack([2,2])).toEqual(true);
});

it('receiveAttack - hit',() => {
	expect(gameBoard.receiveAttack([3,1])).toEqual(true);
});
it('receiveAttack - hit',() => {
	expect(gameBoard.receiveAttack([3,2])).toEqual(true);
});
it('receiveAttack - hit',() => {
	expect(gameBoard.receiveAttack([3,3])).toEqual(true);
});
it('receiveAttack - hit',() => {
	expect(gameBoard.receiveAttack([3,4])).toEqual(true);
});
it('receiveAttack - hit',() => {
	expect(gameBoard.receiveAttack([4,1])).toEqual(true);
});
it('receiveAttack - hit',() => {
	expect(gameBoard.receiveAttack([4,2])).toEqual(true);
});
it('receiveAttack - hit',() => {
	expect(gameBoard.receiveAttack([4,3])).toEqual(true);
});
it('receiveAttack - hit',() => {
	expect(gameBoard.receiveAttack([4,4])).toEqual(true);
});

it('checkIfAllSunk - false',() => {
	expect(gameBoard.checkIfAllSunk()).toEqual(false);
});

it('receiveAttack - hit',() => {
	expect(gameBoard.receiveAttack([4,5])).toEqual(true);
});

it('checkIfAllSunk - true',() => {
	expect(gameBoard.checkIfAllSunk()).toEqual(true);
});
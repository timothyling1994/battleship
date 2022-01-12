import gameController from "../gameController.js";

const game = gameController();
let humanLoc = [[0],[1,2],[3,4,5],[10,11,12,13],[14,15,16,17,18]];
let computerLoc = [[0],[1,2],[3,4,5],[10,11,12,13],[14,15,16,17,18]];
game.gameInit(humanLoc,computerLoc);


it('player 1 turn - hit',() => {
	expect(game.turnController([0])).toEqual({hitShip:true, endOfGame:false});
});

it('player 2 turn - hit',() => {
	expect(game.turnController([0])).toEqual({hitShip:true, endOfGame:false});
});

it('player 1 turn - miss',() => {
	expect(game.turnController([20])).toEqual({hitShip:false, endOfGame:false});
});

it('player 2 turn - miss',() => {
	expect(game.turnController([20])).toEqual({hitShip:false, endOfGame:false});
});

it('player 1 turn - hit',() => {
	expect(game.turnController([1])).toEqual({hitShip:true, endOfGame:false});
});

it('player 2 turn - hit',() => {
	expect(game.turnController([1])).toEqual({hitShip:true, endOfGame:false});
});

it('player 1 turn - hit',() => {
	expect(game.turnController([2])).toEqual({hitShip:true, endOfGame:false});
});

it('player 2 turn - hit',() => {
	expect(game.turnController([2])).toEqual({hitShip:true, endOfGame:false});
});

it('player 1 turn - hit',() => {
	expect(game.turnController([3])).toEqual({hitShip:true, endOfGame:false});
});

it('player 2 turn - hit',() => {
	expect(game.turnController([3])).toEqual({hitShip:true, endOfGame:false});
});

it('player 1 turn - hit',() => {
	expect(game.turnController([4])).toEqual({hitShip:true, endOfGame:false});
});

it('player 2 turn - hit',() => {
	expect(game.turnController([4])).toEqual({hitShip:true, endOfGame:false});
});

it('player 1 turn - hit',() => {
	expect(game.turnController([5])).toEqual({hitShip:true, endOfGame:false});
});

it('player 2 turn - hit',() => {
	expect(game.turnController([5])).toEqual({hitShip:true, endOfGame:false});
});

it('player 1 turn - hit',() => {
	expect(game.turnController([10])).toEqual({hitShip:true, endOfGame:false});
});

it('player 2 turn - hit',() => {
	expect(game.turnController([10])).toEqual({hitShip:true, endOfGame:false});
});

it('player 1 turn - hit',() => {
	expect(game.turnController([11])).toEqual({hitShip:true, endOfGame:false});
});

it('player 2 turn - hit',() => {
	expect(game.turnController([11])).toEqual({hitShip:true, endOfGame:false});
});

it('player 1 turn - hit',() => {
	expect(game.turnController([12])).toEqual({hitShip:true, endOfGame:false});
});

it('player 2 turn - hit',() => {
	expect(game.turnController([12])).toEqual({hitShip:true, endOfGame:false});
});

it('player 1 turn - hit',() => {
	expect(game.turnController([13])).toEqual({hitShip:true, endOfGame:false});
});

it('player 2 turn - hit',() => {
	expect(game.turnController([13])).toEqual({hitShip:true, endOfGame:false});
});

it('player 1 turn - hit',() => {
	expect(game.turnController([14])).toEqual({hitShip:true, endOfGame:false});
});

it('player 2 turn - hit',() => {
	expect(game.turnController([14])).toEqual({hitShip:true, endOfGame:false});
});

it('player 1 turn - hit',() => {
	expect(game.turnController([15])).toEqual({hitShip:true, endOfGame:false});
});

it('player 2 turn - hit',() => {
	expect(game.turnController([15])).toEqual({hitShip:true, endOfGame:false});
});

it('player 1 turn - hit',() => {
	expect(game.turnController([16])).toEqual({hitShip:true, endOfGame:false});
});

it('player 2 turn - hit',() => {
	expect(game.turnController([16])).toEqual({hitShip:true, endOfGame:false});
});

it('player 1 turn - hit',() => {
	expect(game.turnController([17])).toEqual({hitShip:true, endOfGame:false});
});

it('player 2 turn - hit',() => {
	expect(game.turnController([17])).toEqual({hitShip:true, endOfGame:false});
});

it('player 1 turn - hit - ALL SHIPS SUNK',() => {
	expect(game.turnController([18])).toEqual({hitShip:true, endOfGame:true});
});

it('player 2 turn - hit - ALL SHIPS SUNK',() => {
	expect(game.turnController([18])).toEqual({hitShip:true, endOfGame:true});
});


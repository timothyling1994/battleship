import gameController from "../gameController.js";

const game = gameController();
let humanLoc = [[[0,0]],[[1,1],[1,2]],[[2,0],[2,1],[2,2]],[[3,1],[3,2],[3,3],[3,4]],[[4,1],[4,2],[4,3],[4,4],[4,5]]];
let computerLoc = [[[0,0]],[[1,1],[1,2]],[[2,0],[2,1],[2,2]],[[3,1],[3,2],[3,3],[3,4]],[[4,1],[4,2],[4,3],[4,4],[4,5]]];
game.gameInit(humanLoc,computerLoc);


it('player 1 turn - hit',() => {
	expect(game.turnController([0,0])).toEqual({hitShip:true, endOfGame:false});
});

it('player 2 turn - hit',() => {
	expect(game.turnController([0,0])).toEqual({hitShip:true, endOfGame:false});
});

it('player 1 turn - miss',() => {
	expect(game.turnController([10,0])).toEqual({hitShip:false, endOfGame:false});
});

it('player 2 turn - miss',() => {
	expect(game.turnController([10,0])).toEqual({hitShip:false, endOfGame:false});
});

it('player 1 turn - hit',() => {
	expect(game.turnController([1,1])).toEqual({hitShip:true, endOfGame:false});
});

it('player 2 turn - hit',() => {
	expect(game.turnController([1,1])).toEqual({hitShip:true, endOfGame:false});
});

it('player 1 turn - hit',() => {
	expect(game.turnController([1,2])).toEqual({hitShip:true, endOfGame:false});
});

it('player 2 turn - hit',() => {
	expect(game.turnController([1,2])).toEqual({hitShip:true, endOfGame:false});
});

it('player 1 turn - hit',() => {
	expect(game.turnController([2,0])).toEqual({hitShip:true, endOfGame:false});
});

it('player 2 turn - hit',() => {
	expect(game.turnController([2,0])).toEqual({hitShip:true, endOfGame:false});
});

it('player 1 turn - hit',() => {
	expect(game.turnController([2,1])).toEqual({hitShip:true, endOfGame:false});
});

it('player 2 turn - hit',() => {
	expect(game.turnController([2,1])).toEqual({hitShip:true, endOfGame:false});
});

it('player 1 turn - hit',() => {
	expect(game.turnController([2,2])).toEqual({hitShip:true, endOfGame:false});
});

it('player 2 turn - hit',() => {
	expect(game.turnController([2,2])).toEqual({hitShip:true, endOfGame:false});
});

it('player 1 turn - hit',() => {
	expect(game.turnController([3,1])).toEqual({hitShip:true, endOfGame:false});
});

it('player 2 turn - hit',() => {
	expect(game.turnController([3,1])).toEqual({hitShip:true, endOfGame:false});
});

it('player 1 turn - hit',() => {
	expect(game.turnController([3,2])).toEqual({hitShip:true, endOfGame:false});
});

it('player 2 turn - hit',() => {
	expect(game.turnController([3,2])).toEqual({hitShip:true, endOfGame:false});
});

it('player 1 turn - hit',() => {
	expect(game.turnController([3,3])).toEqual({hitShip:true, endOfGame:false});
});

it('player 2 turn - hit',() => {
	expect(game.turnController([3,3])).toEqual({hitShip:true, endOfGame:false});
});

it('player 1 turn - hit',() => {
	expect(game.turnController([3,4])).toEqual({hitShip:true, endOfGame:false});
});

it('player 2 turn - hit',() => {
	expect(game.turnController([3,4])).toEqual({hitShip:true, endOfGame:false});
});

it('player 1 turn - hit',() => {
	expect(game.turnController([4,1])).toEqual({hitShip:true, endOfGame:false});
});

it('player 2 turn - hit',() => {
	expect(game.turnController([4,1])).toEqual({hitShip:true, endOfGame:false});
});

it('player 1 turn - hit',() => {
	expect(game.turnController([4,2])).toEqual({hitShip:true, endOfGame:false});
});

it('player 2 turn - hit',() => {
	expect(game.turnController([4,2])).toEqual({hitShip:true, endOfGame:false});
});

it('player 1 turn - hit',() => {
	expect(game.turnController([4,3])).toEqual({hitShip:true, endOfGame:false});
});

it('player 2 turn - hit',() => {
	expect(game.turnController([4,3])).toEqual({hitShip:true, endOfGame:false});
});

it('player 1 turn - hit',() => {
	expect(game.turnController([4,4])).toEqual({hitShip:true, endOfGame:false});
});

it('player 2 turn - hit',() => {
	expect(game.turnController([4,4])).toEqual({hitShip:true, endOfGame:false});
});

it('player 1 turn - hit - ALL SHIPS SUNK',() => {
	expect(game.turnController([4,5])).toEqual({hitShip:true, endOfGame:true});
});

it('player 2 turn - hit - ALL SHIPS SUNK',() => {
	expect(game.turnController([4,5])).toEqual({hitShip:true, endOfGame:true});
});
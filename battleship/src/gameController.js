import playerFactory from "./playerFactory.js";

let gameController = () => { 
	let humanPlayer;
	let computerPlayer;

	let gameInit = (humanPlayerShipLocs,computerPlayerShipLocs) => {

		humanPlayer = playerFactory(true,humanPlayerShipLocs);
		computerPlayer = playerFactory(false,computerPlayerShipLocs);
	}

	let turnController = (inputCoords) => {
		if(humanPlayer.myTurn)
		{
			const result = humanPlayer.makeMove(inputCoords,computerPlayer.myGameBoard);
			humanPlayer.myTurn = false;
			computerPlayer.myTurn = true;
			return result;
		}
		else
		{
			const result = computerPlayer.makeMove(inputCoords,humanPlayer.myGameBoard);
			computerPlayer.myTurn = false;
			humanPlayer.myTurn = true;
			return result;
		}
	}

	return {gameInit,turnController};
};

export default gameController;
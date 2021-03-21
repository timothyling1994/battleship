import playerFactory from "./playerFactory.js";

let gameController = () => { 

	let humanPlayer;
	let computerPlayer;

	let gameInit = (humanPlayerShipLocs) => {

		humanPlayer = playerFactory(true,humanPlayerShipLocs);

		let computerPlayerShipLocs = getComputerShipLocs();
		computerPlayer = playerFactory(false,[[0],[1,2],[3,4,5],[10,11,12,13],[14,15,16,17,18]]);
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

	let getComputerShipLocs = () => {

		//let finishedPlacingShips = false;
		let selectedSpots = [];
		let currentCarrierLength = 5;

		while(currentCarrierLength>0)
		{
			let randomIndex = Math.floor(Math.random()*100);
			let randomRowColumn = Math.floor(Math.random()*2);
			
		}
	};

	return {gameInit,turnController};
};

export default gameController;
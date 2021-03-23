import playerFactory from "./playerFactory.js";

let gameController = () => { 

	let humanPlayer;
	let computerPlayer;

	let gameInit = (humanPlayerShipLocs,computerPlayerShipLocs) => {

		humanPlayer = playerFactory(true,humanPlayerShipLocs);

		//let computerPlayerShipLocs = getComputerShipLocs();
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

	let getComputersMove = () => {
		let validMove = false;
		let selectedIndex;

		while(!validMove)
		{
			selectedIndex = Math.floor(Math.random()*100);
			console.log("selectedIndex:"+selectedIndex);
			let selectedDiv = document.getElementById(selectedIndex);
			if(!selectedDiv.classList.contains("clicked"))
			{
				validMove = true;
			}
			else
			{
				console.log("repeated");
			}
		}

		return selectedIndex;

	};

	/*let getComputerShipLocs = () => {

		let selectedSpots = [];
		let currentCarrierLength = 5;

		while(currentCarrierLength>0)
		{
			let randomIndex = Math.floor(Math.random()*100);
			let randomRowColumn = Math.floor(Math.random()*2);

		}
	};*/

	return {gameInit,turnController,getComputersMove};
};

export default gameController;
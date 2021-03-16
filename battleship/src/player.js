import gameBoardFactory from "./gameBoardFactory.js";

let player = (isPlayerOne, shipLocations) => {
	
	let myTurn = isPlayerOne;
	let isComputer = !isPlayerOne;
	let myGameBoard = gameBoardFactory(shipLocations);

	let makeMove = (inputCoords, enemyGameBoard) => {

		const hitShip = enemyGameBoard.receiveAttack(inputCoords);
		const endOfGame = enemyGameBoard.checkIfAllSunk();

		return {hitShip,endOfGame};
	};

	return {makeMove};
};
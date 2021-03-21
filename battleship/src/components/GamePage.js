import React from "react";
import {useState} from "react";
import gameController from "../gameController.js";

function GamePage(props){

	let currentGameController;
	let tempEnemyBoard = [[0],[1,2],[3,4,5],[10,11,12,13],[14,15,16,17,18]];

	const initGameController = () => {
		currentGameController = gameController(props.storeShipLocs,tempEnemyBoard);
	};

	const renderGameBoards = () => {
		
	};

	initGameController();
	renderGameBoards(); 
	
	return(
		null
	);
}

export default GamePage;
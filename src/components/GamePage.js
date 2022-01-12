import React from "react";
import {useState} from "react";
import gameController from "../gameController.js";

function GamePage(props){

	const GRID_DIMENSION = 10;
	const messageOptions = ["awaiting coordinates...","firing shot...it's a miss!","firing shot...it's a hit!","you just sank an enemy ship!"]
	const playerNames =[props.name,"computer"];
	const [currentPlayer,setCurrentPlayer]=useState(playerNames[0]);
	const [msg,setMsg] = useState(messageOptions[0]);


	let playerOneGrid = [];
	let playerTwoGrid = [];
	let currentGameController;
	let playerOneBoard = props.storeShipLocs;
	const playerOneBoardFlattened = playerOneBoard.flat(2).sort(function (a,b){
		return a-b;
	});
	let tempEnemyBoard = [[0],[1,2],[3,4,5],[10,11,12,13],[14,15,16,17,18]];

	const initGameController = () => {
		currentGameController = gameController();
		currentGameController.gameInit(props.storeShipLocs,tempEnemyBoard);
	};

	const initGameBoards = () =>{
	
		for(let i = 0;i <GRID_DIMENSION*GRID_DIMENSION;i++)
		{
			playerTwoGrid.push(<div className="grid-element" onClick={attack} onMouseEnter={highlight} onMouseLeave={removeHighlight} id={"enemy-"+i}></div>);
	
			if(playerOneBoardFlattened.includes(i))
			{
				playerOneGrid.push(<div className="grid-element highlight" id={i}></div>);
			}
			else
			{
				playerOneGrid.push(<div className="grid-element" id={i}></div>);
			}
		}
	};

	const attack = (target) => { 
	

		if(!target.target.classList.contains("clicked"))
		{
			target.target.classList.add("clicked");
			let index = target.target.id.indexOf("-");
			let gridNum = target.target.id.substring(index+1);
			let result = currentGameController.turnController(parseInt(gridNum));

			if(result.hitShip)
			{
				setMsg(messageOptions[2]);
			}
			else
			{
				setMsg(messageOptions[1]);
			}

			setTimeout(function(){
				markBoard(target.target.id,result.hitShip);
				getComputersAttack();
				setMsg(messageOptions[0]);
			},1000);
		}

	};

	const getComputersAttack = () => {
		let computerResult = currentGameController.getComputersMove();
		let result = currentGameController.turnController(computerResult);
		let selectedDiv = document.getElementById(computerResult);
		selectedDiv.classList.add("clicked");
		markBoard(computerResult,result.hitShip);
	};

	const highlight = (target) => {

		let target_num = target.target.id;
		let divToHighlight = document.getElementById(target_num);
		if(!divToHighlight.classList.contains("clicked"))
		{
			divToHighlight.classList.add("highlight");
		}
	};

	const removeHighlight = (target) => {
		let target_num = target.target.id;
		let divToRemoveHighlight = document.getElementById(target_num);
		if(!divToRemoveHighlight.classList.contains("clicked"))
		{
			divToRemoveHighlight.classList.remove("highlight");
		}
	};	

	const markBoard = (gridId, result) => {
		let divToMark = document.getElementById(gridId);
		
		if(result)
		{
			divToMark.style.backgroundColor="red";
		}
		else
		{
			divToMark.style.backgroundColor="black";
		}
	};

	initGameController();
	initGameBoards();	
	
	return(
		<div className="game-page">
			<div className="game-status">{currentPlayer}, {msg}</div>
			<div className="gameboards-container">
				<div className="main-gameboard">
					{playerOneGrid.map((gridelement)=>gridelement)}
				</div>
				<div className="main-gameboard">
					{playerTwoGrid.map((gridelement)=>gridelement)}
				</div>
			</div>
		</div>
	);
}

export default GamePage;
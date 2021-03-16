import React from "react";

function StartGame(props){

	let arrangeBoard = () => {
		props.toggleShowStart(false);
		props.toggleArrangeBoard(true);
	};

	return(
		<div className="start-game">
	        <div className="enter-name-label">ENTER PLAYER NAME</div>
	        <div className="name-form"><input className="name-input"placeholder="COMBATANT NAME"/></div>
	        <div className="start-game-btn" onClick={()=>{arrangeBoard()}}>START GAME </div>
		</div>
	);
}

export default StartGame;
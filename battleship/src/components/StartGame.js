import React from "react";

function StartGame(props){

	let arrangeBoard = () => {
		let start_game_container = document.querySelector(".start-game");
		start_game_container.classList.add("fadeOut");
		setTimeout(function(){
			props.addName(document.querySelector(".name-input").value);
			props.toggleStartPage(false);
			props.toggleArrangeBoard(true);
		}, 2000);
	
	};

	return(
		<div className="start-game">
	        <div className="enter-name-label">ENTER PLAYER NAME</div>
	        <div className="name-form"><input className="name-input"placeholder="COMBATANT NAME"/></div>
	        <div className="start-game-btn-row"><div className="start-game-btn" onClick={()=>{arrangeBoard()}}>START GAME </div></div>
		</div>
	);
}

export default StartGame;
import React from "react";
import {useState} from "react";

function ArrangeBoard(props){

	const GRID_DIMENSION = 10;
	let grid_element_arr = [];

	const [orientation,setOrientation] = useState("x-axis");
	let currentCarrierLength = 5;

	const initBoard = () => {
		for(let i = 0;i <GRID_DIMENSION*GRID_DIMENSION;i++)
		{
			grid_element_arr.push(<div className="grid-element" id={i} onMouseEnter={highlight} onMouseLeave={removeHighlight}></div>);
		}
	};

	const highlight = (target) => {

		let target_num = parseInt(target.target.id);

		if(orientation=="x-axis")
		{
			let row_num = Math.floor(target_num/10);

			if(target_num+currentCarrierLength<=(10*(row_num+1)))
			{
				for(let i = 0;i<currentCarrierLength;i++)
				{
					let divToHighlight = document.getElementById((target_num+i).toString());	
					divToHighlight.classList.add("highlight");
				}
			}
		}

		else
		{
			let column_num = target_num%10;

			if(target_num+(currentCarrierLength*10)<=(100+column_num))
			{
				for(let i = 0;i<currentCarrierLength;i++)
				{
					let divToHighlight = document.getElementById((target_num+(i*10)).toString());	
					divToHighlight.classList.add("highlight");
				}
			}

		}
	};

	const removeHighlight = (target) => {
		let target_num = parseInt(target.target.id);

		if(orientation=="x-axis")
		{
			let row_num = Math.floor(target_num/10);

			if(target_num+currentCarrierLength<=(10*(row_num+1)))
			{
				for(let i = 0;i<currentCarrierLength;i++)
				{
					let divToHighlight = document.getElementById((target_num+i).toString());	
					divToHighlight.classList.remove("highlight");
				}
			}
		}

		else
		{
			let column_num = target_num%10;

			if(target_num+(currentCarrierLength*10)<=(100+column_num))
			{
				for(let i = 0;i<currentCarrierLength;i++)
				{
					let divToHighlight = document.getElementById((target_num+(i*10)).toString());	
					divToHighlight.classList.remove("highlight");
				}
			}

		}
	};

	const decrementCarrierLength = () => {
		if(currentCarrierLength>0)
		{
			currentCarrierLength -= 1;
		}
	};

	const changeOrientation = () => {
		if(orientation=="x-axis")
		{
			setOrientation("y-axis");
		}
		else
		{
			setOrientation("x-axis");
		}
	};

	initBoard();
	

	return(
		<div className="arrange-board">
			<div className="place-carriers-label">{props.name}, PLACE YOUR CARRIERS</div>
			<div className="change-orientation" onClick={changeOrientation}>{orientation.toUpperCase()}</div>
			<div className="gameboard-container">
				<div className="gameboard">
					{grid_element_arr.map((gridelement)=>gridelement)}
				</div>
			</div>
		</div>
	);
}

export default ArrangeBoard;
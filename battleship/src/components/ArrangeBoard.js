import React from "react";
import {useState} from "react";
//import carrier from "../assets/carrier.svg";

function ArrangeBoard(props){

	const GRID_DIMENSION = 10;
	let grid_element_arr = [];

	const [shipLocs,setShipLocs] = useState([]);
	const [orientation,setOrientation] = useState("x-axis");
	const [currentCarrierLength,setCurrentCarrierLength] = useState(5);

	const initArrangeBoard = () => {
		for(let i = 0;i <GRID_DIMENSION*GRID_DIMENSION;i++)
		{
			grid_element_arr.push(<div className="grid-element" id={i} onClick={placeShip} onMouseEnter={highlight} onMouseLeave={removeHighlight}></div>);
		}
	};

	const placeShip = (target) => {

		let target_num = parseInt(target.target.id);
		let div = document.getElementById(target_num.toString());

		/*if(orientation==="x-axis")
		{
			let searchStr = "";

			for(let i=0;i<currentCarrierLength;i++)
			{
				searchStr += ("#\\3"+(target_num+i)+",");
			}
		
			let nodeList = document.querySelectorAll(searchStr);
			console.log(nodeList);
		}
		else
		{

		}*/


		if(!div.classList.contains("clicked"))
		{
			if(orientation==="x-axis")
			{
				let row_num = Math.floor(target_num/10);

				if(target_num+currentCarrierLength<=(10*(row_num+1)))
				{
					let currentShipLoc = [];
					for(let i = 0;i<currentCarrierLength;i++)
					{
						let divToHighlight = document.getElementById((target_num+i).toString());	
						divToHighlight.classList.add("clicked");
						divToHighlight.classList.add("highlight");
						currentShipLoc.push([target_num+i]);

					}
					console.log(currentShipLoc);
					shipLocs.unshift(currentShipLoc);
				}
			}

			else
			{
				let column_num = target_num%10;

				if(target_num+(currentCarrierLength*10)<=(100+column_num))
				{
					let currentShipLoc = [];
					for(let i = 0;i<currentCarrierLength;i++)
					{
						let divToHighlight = document.getElementById((target_num+(i*10)).toString());	
						divToHighlight.classList.add("clicked");
						divToHighlight.classList.add("highlight");
						currentShipLoc.push([target_num+i]);
					}
					console.log(currentShipLoc);
					shipLocs.unshift(currentShipLoc);
				}

			}

			decrementCarrierLength();
		}
	};

	const highlight = (target) => {

		let target_num = parseInt(target.target.id);
		let div = document.getElementById(target_num.toString());
		let canHighlight = true;

		for(let i = 0;i<currentCarrierLength;i++)
		{
			let divToHighlight = document.getElementById((target_num+i).toString());	
			if(divToHighlight.classList.contains("clicked"))
			{
				canHighlight=false;
			}
			
		}

		if(canHighlight)
		{
			if(orientation==="x-axis")
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
		}
	};

	const removeHighlight = (target) => {

		let target_num = parseInt(target.target.id);
		//let div = document.getElementById(target_num.toString());

		if(orientation==="x-axis")
		{
			let canRemoveHighlight = true;
			for(let i =0; i<currentCarrierLength;i++)
			{
				let divToHighlight = document.getElementById((target_num+i).toString());
				if(divToHighlight.classList.contains("clicked"))
				{
					canRemoveHighlight = false;
				}
			}

			if(canRemoveHighlight)
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
		}
		else
		{
			let canRemoveHighlight = true;
			for(let i =0; i<currentCarrierLength;i++)
			{
				let divToHighlight = document.getElementById((target_num+(i*10)).toString());
				if(divToHighlight.classList.contains("clicked"))
				{
					canRemoveHighlight = false;
				}
			}

			if(canRemoveHighlight)
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
		
		}
	
	};

	const decrementCarrierLength = () => {
		console.log(currentCarrierLength);
		if(currentCarrierLength>1)
		{
			setCurrentCarrierLength(currentCarrierLength-1);
		}
		else
		{
			setCurrentCarrierLength(currentCarrierLength-1);
			props.storeShipLocations(shipLocs);
			props.toggleGamePage();
		}
	};

	const changeOrientation = () => {
		if(orientation==="x-axis")
		{
			setOrientation("y-axis");
		}
		else
		{
			setOrientation("x-axis");
		}
	};

	initArrangeBoard();
	
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
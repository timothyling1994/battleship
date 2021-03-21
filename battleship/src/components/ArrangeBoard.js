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
		let canPlace = true;

		let row_num = Math.floor(target_num/10);
		let column_num = target_num%10;

		if((target_num+currentCarrierLength>(10*(row_num+1)) && orientation==="x-axis") || (target_num+(currentCarrierLength*10)>(100+column_num) && orientation==="y-axis"))
		{
			canPlace=false;
		}

		else
		{
			for(let i = 0;i<currentCarrierLength;i++)
			{
				if(orientation==="x-axis")
				{
					let divToHighlight = document.getElementById((target_num+i).toString());
					if(divToHighlight.classList.contains("clicked"))
					{
						canPlace=false;
					}	
				}
				else
				{
					let divToHighlight = document.getElementById((target_num+(i*10)).toString());
					if(divToHighlight.classList.contains("clicked"))
					{
						canPlace=false;
					}
				}
				
			}
		}

		if(canPlace)
		{
			if(orientation==="x-axis")
			{
				let currentShipLoc = [];
				for(let i = 0;i<currentCarrierLength;i++)
				{
					let divToHighlight = document.getElementById((target_num+i).toString());	
					divToHighlight.classList.add("clicked");
					divToHighlight.classList.add("highlight");
					currentShipLoc.push([target_num+i]);
				}
				shipLocs.unshift(currentShipLoc);
				
			}

			else
			{
				let currentShipLoc = [];
				for(let i = 0;i<currentCarrierLength;i++)
				{
					let divToHighlight = document.getElementById((target_num+(i*10)).toString());	
					divToHighlight.classList.add("clicked");
					divToHighlight.classList.add("highlight");
					currentShipLoc.push([target_num+(i*10)]);
				}
				shipLocs.unshift(currentShipLoc);

			}
			decrementCarrierLength();
		}
	};

	const highlight = (target) => {

		let target_num = parseInt(target.target.id);
		let canHighlight = true;

		let row_num = Math.floor(target_num/10);
		let column_num = target_num%10;

		if((target_num+currentCarrierLength>(10*(row_num+1)) && orientation==="x-axis") || (target_num+(currentCarrierLength*10)>(100+column_num) && orientation==="y-axis"))
		{
			canHighlight=false;
		}

		else
		{
			for(let i = 0;i<currentCarrierLength;i++)
			{
				if(orientation==="x-axis")
				{
					let divToHighlight = document.getElementById((target_num+i).toString());
					if(divToHighlight.classList.contains("clicked"))
					{
						canHighlight=false;
					}	
				}
				else
				{
					let divToHighlight = document.getElementById((target_num+(i*10)).toString());
					if(divToHighlight.classList.contains("clicked"))
					{
						canHighlight=false;
					}
				}
				
			}
		}

		if(canHighlight)
		{
			if(orientation==="x-axis")
			{
				for(let i = 0;i<currentCarrierLength;i++)
				{
					let divToHighlight = document.getElementById((target_num+i).toString());	
					divToHighlight.classList.add("highlight");
				}
				
			}

			else
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
		let canRemoveHighlight = true;

		let row_num = Math.floor(target_num/10);
		let column_num = target_num%10;

		if((target_num+currentCarrierLength>(10*(row_num+1)) && orientation==="x-axis") || (target_num+(currentCarrierLength*10)>(100+column_num) && orientation==="y-axis"))
		{
			canRemoveHighlight=false;
		}

		else
		{
			for(let i = 0;i<currentCarrierLength;i++)
			{
				if(orientation==="x-axis")
				{
					let divToHighlight = document.getElementById((target_num+i).toString());
					if(divToHighlight.classList.contains("clicked"))
					{
						canRemoveHighlight=false;
					}	
				}
				else
				{
					let divToHighlight = document.getElementById((target_num+(i*10)).toString());
					if(divToHighlight.classList.contains("clicked"))
					{
						canRemoveHighlight=false;
					}
				}
				
			}
		}

		if(canRemoveHighlight)
		{
			if(orientation==="x-axis")
			{
				for(let i = 0;i<currentCarrierLength;i++)
				{
					let divToHighlight = document.getElementById((target_num+i).toString());	
					divToHighlight.classList.remove("highlight");
				}
				
			}

			else
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
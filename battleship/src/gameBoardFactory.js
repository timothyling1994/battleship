import battleShipFactory from "./battleShipFactory.js";

let gameBoardFactory = (shipLocations) => {

	let TOTAL_NUM_SHIPS = 5;
	let battleShipArr = []; 
	let battleShipLocations = shipLocations;

	let initBattleShips = () => {
		for (let i=0;i<TOTAL_NUM_SHIPS;i++)
		{
			let battleShip = battleShipFactory(i);
			battleShipArr.push(battleShip);
		}
	};
	//need to prevent passing in same coords, else it will still increment counter; 
	let receiveAttack = (inputCoord) => {

		let isShipHit = false;
		let isShipSunk = false;

		for(let i=0;i<TOTAL_NUM_SHIPS;i++)
		{
			let length = battleShipLocations[i].length;

			for(let j=0;j<length;j++)
			{
				if(battleShipLocations[i][j][0]==inputCoord[0] && battleShipLocations[i][j][1]==inputCoord[1])
				{
					battleShipArr[i].hit();
					isShipHit = true;
				}
			}
		}
		
		return isShipHit;
	};

	let checkIfAllSunk = () => {

		const sunkShips = battleShipArr.filter(ship=>ship.checkIfSunk());
		if(sunkShips.length == TOTAL_NUM_SHIPS)
		{
			return true;
		}

		return false;
	};

	return {initBattleShips,receiveAttack,checkIfAllSunk};

};


export default gameBoardFactory;
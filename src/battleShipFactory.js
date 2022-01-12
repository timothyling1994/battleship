let battleShipFactory = (inputLength) =>{

	let maxHitsAllowed = inputLength+1;
	let currentHitsTaken = 0;
	let isSunk = false;
	//let coordLocation = inputCoordLocation;
	let hitCoords = [];

	let hit = (coords) => {
		currentHitsTaken += 1;
		hitCoords.push(coords);
		//console.log("currentHitsTaken: "+currentHitsTaken + "length:"+maxHitsAllowed);
		return currentHitsTaken;
	};

	let checkIfSunk = () => {
		if(currentHitsTaken == maxHitsAllowed)
		{
			isSunk = true;
		}
		return isSunk;
	}

	return {isSunk,hit,checkIfSunk};

};

export default battleShipFactory;
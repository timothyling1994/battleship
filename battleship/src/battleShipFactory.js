let battleShipFactory = (inputLength) =>{

	let length = inputLength;
	let isSunk = false;
	let coordLocation = [[0,0],[0,1]];
	let coordsNotHit = [...coordLocation];

	let registerEnemyAttack = (selectedCoord) => {
		
		let selectedIndex = -1;
		let len = coordsNotHit.length;

		for(let i = 0;i<len;i++)
		{
			if((coordsNotHit[i][0] == selectedCoord[0]) && coordsNotHit[i][1] == selectedCoord[1])
			{
				selectedIndex = i;
				break;
			}
		}

		if(selectedIndex > -1)
		{
			coordsNotHit.splice(selectedIndex,1);
			let didSink = checkIfSunk();
			
			if(didSink)
			{
				return "Fully sunk!";
			}
			else
			{
				return "hit";
			}
		}
		else
		{
			return "miss";
		}

	};

	let checkIfSunk = () => {
		if(coordsNotHit.length == 0)
		{
			isSunk = true;
		}
		return isSunk;
	}

	return {registerEnemyAttack};

};

export default battleShipFactory;
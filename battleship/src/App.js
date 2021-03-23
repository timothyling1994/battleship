import './App.css';
import {useState} from 'react';
import StartGame from './components/StartGame.js';
import ArrangeBoard from './components/ArrangeBoard.js';
import GamePage from './components/GamePage.js';

function App() {

  const [showStart,setShowStart] = useState(true);
  const [name,setName] = useState();
  const [showArrangeBoard,setShowArrangeBoard] = useState(false);
  const [showGamePage,setShowGamePage] = useState(false);
  const [storeShipLocs,setStoreShipLocs] = useState([]);


  const toggleStartPage = (value) => {
    setShowStart(value);
  };

  const toggleArrangeBoard = (value) => {
    setShowArrangeBoard(value);
  };

  const toggleGamePage = (value) => {
    setShowGamePage(value);
  } 

  const addName = (name) =>{
    setName(name);
  };

  const storeShipLocations = (arr) => {
      setStoreShipLocs(arr);
  };


  return (
    <div className="App">
      <div className="title-row"><div className="title" onClick={()=>{window.location.reload();return false;}}>BATTLESHIP</div></div>
      {showStart ? <StartGame toggleStartPage={toggleStartPage} toggleArrangeBoard={toggleArrangeBoard} addName={addName}/> : null}
      {showArrangeBoard ? <ArrangeBoard name={name} toggleArrangeBoard={toggleArrangeBoard} toggleGamePage={toggleGamePage} storeShipLocations={storeShipLocations}/>:null}
      {showGamePage ? <GamePage name={name} storeShipLocs={storeShipLocs}/> : null}
    </div>
  );
}

export default App;

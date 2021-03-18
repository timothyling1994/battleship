import './App.css';
import {useState} from 'react';
import StartGame from './components/StartGame.js';
import ArrangeBoard from './components/ArrangeBoard.js';

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
      console.log(arr);
      console.log(arr[0].length);
  };


  return (
    <div className="App">
      <div className="title-row"><div className="title" onClick={()=>{window.location.reload();return false;}}>BATTLESHIP</div></div>
      {showStart ? <StartGame toggleStartPage={toggleStartPage} toggleArrangeBoard={toggleArrangeBoard} addName={addName}/> : null}
      {showArrangeBoard ? <ArrangeBoard name={name} toggleGamePage={toggleGamePage} storeShipLocations={storeShipLocations}/>:null}
    </div>
  );
}

export default App;

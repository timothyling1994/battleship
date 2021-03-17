import './App.css';
import {useState} from 'react';
import StartGame from './components/StartGame.js';
import ArrangeBoard from './components/ArrangeBoard.js';

function App() {

  const [showStart,setShowStart] = useState(true);
  const [showArrangeBoard,setShowArrangeBoard] = useState(false);
  const [name,setName] = useState();

  const toggleShowStart = (value) => {
    setShowStart(value);
  };

  const toggleArrangeBoard = (value) => {
    setShowArrangeBoard(value);
  }; 

  const addName = (name) =>{
    setName(name);
  };


  return (
    <div className="App">
      <div className="title-row"><div className="title">BATTLESHIP</div></div>
      {showStart ? <StartGame toggleShowStart={toggleShowStart} toggleArrangeBoard={toggleArrangeBoard} setName={setName}/> : null}
      {showArrangeBoard ? <ArrangeBoard name={name}/>:null}
    </div>
  );
}

export default App;

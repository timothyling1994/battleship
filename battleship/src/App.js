import './App.css';
import {useState} from 'react';
import StartGame from './components/StartGame.js';
import ArrangeBoard from './components/ArrangeBoard.js';

function App() {

  const [showStart,setShowStart] = useState(true);
  const [showArrangeBoard,setShowArrangeBoard] = useState(true);

  const toggleShowStart = (value) => {
    setShowStart(value);
  };

  const toggleArrangeBoard = (value) => {
    setShowArrangeBoard(value);
  };  


  return (
    <div className="App">
      <div className="title">BATTLESHIP</div>
      {showStart ? <StartGame toggleShowStart={toggleShowStart} toggleArrangeBoard={toggleArrangeBoard}/> : null}
      {showArrangeBoard ? <ArrangeBoard/>:null}
    </div>
  );
}

export default App;

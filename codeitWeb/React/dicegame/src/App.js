import {useState} from "react";
import Board from "./Board";
import Button from "./Button";
import diceLogo from './assets/logo.png';
import './App.css'
import './Board.css';


function random(n) {
    return Math.ceil(Math.random() * n);
}

function App() {
    const [myHistory, setMyHistory] = useState([]);
    const [otherHistory, setOtherHistory] = useState([]);

    const reset = () => {
        setMyHistory([]);
        setOtherHistory([]);
    };

    const handleRollClick = () => {
        const nextMyNum = random(6);
        setMyHistory([...myHistory, nextMyNum]);

        const nextOtherNum = random(6);
        setOtherHistory([...otherHistory, nextOtherNum]);
    };

    return (
      <div className="App">
          <div>
              <img className="App-logo" src={diceLogo} alt="주사위게임 로고"/>
          </div>
          <h1 className="App-title">DICE GAME</h1>
          <div>
              <Button className="App-button" color="blue" onClick={handleRollClick}>던지기</Button>
              <Button className="App-button" color="red" onClick={reset}>처음부터</Button>
          </div>
          <div className="App-boards">
              <div className="App-board Board">
                  <Board name="나" color="blue" history={myHistory} />
              </div>
              <div className="App-board Board">
                  <Board name="상대" color="red" history={otherHistory} />
              </div>
          </div>
      </div>
    );
}

export default App;
import { useState } from 'react';
import HandButton from "./HandButton";
import HandIcon from './HandIcon';
import ResetButton from './ResetButton';
import { compareHand, generateRandomHand } from "./utils";
import './App.css';

const INITIAL_VALUE = 'rock';

function getResult(me, other) {
    const comparison = compareHand(me, other);
    if (comparison > 0) return '나';
    if (comparison < 0) return '상대';
    return '무승부';
}

function App() {
    const [hand, setHand] = useState(INITIAL_VALUE);
    const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
    const [history, setHistory] = useState([]);
    const [myScore, setMyScore] = useState(0);
    const [otherScore, setOtherScore] = useState(0);
    const [bet, setBet] = useState(1);

    const handleButtonClick = (nextHand) => {
        const nextOtherHand = generateRandomHand();
        const nextHistoryItem = getResult(nextHand, nextOtherHand);
        console.log(nextHistoryItem);
        setHand(nextHand);
        setOtherHand(nextOtherHand);
        setHistory([...history, nextHistoryItem]);

        if (nextHistoryItem === '나') {
            setMyScore(myScore + bet);
        } else if (nextHistoryItem === '상대') {
            setOtherScore(otherScore + bet);
        }
    };

    const handleClearClick = () => {
        setHand(INITIAL_VALUE);
        setOtherHand(INITIAL_VALUE);
        setHistory([]);
        setMyScore(0);
        setOtherScore(0);
        setBet(1);
    }

    const handleBetChange = (e) => {
        let input = Number(e.target.value);
        if (input > 9) input %= 10; // 1과 9 사이의 숫자로 만들어 줌
        if (input < 1) input = 1;
        input = Math.floor(input);
        setBet(input);
    }

    return (
        <div className="App">
            <h1 className="App-heading">가위바위보</h1>
            <ResetButton className="App-reset" onClick={handleClearClick} />
            <div className="App-scores">
                <div className="Score">
                    <div className="Score-num">{myScore}</div>
                    <div className="Score-name">나</div>
                </div>
                <div className="App-versus">:</div>
                <div className="Score">
                    <div className="Score-num">{otherScore}</div>
                    <div className="Score-name">상대</div>
                </div>
            </div>
            <div className="Box App-box">
                <div className="Box-inner">
                    <div className="App-hands">
                        <div className="Hand">
                            <HandIcon className="Hand-icon" value={hand} />
                        </div>
                        <div className="App-versus">VS</div>
                        <div className="Hand">
                            <HandIcon className="Hand-icon" value={otherHand} />
                        </div>
                    </div>
                    <div className="App-bet">
                        <span>배점</span>
                        <input onChange={handleBetChange} type="number" min={1} max={9} step={1} value={bet} />
                        <span>배</span>
                    </div>
                    <div className="App-history">
                        <h2>승부기록</h2>
                        <p>{history.join(', ')}</p>
                    </div>
                </div>
            </div>
            <div>
                <HandButton value="rock" onClick={handleButtonClick} />
                <HandButton value="scissor" onClick={handleButtonClick} />
                <HandButton value="paper" onClick={handleButtonClick} />
            </div>
        </div>
    );
}

export default App;
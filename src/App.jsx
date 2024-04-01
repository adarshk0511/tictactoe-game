import { useState } from 'react';
import './styles.scss'
import Board from './components/Board';
import { calculateWinner } from './winner';
import StatusMessage from './components/StatusMessage';
import History from './components/Histort';

function App() {
  const[history, setHistory]=useState([{squares:Array(9).fill(null),isXNext:false}]);
  const[currentMove, setCurrentMove]=useState(0);
  const gamingBoard = history[currentMove];

  const winner = calculateWinner(gamingBoard.squares);
 

  const handleSquareClick = clickedPoistion =>{

    if(gamingBoard.squares[clickedPoistion] || winner){
        return;
    }

    setHistory((currentHistory)=>{
       const isTraversing = currentMove +1 !== history.length;


      const lastGamingState = isTraversing ? currentHistory[currentMove] : currentHistory[currentHistory.length-1];
      
      const nextSquareState = lastGamingState.squares.map((squareValue, position)=>{
            if(clickedPoistion === position){
                return lastGamingState.isXNextisXNext?'X':'O';
            }
            return squareValue;
        });

        const base = isTraversing ? currentHistory.slice(0,currentHistory.indexOf(lastGamingState) + 1) : currentHistory;
        
        return currentHistory.concat({
          squares:nextSquareState, 
          isXNext:!lastGamingState.isXNext
        });
    });

    setCurrentMove(move => move + 1);
};

const moveTo = (move) =>{
  setCurrentMove(move);
};

  return(
    <div className='app'>
      <StatusMessage winner ={winner} gamingBoard={gamingBoard}  />
      <Board squares={gamingBoard.squares} handleSquareClick={handleSquareClick} />

      <h2>Current game history</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove}/>
    </div> 
    
  );
  
}

export default App;

import { useState } from 'react';
import './styles.scss'
import Board from './components/Board';
import { calculateWinner } from './winner';
import StatusMessage from './components/StatusMessage';

function App() {
  const [squares, setSquares]=useState(Array(9).fill(null));
  const [isXNext, setIsXNext]= useState(false);

  const winner = calculateWinner(squares);
 

  const handleSquareClick = clickedPoistion =>{

    if(squares[clickedPoistion] || winner){
        return;
    }

    setSquares((currentSquares)=>{
        return currentSquares.map((squareValue, position)=>{
            if(clickedPoistion === position){
                return isXNext?'X':'O';
            }
            return squareValue;
        });
    });

    setIsXNext((currentIsXNext)=>!currentIsXNext);
};

  return(
    <div className='app'>
      <StatusMessage winner ={winner} isXNext={isXNext} squares={squares} />
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div> 
    
  );
  
}

export default App;

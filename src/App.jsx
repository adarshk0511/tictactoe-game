import { useState } from 'react';
import './styles.scss'
import Board from './components/Board';

function App() {

 const [counter, setCounter]=useState();

  const onBtnClick = () =>{
    setCounter(currentCounter =>{
      return currentCounter + 1;
    });
  };



  return(
    <div className='app'> 
      <button onClick={onBtnClick}>Click Me!!</button>
      <div>{counter}</div>
    </div> 
    
  );
  
}

export default App;

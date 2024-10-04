import { useState } from 'react';
import './App.css'

function App() {
  // let counter = 5;

  let [counter, setCounter] = useState(0);

  

  const increment = () => {
    ++counter<=20 ? setCounter(counter): counter = 20;
  }

  const decrement = () => {
    --counter>=0 ? setCounter(counter) : counter = 0;
  }

  return (
    <>
     <h1>Counter App</h1>
     <h2>{counter}</h2>
     <button onClick={increment}>Increment</button>
     <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App

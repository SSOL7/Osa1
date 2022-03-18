import { useState } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Total from './Total';

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div className="App">
      <header className="App-header">
        <h1>Seoul</h1>
        <div>
        <button className='button' onClick={() => setGood(good + 1)}>
          good
        </button>
        <br />
        {good}
        <br />
        <br />
        <button className='button' onClick={() => setNeutral(neutral + 1)}>
          neutral
        </button>
        <br />
        {neutral}
        <br />
        <br />
        <button className='button' onClick={() => setBad(bad + 1)}>
          bad
        </button>
        <br />
        {bad}
      </div>
      </header>
    </div>
  )
}

export default App


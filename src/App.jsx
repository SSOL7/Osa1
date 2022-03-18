import { useState } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Total from './Total';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAll] = useState([]);

  const good_click = () => {
    setAll(allClicks.concat('Good'));
    setGood(good + 1)
  }

  const bad_click = () => {
    setAll(allClicks.concat('Bad'));
    setBad(bad + 1)
  }

  const neutral_click = () => {
    setAll(allClicks.concat('Neutral'));
    setNeutral(neutral + 1);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Seoul</h1>
        <div>
        <button className='button' onClick={good_click}>
          Good
        </button>
        <br />
        {good}
        <br />
        <br />
        <button className='button' onClick={bad_click}>
          Bad
        </button>
        <br />
        {bad}
        <br />
        <br />
        <button className='button' onClick={neutral_click}>
          Neutral
        </button>
        <br />
        {neutral}
        <br />
        <p className='total'>{ allClicks.join(', ') }</p>
      </div>
      </header>
    </div>
  )
}

export default App


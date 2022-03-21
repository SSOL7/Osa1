import { useState } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Total from './Total';
import Statistics from './Statistics';

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
        <Header good_click={good_click} />
        <br />
        <Content bad_click={bad_click} />
        <br />
        <Total neutral_click={neutral_click} />
        <br />
        <Statistics allClicks={allClicks} good={good} neutral={neutral} bad={bad} />
      </header>
    </div>
  )
}

export default App


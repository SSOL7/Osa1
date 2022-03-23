
import './App.css';
import { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';
import Statistics from './Statistics';
import Good from './Good';
import Bad from './Bad';
import Neutral from './Neutral';
import Goodbutton from './Goodbutton';
import Badbutton from './Badbutton';
import Neutralbutton from './Neutralbutton';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAll] = useState([]);

  const good_click = () => {
    setAll(allClicks.concat('Good'));
    setGood(good + 1);
  }

  const bad_click = () => {
    setAll(allClicks.concat('Bad'));
    setBad(bad + 1);
  }

  const neutral_click = () => {
    setAll(allClicks.concat('Neutral'));
    setNeutral(neutral + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Seoul</h1>
        <Goodbutton good_click={good_click} />
        <br />
        <Badbutton bad_click={bad_click} />
        <br />
        <Neutralbutton neutral_click={neutral_click} />
        <br />
        {/* <Good good_click={good_click} good={good} />
        <Bad bad_click={bad_click} bad={bad} />
        <Neutral neutral_click={neutral_click} neutral={neutral} /> */}
        <Statistics allClicks={allClicks} good={good} neutral={neutral} bad={bad} />
      </header>
    </div>
  )
}

export default App


import {useState} from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Total from './Total';

function App() {
  const [parts, setParts] = useState([
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]);


  return (
    <div className="App">

      <header className="App-header">
        <h1>Seoul</h1>
        {parts.map(part => {
          return (
            <Content
            key={part.name}
            name={part.name}
            exercises={part.exercises}
            />
          )
        })}
      </header>
    </div>
  )
}

export default App


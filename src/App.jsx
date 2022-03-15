import './App.css';
import Header from './Header';
import Content from './Content';
import Total from './Total';

function App() {
  const parts = [
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
  ]
  const numbers = [1, 2, 3, 4, 5];


  return (
    <div className="App">
      <header className="App-header">
        <h1>Seoul</h1>
        <Content parts={parts}/>
      </header>
    </div>
  )
}

export default App


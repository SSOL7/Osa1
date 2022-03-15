import './App.css';
import Header from './Header';
import Content from './Content';
import Total from './Total';

function App() {
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Seoul</h1>
        <Header part1={part1} />
        <Content part2={part2} />
        <Total part3={part3} />
      </header>
    </div>
  )
}

export default App


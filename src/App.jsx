import './App.css';
import Header from './Header';
import Content from './Content';
import Total from './Total';

function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div className="App">
      <header className="App-header">
        <h1>Seoul</h1>
        <Header course={course} />
        <Content part1={part1} exercises1={exercises1} />
        <Total part3={part3} exercises3={exercises3} />
      </header>
    </div>
  )
}

export default App

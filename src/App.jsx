import './App.css';
import Header from './Header';
import Content from './Content';
import Total from './Total';

function App() {

  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Seoul</h1>
        {course.parts.map(part => {
          return (
            <div>
              <Header part1={part} />
              <br />
              <Content part2={part} />
              <br />
              <Total part3={part} />
            </div>
          )
        })}
      </header>
    </div>
  )
}

export default App


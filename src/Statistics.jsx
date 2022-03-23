import React from 'react'

function Statistics({ allClicks, good, neutral, bad }) {

    if (!allClicks) {
        return (
          <>
            <span>
            How was your experience?
            </span>
          </>
        )
      }
  return (
    <div>
        <table>
            <thead>
                <tr>
                <th>Statistics</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Good: {good}</td>
                </tr>
                <tr>
                <td>Bad: {bad}</td>
                </tr>
                <tr>
                <td>Neutral: {neutral}</td>
                </tr>
                <tr>
                <td>Total votes: {good + neutral + bad}</td>
                </tr>
                <tr>
                <td>Average: {(good * bad) / neutral}</td>
                </tr>
                <tr>
                <td>Positive: {good / (good + neutral + bad) * 100}</td>
                </tr>
            </tbody>
        </table>    
    </div>
  )
}

export default Statistics
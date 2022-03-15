import React from 'react'

function Content(props) {
  const { part2 } = props

  return (
    <>
        <h1>Content</h1>
        <h1>{part2.name}</h1>
        <h2>{part2.exercises}</h2>
    </>
  )
}

export default Content
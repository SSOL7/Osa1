import React from 'react'

function Content(props) {
  const { parts } = props
  return (
    <>
    <h1>Content</h1>
    {parts.map(part => <p key={part.name}>{part.name} {part.exercises}</p>)}
    </>
  )
}

export default Content
import React from 'react'

function Content(props) {
  return (
    <>
        <h1>Content</h1>
        <h1>{props.part1}</h1>
        <h1>{props.exercises1}</h1>
    </>
  )
}

export default Content
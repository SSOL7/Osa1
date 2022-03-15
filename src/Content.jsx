import React from 'react'

function Content({name, exercises}) {
  return (
    <>
    <h2>Course name: {name} </h2>
    <h2>Number of exercises:{exercises} </h2>
    </>
  )
}

export default Content
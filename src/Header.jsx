import React from 'react'

function Header(props) {
  const { part1 } = props
  return (
    <>
        <h1>Header</h1>
        <h1>{part1.name}</h1>
        <h2>{part1.exercises}</h2>
    </>
  )
}

export default Header
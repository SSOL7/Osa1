import React from 'react'

function Header(props) {
  const { part1 } = props
  console.log(part1)
  return (
    <>
        <h1>Header</h1>
        <h1>{part1.name}</h1>
    </>
  )
}

export default Header
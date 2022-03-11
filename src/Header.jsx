import React from 'react'

function Header(props) {
  return (
    <>
        <h1>Header</h1>
        <h1>{props.course}</h1>
    </>
  )
}

export default Header
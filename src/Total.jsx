import React from 'react'

function Total(props) {
  const { part3 } = props
  console.log(part3)
  return (
    <>
    <h1>Total</h1>
    <h2>{part3.exercises}</h2>
    </>
  )
}

export default Total
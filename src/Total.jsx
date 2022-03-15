import React from 'react'

function Total(props) {
  const { part3 } = props
  return (
    <>
    <h1>Total</h1>
    <h1>{part3.name}</h1>
    <h2>{part3.exercises}</h2>
    </>
  )
}

export default Total
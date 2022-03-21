import React from 'react'

function Total({ neutral_click }) {
  return (
    <>
    <button className='button' onClick={() => neutral_click()} >Neutral</button>
    </>
  )
}

export default Total
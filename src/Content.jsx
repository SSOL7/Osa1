import React from 'react'

function Content({ bad_click }) {
  return (
    <>
      <button className='button' onClick={() => bad_click()} >Bad</button>
    </>
  )
}

export default Content
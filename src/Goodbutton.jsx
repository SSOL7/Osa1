import React from 'react'

function Goodbutton({ good_click }) {
  return (
    <>
    <button className='button' onClick={() => good_click()} >Good</button>
    </>
  )
}

export default Goodbutton
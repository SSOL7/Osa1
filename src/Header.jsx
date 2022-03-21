import React from 'react'

function Header({ good_click }) {
  return (
    <>
        <button className='button' onClick={() => good_click()} >Good</button>
    </>
  )
}

export default Header
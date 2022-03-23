import React from 'react'

function Badbutton({ bad_click }) {
  return (
    <div>
        <button className='button' onClick={() => bad_click()} >Bad</button>
    </div>
  )
}

export default Badbutton
import React from 'react'

function Neutralbutton({ neutral_click }) {
  return (
    <div>
        <button className='button' onClick={() => neutral_click()} >Neutral</button>
    </div>
  )
}

export default Neutralbutton
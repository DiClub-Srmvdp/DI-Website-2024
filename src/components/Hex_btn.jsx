import React from 'react'
import hex from '/assets/img/events/Hexcore/Hex_flag.gif'

const Hex_btn = () => {
  return (
    <div className='Hex_btn px-1 font-Arcane d-flex justify-content-center align-items-center'>
       <img src={ hex } alt="HEX" style={{width:'27%'}}/>
       <h3 className='mb-1 fs-5 px-1'>REGISTER </h3>
    </div>
  )
}

export default Hex_btn
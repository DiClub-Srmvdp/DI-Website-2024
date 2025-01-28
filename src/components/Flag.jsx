import React from 'react'
import flag from '/assets/img/events/Hexcore/Hex_flag.gif'
import logo from '/assets/img/events/Hexcore/Hex_logo.png'
import { Link } from 'react-router-dom'

const Flag = () => {
  return (
    <div className="flg">
        <Link to='/Hexcore'>
            <img src={ flag } alt="Hexcore" className='w-flag position-fixed bottom-0 end-0 mb-4 mx-4' />
            <img src={ logo } alt="Logo" className='w-flag position-fixed bottom-0 end-0 mx-4 mb-4 p-4'/>
        </Link>      
    </div>
  )
}

export default Flag
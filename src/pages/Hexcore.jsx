import React from 'react'
import Slider from '../components/Slider'

const bg_style = (href) => ({
    backgroundImage: `url('/assets/img/events/Hexcore/${href}')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
});



const Hexcore = () => {
  return (
    
    <div className="HS_page">
        <div className=" HS-main container-fluid p-5" style={ bg_style('Hex.png') }>
            <div className=" HS-wrap d-flex flex-column align-items-center justify-content-center w-100 h-100" style={{backdropFilter: 'blur(5px)'}} >

                <h1 className='fw-semibold' style={{ fontSize: '6em'}}>HEXCORE</h1>
                <p className='fw-small fs-6'>
                    m is not simply random text. It has roots in a piece of classical  of Good and Evil) by Cicero, written in 45 BC. 
                </p>
                <button className='rounded-4 fs-5 text-white bg-black border border-1 border-white ' style={{ height:'3rem', width:'9rem' , backgroundImage:'linear-gradient(110deg, #9d7b30 0%, #020201 50%, transparent 50%, transparent 100%)'}} > 
                    REGISTER 
                </button>

            </div>

        </div>
        
        <div className=" HS-events w-100 d-flex justify-content-center align-items-center" style= { bg_style('Hex-2.jpg') }>
            
            <div className="position-relative">
                <h1 className="text-center p-4">EVENTS LIST</h1>
                <Slider/> 
            </div>

        </div>

    </div>
  
  )
}

export default Hexcore
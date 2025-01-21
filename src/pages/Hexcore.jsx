import React from 'react'
import  { evnts }  from '../../evnts.json'


const bg_style = (href) => ({
    backgroundImage: `url('/assets/img/events/Hexcore/${href}')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment:"fixed",
    height: "100vh",
});



const Card = (props) =>{
    return (
        <div className="card cursor-pointer d-flex justify-content-center align-items-center" style={{width:'16rem',height:'21rem',backgroundImage:`url( ${props.src} )`}}>
            <h1 className='fs-6 text-white'>
                {props.name}
            </h1>
        </div>
    );
}

const Hexcore = () => {

  return (
    
    <div className="HS_page">
        <div className=" HS-main container-fluid p-5" style={ bg_style('Hex.png') }>
            <div className=" HS-wrap d-flex flex-column align-items-center justify-content-center w-100 h-100" style={{ backdropFilter: 'blur(2px)' }} >

                <h1 className='fw-semibold font-Arcane' style={{ fontSize: '7em',letterSpacing:'4px'}}>HEXCORE</h1>
                <p className='fw-small fs-6 '>
                    m is not simply random text. It has roots in a piece of classical  of Good and Evil by Cicero, written in 45 BC. 
                </p>
                <button className='rounded-4 fs-5 text-white bg-black border border-1 border-gray-300 ' style={{ height:'3.5rem', width:'9.5rem' , backgroundImage:'linear-gradient(110deg, #9d7b30 0%, #020201 50%, transparent 50%, transparent 100%)'}} > 
                    REGISTER 
                </button>

            </div>

        </div>
        
        <div className="HS-events w-100 d-flex flex-column justify-content-start align-items-center " >
            
            <div className="position-relative">
                <h1 className="text-center p-4 font-Arcane" style={ {fontSize: '3rem'} } >EVENTS LIST</h1>            
            </div>

            <div className="wrapper w-100 h-100 p-5 d-flex justify-content-around align-items-center flex-wrap gap-5 ">
                    { evnts.map((evnt)=>( <Card key={evnt.id} name={evnt.name} src={evnt.src}/> ))}
            </div>

        </div>

    </div>
  
  )
}

export default Hexcore;
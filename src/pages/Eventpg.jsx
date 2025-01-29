import React, { useEffect } from "react";
import { evnts } from "../../Hex.json";
import { useParams } from "react-router-dom";
import Hex_btn from '../components/Hex_btn'
import flag from '/assets/img/events/Hexcore/Hex_flag.gif'

const Eventpg = () => {
  const { id } = useParams();
  const evnt = evnts[id];

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <>
      <div
        className="evnt_sec1 p-5 d-flex flex-wrap justify-content-around align-items-center "
        style={{ width: "100vw",background: `url(${evnt.src}) center/cover no-repeat fixed ,linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.375875350140056) 52%, rgba(0,0,0,1) 100%)`}}
      >
        <div
          className="ev-lft col-12 col-md-6 mb-5 p-4 mt-3 font-Arcane"
          style={{ letterSpacing: "1px" }}
        >
          <h1 className='txt_grad 'style={{ fontSize: "4rem",color:'#c7bd5f'}}>{evnt.name}</h1>
          <h2>{evnt.title}</h2>
          <p className="w-70" style={{fontWeight:'100'}}>{evnt.desc}</p>
          <a href="https://forms.gle/mDC4NzXgkFirUMCT7" style={{textDecoration:'none'}}>
            <Hex_btn/>
          </a>
        </div>
        <div className="ev-rght mt-4 col-12 col-md-6 d-flex justify-content-center align-items-end">
          <img
            src={evnt.src}
            alt="Poster"
            className="border rounded border-3 w-pst"
          />
        </div>
      </div>

      <div className="info d-flex flex-wrap justify-content-around font-Arcane p-5">
        <div className="info-lft col-12 col-md-6">
          <h1 style={{ fontSize: "4rem",color:'#c7bd5f' }}>Rules and Regulations</h1>
          <h2 className="mt-2 fs-4 mb-5">
            Please read the following rules and regulations carefully before
            participating in our events:
          </h2>
          <ul className='rls' style={{listStyle:'none'}}>
            {evnt.rules.map((i, key) => (
              <li key={key} className="mb-2 fs-5">
                 <img src={ flag } /><span>{i}</span> 
              </li>
            ))}
          </ul>
        </div>
        <div className="info-rght">
          <div className="info-crd1 py-4 px-5  border rounded border-3 mt-3">
            <h3 className="text-center txt_grad ">Coordinators</h3>

            {evnt.coordinators.map((i, key) => (
              <>
                <h2 className="fs-5">
                  Name: <span className="px-4" >{i[0]}</span>
                </h2>
                <h2 className="fs-5 mb-3 ">
                  Contact: <span className="px-2">{i[1]}</span>
                </h2>
              </>
            ))}
          </div>
          <div className="info-crd1  py-4 px-5 border rounded border-3 mt-3">
            <h3 className="text-center txt_grad">Details</h3>
            <h2 className="fs-5 ">
              Venue: <span className="px-3">{evnt.details[0]}</span>
            </h2>
            <h2 className="fs-5 ">
              Date: <span className="px-3">{evnt.details[1]}</span>
            </h2>
            <h2 className="fs-5">
              Time: <span className="px-3">{evnt.details[2]}</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eventpg;

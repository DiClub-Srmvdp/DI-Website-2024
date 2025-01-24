import React from "react";
import { evnts, guests } from "../../Hex.json";

const Card = (props) => {
  return (
    <div
      className="card cursor-pointer d-flex justify-content-center align-items-center"
      style={{
        width: "16rem",
        height: "21rem",
        backgroundImage: `url( ${props.src} )`,
      }}
    >
      <h1 className="fs-6 text-white">{props.name}</h1>
    </div>
  );
};

const Gcard = ({ src, head, desc }) => {
  return (
    <div className="p-2 mt-3 d-flex flex-column justify-content-center align-items-center text-center element">
      <img
        className="bd-placeholder-img rounded-circle "
        width="230"
        height="230"
        src={src}
        style={{
          objectFit: "cover",
          border: "3px solid rgba(255, 229, 80, 0.19)",
        }}
      />
      <h2
        className="fw-bold pt-3 fs-4 text-center"
        style={{ fontSize: "3rem" }}
      >
        {head}
      </h2>
      <p
        className="fw-normal p-1 text-center"
        style={{ fontSize: "12px", width: "65%" }}
      >
        {desc}
      </p>
    </div>
  );
};

const Hexcore = () => {
  return (
    <div className="HS_page">
      <div className=" HS-main container-fluid p-5">
        <div
          className=" p-3 HS-wrap d-flex flex-column align-items-center justify-content-center w-100 h-100"
          style={{ backdropFilter: "blur(2px)" }}
        >
          <h1
            className="fw-semibold font-Arcane"
            style={{ fontSize: "7em", letterSpacing: "4px" }}
          >
            HEXCORE
          </h1>
          <p className="fw-small fs-6">
            m is not simply random text. It has roots in a piece of classical of
            Good and Evil by Cicero, written in 45 BC.
          </p>
          <button
            className="rounded-4 fs-5 text-white bg-black border border-1 border-gray-300 "
            style={{
              height: "3.5rem",
              width: "9.5rem",
              backgroundImage:
                "linear-gradient(110deg, #9d7b30 0%, #020201 50%, transparent 50%, transparent 100%)",
            }}
          >
            REGISTER
          </button>
        </div>
      </div>

      <div className="HS-events w-100 d-flex flex-column justify-content-start align-items-center ">
        <div className="position-relative">
          <h1
            className="text-center p-4 font-Arcane"
            style={{ fontSize: "3rem" }}
          >
            EVENTS LIST
          </h1>
        </div>

        <div className="wrapper w-100 h-100 p-5 d-flex justify-content-around align-items-center flex-wrap gap-5 ">
          {evnts.map((evnt) => (
            <Card key={evnt.id} name={evnt.name} src={evnt.src} />
          ))}
        </div>
      </div>

      <div
        className="gst w-100 bg-dark guests d-flex justify-content-around align-items-center flex-wrap gap-0"
        style={{ padding: "2%" }}
      >
        <h1
          className="text-center p-4 font-Arcane"
          style={{ fontSize: "3rem" }}
        >
          Chief Guests
        </h1>
        {guests.map((gst) => (
          <Gcard src={gst.src} head={gst.head} desc={gst.desc} />
        ))}
      </div>
    </div>
  );
};

export default Hexcore;

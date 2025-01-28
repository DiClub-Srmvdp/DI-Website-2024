import React from "react";
import { evnts, guests } from "../../Hex.json";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to={`/Hexcore/${props.id}`} style={{ textDecoration: "none" }}>
      <div
        className="card shadow-lg cursor-pointer d-flex justify-content-center align-items-center"
        style={{
          width: "17rem",
          height: "24rem",
          backgroundImage: `url( ${props.src} )`,
          backgroundSize: "cover",
        }}
      ></div>
    </Link>
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
        className="fw-bold pt-3 fs-4 font-Arcane text-center"
        style={{
          fontSize: "3rem",
          letterSpacing: "2px",
          textTransform: "lowercase",
        }}
      >
        {head}
      </h2>
      <p
        className="fw-normal font-arcane p-1 text-center"
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
          <h1 className="HS_tit fw-semibold font-Arcane p-1 mx-3">HEXCORE</h1>
          <p className="HS_p fw-small text-center">
            8 Events 32 Survivors 4 Factions 1 Victor Choose Your Destiny.
          </p>
          <a href="https://forms.gle/mDC4NzXgkFirUMCT7">
            <button
              className="rounded-4 fs-5 text-white bg-black border border-2 border-gray-300 "
              style={{
                height: "3.5rem",
                width: "9.5rem",
                backgroundImage:
                  "linear-gradient(110deg, #9d7b30 0%, #020201 50%, transparent 50%, transparent 100%)",
              }}
            >
              REGISTER
            </button>
          </a>
        </div>
      </div>

      <div className="HS-events p-5 w-100 d-flex flex-column justify-content-start align-items-center ">
        <div className="position-relative">
          <h1
            className="text-center p-4 font-Arcane"
            style={{ fontSize: "3rem" }}
          >
            EVENTS LIST
          </h1>
        </div>

        <div className="wrapper w-100 h-100  ">
          <h1 className="p-3 font-Arcane" style={{ fontSize: "3rem" }}>
            TECH
          </h1>
          <div className="sec d-flex justify-content-around align-items-center flex-wrap gap-5">
            {evnts.map(
              (evnt) =>
                evnt.id < 4 && (
                  <Card
                    key={evnt.id}
                    id={evnt.id}
                    name={evnt.name}
                    src={evnt.src}
                  />
                )
            )}
          </div>

          <h1 className=" mt-5 p-3 font-Arcane" style={{ fontSize: "3rem" }}>
            NON TECH
          </h1>
          <div className="sec d-flex justify-content-around align-items-center flex-wrap gap-5">
            {evnts.map(
              (evnt) =>
                evnt.id > 3 && (
                  <Card
                    key={evnt.id}
                    id={evnt.id}
                    name={evnt.name}
                    src={evnt.src}
                  />
                )
            )}
          </div>
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

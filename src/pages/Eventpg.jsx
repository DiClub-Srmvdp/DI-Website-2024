import React from "react";
import pstr from "/assets/img/events/Hexcore/arc_pstr.jpg";
import { evnts } from "../../Hex.json";
import { useParams } from "react-router-dom";

const Eventpg = () => {
  const { id } = useParams();
  const evnt = evnts[id];

  return (
    <>
      <div
        className="evnt-sec1 p-5 mt-5 d-flex flex-wrap justify-content-around align-items-center "
        style={{ width: "100vw" }}
      >
        <div
          className="ev-lft col-12 col-md-6 mb-5 p-5 font-Arcane"
          style={{ letterSpacing: "1px" }}
        >
          <h1 style={{ fontSize: "5rem" }}>{evnt.name}</h1>
          <h2>{evnt.title}</h2>
          <p className="w-70 fw-light">{evnt.desc}</p>
          <a href="https://forms.gle/mDC4NzXgkFirUMCT7">
            <button
              className="rounded-4 fs-6 text-white bg-black border border-2 border-gray-300 "
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
        <div className="ev-rght col-12 col-md-6 d-flex justify-content-center align-items-end">
          <img
            src={evnt.src}
            alt="Poster"
            className="border rounded border-3"
            style={{ width: "69%" }}
          />
        </div>
      </div>

      <div className="info d-flex flex-wrap justify-content-around font-Arcane p-5">
        <div className="info-lft col-12 col-md-6">
          <h1 style={{ fontSize: "4rem" }}>Rules and Regulations</h1>
          <h2 className="mt-2 fs-4 mb-5">
            Please read the following rules and regulations carefully before
            participating in our events:
          </h2>
          <ul>
            {evnt.rules.map((i, key) => (
              <li key={key} className="mb-2 fs-3">
                {i}
              </li>
            ))}
          </ul>
        </div>
        <div className="info-rght">
          <div className="info-crd1 py-4 px-5  border rounded border-3 mt-3">
            <h3 className="text-center">Coordinators</h3>

            {evnt.coordinators.map((i, key) => (
              <>
                <h2 className="fs-5 d-flex justify-content-around">
                  Name: <span>{i[0]}</span>
                </h2>
                <h2 className="fs-5 mb-3 d-flex justify-content-around">
                  Contact: <span>{i[1]}</span>
                </h2>
              </>
            ))}
          </div>
          <div className="info-crd1  py-4 px-5 border rounded border-3 mt-3">
            <h3 className="text-center">Details</h3>
            <h2 className="fs-5 d-flex justify-content-around">
              Venue: <span>{evnt.details[0]}</span>
            </h2>
            <h2 className="fs-5 d-flex justify-content-around">
              Date: <span>{evnt.details[1]}</span>
            </h2>
            <h2 className="fs-5 d-flex justify-content-around">
              Time: <span>{evnt.details[2]}</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eventpg;

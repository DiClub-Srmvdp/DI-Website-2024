import React from "react";

import gs1 from "/assets/img/events/spark/gst1.png";
import gs2 from "/assets/img/events/spark/gst2.png";
import gs3 from "/assets/img/events/spark/gst3.png";
import inv from "/assets/img/events/spark/inv.png";
import prototype from "/assets/img/events/spark/prototype.png";
import team from "/assets/img/events/spark/team.png";
import lead from "/assets/img/events/spark/lead.png";

export default function SparkPage() {
  return (
    <div>
      <div className="spark-hero">
        <div className="spark-left">
          <h1 className="spark-glow">SPARK'24</h1>
          <h2>A national level symposium on design thinking</h2>
          <h2>19th and 20th September</h2>
          <SparkButton />
        </div>
        <section className="spark-learn">
          <div className="spark-head">
            <h1>What Will You Learn?</h1>
          </div>
          <div className="spark-content">
            <div className="spark-design-thinking">
              <div>
                <span>DESIGN</span>
              </div>
              <div>
                <span>THINKING</span>
              </div>
            </div>
            <div className="spark-attr">
              <div className="spark-sec-lef-sec">
                <Section heading="Innovation" src={inv} para="Techniques to think outside the box and explore multiple perspectives." />

                <Section heading="Leadership" src={lead} para="Understanding how to lead and manage design thinking sessions effectively." />
              </div>
              <div className="spark-side-right-sec">
                <Section heading="Team Collaboration" src={team} para="Working with people from diverse backgrounds to drive innovation." />

                <Section
                  heading="Prototyping"
                  src={prototype}
                  para="Techniques to build, test, and refine multiple versions of a prototype to find the most viable solution."
                />
              </div>
            </div>
          </div>
        </section>

        <h1 className="spark-chief">Chief Guests</h1>
        <section className="spark-guests">
          <Guest name="DR. RAMAKRISHNAN RAMANI" title="ASSISTANT. VICE PRESIDENT, INTELLECT DESIGN ARENA LTD" image={gs2} />
          <Guest name="THIRU. K.S. KANDASAMY IAS" title="MANAGING DIRECTOR, TAHDCO" image={gs1} />
          <Guest name="DR. K.KOMATHY" title="CHAIRMEN CSI, CHENNAI CHAPTER" image={gs3} />
        </section>
      </div>
    </div>
  );
}

function Section(props) {
  return (
    <div className="spark-sec">
      <div className="spark-sec-img">
        <img src={props.src} height="100" width="100" />
      </div>
      <div className="spark-heading">
        <span>{props.heading}</span>
      </div>
      <div className="spark-para">
        <p>{props.para}</p>
      </div>
    </div>
  );
}

function Guest(props) {
  return (
    <>
      <div className="spark-guest">
        <div className="spark-pix" style={{ backgroundImage: `url(${props.image})` }}></div>
        <div className="spark-txt">
          <h1>{props.name}</h1>
          <p>{props.title}</p>
        </div>
      </div>
    </>
  );
}

function SparkButton() {
  return (
    <>
      <div className="spark-button">
        <div className="spark-voltage-button">
          <button
            onClick={() =>
              window.open("https://docs.google.com/forms/d/e/1FAIpQLSda8qzgNZh6v76Ty9fWdAxYxEvfCOZIC_4MEk_copKRs_wRFw/viewform", "_blank")
            }
          >
            REGISTER NOW
          </button>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 234.6 61.3"
            preserveAspectRatio="none"
            xml:space="preserve"
          >
            <filter id="glow">
              <feGaussianBlur className="spark-button-blur" result="coloredBlur" stdDeviation="2"></feGaussianBlur>
              <feTurbulence type="fractalNoise" baseFrequency="0.075" numOctaves="0.3" result="turbulence"></feTurbulence>
              <feDisplacementMap
                in="SourceGraphic"
                in2="turbulence"
                scale="30"
                xChannelSelector="R"
                yChannelSelector="G"
                result="displace"
              ></feDisplacementMap>
              <feMerge>
                <feMergeNode in="coloredBlur"></feMergeNode>
                <feMergeNode in="coloredBlur"></feMergeNode>
                <feMergeNode in="coloredBlur"></feMergeNode>
                <feMergeNode in="displace"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
            <path
              className="spark-voltage line-1"
              d="m216.3 51.2c-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 6.8-7.3 6.8-3.7 0-3.7-4.6-7.3-4.6-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-0.9-7.3-0.9-3.7 0-3.7-2.7-7.3-2.7-3.7 0-3.7 7.8-7.3 7.8-3.7 0-3.7-4.9-7.3-4.9-3.7 0-3.7-7.8-7.3-7.8-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 3.1-7.3 3.1-3.7 0-3.7 10.9-7.3 10.9-3.7 0-3.7-12.5-7.3-12.5-3.7 0-3.7 4.6-7.3 4.6-3.7 0-3.7 4.5-7.3 4.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-10-7.3-10-3.7 0-3.7-0.4-7.3-0.4-3.7 0-3.7 2.3-7.3 2.3-3.7 0-3.7 7.1-7.3 7.1-3.7 0-3.7-11.2-7.3-11.2-3.7 0-3.7 3.5-7.3 3.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-2.9-7.3-2.9-3.7 0-3.7 8.4-7.3 8.4-3.7 0-3.7-14.6-7.3-14.6-3.7 0-3.7 5.8-7.3 5.8-2.2 0-3.8-0.4-5.5-1.5-1.8-1.1-1.8-2.9-2.9-4.8-1-1.8 1.9-2.7 1.9-4.8 0-3.4-2.1-3.4-2.1-6.8s-9.9-3.4-9.9-6.8 8-3.4 8-6.8c0-2.2 2.1-2.4 3.1-4.2 1.1-1.8 0.2-3.9 2-5 1.8-1 3.1-7.9 5.3-7.9 3.7 0 3.7 0.9 7.3 0.9 3.7 0 3.7 6.7 7.3 6.7 3.7 0 3.7-1.8 7.3-1.8 3.7 0 3.7-0.6 7.3-0.6 3.7 0 3.7-7.8 7.3-7.8h7.3c3.7 0 3.7 4.7 7.3 4.7 3.7 0 3.7-1.1 7.3-1.1 3.7 0 3.7 11.6 7.3 11.6 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-12.9 7.3-12.9 3.7 0 3.7 10.9 7.3 10.9 3.7 0 3.7 1.3 7.3 1.3 3.7 0 3.7-8.7 7.3-8.7 3.7 0 3.7 11.5 7.3 11.5 3.7 0 3.7-1.4 7.3-1.4 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-5.8 7.3-5.8 3.7 0 3.7-1.3 7.3-1.3 3.7 0 3.7 6.6 7.3 6.6s3.7-9.3 7.3-9.3c3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7 8.5 7.3 8.5 3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7-1.5 7.3-1.5 3.7 0 3.7 1.6 7.3 1.6s3.7-5.1 7.3-5.1c2.2 0 0.6 9.6 2.4 10.7s4.1-2 5.1-0.1c1 1.8 10.3 2.2 10.3 4.3 0 3.4-10.7 3.4-10.7 6.8s1.2 3.4 1.2 6.8 1.9 3.4 1.9 6.8c0 2.2 7.2 7.7 6.2 9.5-1.1 1.8-12.3-6.5-14.1-5.5-1.7 0.9-0.1 6.2-2.2 6.2z"
              fill="transparent"
              stroke="#fff"
            ></path>
            <path
              className="spark-voltage line-2"
              d="m216.3 52.1c-3 0-3-0.5-6-0.5s-3 3-6 3-3-2-6-2-3 1.6-6 1.6-3-0.4-6-0.4-3-1.2-6-1.2-3 3.4-6 3.4-3-2.2-6-2.2-3-3.4-6-3.4-3-0.5-6-0.5-3 1.4-6 1.4-3 4.8-6 4.8-3-5.5-6-5.5-3 2-6 2-3 2-6 2-3 1.6-6 1.6-3-4.4-6-4.4-3-0.2-6-0.2-3 1-6 1-3 3.1-6 3.1-3-4.9-6-4.9-3 1.5-6 1.5-3 1.6-6 1.6-3-1.3-6-1.3-3 3.7-6 3.7-3-6.4-6-6.4-3 2.5-6 2.5h-6c-3 0-3-0.6-6-0.6s-3-1.4-6-1.4-3 0.9-6 0.9-3 4.3-6 4.3-3-3.5-6-3.5c-2.2 0-3.4-1.3-5.2-2.3-1.8-1.1-3.6-1.5-4.6-3.3s-4.4-3.5-4.4-5.7c0-3.4 0.4-3.4 0.4-6.8s2.9-3.4 2.9-6.8-0.8-3.4-0.8-6.8c0-2.2 0.3-4.2 1.3-5.9 1.1-1.8 0.8-6.2 2.6-7.3 1.8-1 5.5-2 7.7-2 3 0 3 2 6 2s3-0.5 6-0.5 3 5.1 6 5.1 3-1.1 6-1.1 3-5.6 6-5.6 3 4.8 6 4.8 3 0.6 6 0.6 3-3.8 6-3.8 3 5.1 6 5.1 3-0.6 6-0.6 3-1.2 6-1.2 3-2.6 6-2.6 3-0.6 6-0.6 3 2.9 6 2.9 3-4.1 6-4.1 3 0.1 6 0.1 3 3.7 6 3.7 3 0.1 6 0.1 3-0.6 6-0.6 3 0.7 6 0.7 3-2.2 6-2.2 3 4.4 6 4.4 3-1.7 6-1.7 3-4 6-4 3 4.7 6 4.7 3-0.5 6-0.5 3-0.8 6-0.8 3-3.8 6-3.8 3 6.3 6 6.3 3-4.8 6-4.8 3 1.9 6 1.9 3-1.9 6-1.9 3 1.3 6 1.3c2.2 0 5-0.5 6.7 0.5 1.8 1.1 2.4 4 3.5 5.8 1 1.8 0.3 3.7 0.3 5.9 0 3.4 3.4 3.4 3.4 6.8s-3.3 3.4-3.3 6.8 4 3.4 4 6.8c0 2.2-6 2.7-7 4.4-1.1 1.8 1.1 6.7-0.7 7.7-1.6 0.8-4.7-1.1-6.8-1.1z"
              fill="transparent"
              stroke="#fff"
            ></path>
          </svg>
          <div className="spark-dots">
            <div className="spark-dot spark-dot-1"></div>
            <div className="spark-dot spark-dot-2"></div>
            <div className="spark-dot spark-dot-3"></div>
            <div className="spark-dot spark-dot-4"></div>
            <div className="spark-dot spark-dot-5"></div>
          </div>
        </div>
      </div>
    </>
  );
}

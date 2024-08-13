import React from "react";

import inauguralImage from "/assets/img/journey/club-inaguration.jpg";
import juvenileImage from "/assets/img/journey/juvenile-designers.jpg";
import duiImage from "/assets/img/journey/dui.jpg";
import flutterImage from "/assets/img/journey/flutter.jpg";
import d2Image from "/assets/img/journey/d2.jpg";
import aiwImage from "/assets/img/journey/aiw.jpg";
import digitalesImage from "/assets/img/journey/digitales.jpg";
import fullStackImage from "/assets/img/journey/FullStackPoster Web Dev.png";
import hackfestImage from "/assets/img/journey/HackFest-Poster.jpg";
import hackfest2Image from "/assets/img/journey/Hackfest 2.0.jpg";

const journeyData = [
  {
    title: "Club Inauguration",
    date: "March, 2019",
    guest: "Mr. A. D. Padmasingh Isaac, MD, Aachi group of companies",
    events: "Inception, Retrograde & Postagram - 72 participants from all 4 years",
    image: inauguralImage,
    link: "inaugural.html",
  },
  {
    title: "Juvenile Designers",
    date: "July, 2020",
    guest: "Mr. A. D. Padmasingh Isaac, MD, Aachi group of companies",
    events: "Creative Writing, Poster Designing & Animation Designing - 71 participants from all 4 years",
    image: juvenileImage,
    link: "juvenile.html",
  },
  {
    title: "Design Ur Interface (DUI)",
    date: "July, 2021",
    guest: "Mr. A. D. Padmasingh Isaac, MD, Aachi group of companies",
    image: duiImage,
  },
  {
    title: "Flutter",
    date: "July, 2021",
    description: `"Flutter," hosted by the Design and Innovation Club on August 21, 2021, via Zoom from 11:00 am to 5:30 pm, featured a front-row founding engineer and SRM VDP alumni, inspiring and enriching participants in mobile app development.`,
    image: flutterImage,
  },
  {
    title: "D&sup2;",
    date: "October, 2021",
    guest: "Mr. A. D. Padmasingh Isaac, MD, Aachi group of companies",
    image: d2Image,
    link: "dsquare.html",
  },
  {
    title: "Artificial Intelligence Workshop",
    date: "January, 2022",
    description: `SRM Vadapalani Campus Design and Innovation Club hosted an AI Workshop on Zoom, with 160+ participants. Guest Speaker MR. Jothi Periasamy discussed machine learning and industrial application development, covering current and future trends.`,
    image: aiwImage,
  },
  {
    title: "Digitales",
    date: "March, 2022",
    description: `"Digitales," the DI Club's digital marketing webinar on March 19, 2022, with Ms. Muthu Barathi, covered branding, advertising, social media, and content marketing via Zoom, providing valuable insights to participants.`,
    image: digitalesImage,
  },
  {
    title: "FullStack WebDevelopment Workshop",
    date: "August, 2022",
    description: `The Design and Innovation Club organised a thorough 30-hour FullStack Development Workshop. It covered HTML scripting, CSS styles, JavaScript programming, an introduction to backend database management, and a session on GitHub, all led by DI's Website Team.`,
    image: fullStackImage,
  },
  {
    title: "Hackfest 2K23",
    date: "January, 2023",
    description: `Hackfest, held in the academic year 2023-2024, was a dynamic two-day hackathon contest for college students. It featured two rounds - an online abstract submission and an in-campus hackathon. Hackfest drew a total of 131 participants, with exciting rounds of competition.`,
    image: hackfestImage,
    link: "hackfest.html",
  },
  {
    title: "Hackfest 2.0",
    date: "August, 2023",
    description: `The second edition of DI Club's signature technical hackathon, Hackfest 2.0, had the theme "WebVille: A futuristic smart community hub." This 24-hour hackathon took place on the 13th and 14th of September and featured 34 competing teams. Three winners were chosen from these teams, making it an enriching platform for all the contestants.`,
    image: hackfest2Image,
    link: "hackfest2.html",
  },
];

export default function JourneyPage() {
  return (
    <main>
      <section className="journey-wrapper">
        <div className="journey-title my-4 pt-5">
          <h1>
            <span>J</span>ourney
          </h1>
          <p>The powers that be</p>
        </div>
        <div className="journey-body mt-5">
          <div className="container">
            {journeyData.map((data, index) => (
              <JourneyCard {...data} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function JourneyCard({ image, title, date, chiefGuest, description, events, link, index }) {
  const position = index % 2 === 0 ? "left" : "right";
  const isLeft = position === "left";

  return (
    <div className={`row justify-content-${isLeft ? "start" : "end"}`} key={index}>
      <div className={`journey-card-${position} col-12 col-md-6`}>
        <div className="journey-ball d-none d-md-block" data-aos="fade-up" data-aos-duration="1000"></div>
        <div className="journey-ball mobile d-block d-md-none" data-aos="fade-up" data-aos-duration="1000"></div>
        <div data-aos="fade-up" data-aos-duration="1000">
          <div className="journey-imagebox">
            <div className="journey-image pb-3">
              <img className="img-fluid px-5" src={image} alt={title} />
            </div>
          </div>
          <div className="journey-name mt-4 mt-md-0 mx-5">
            {link ? (
              <a href={link}>
                <h2>{title}</h2>
              </a>
            ) : (
              <h2>{title}</h2>
            )}
            <h5>{date}</h5>
          </div>
          <div className="journey-position mx-5 p-0 mt-3">
            <p>{chiefGuest}</p>
          </div>
          {events && (
            <div className="journey-events mt-4 mt-md-0 mx-5">
              <h5 className="mb-2">Events</h5>
              <p>{events}</p>
            </div>
          )}
          {description && (
            <div className="journey-description mx-5 p-0 mt-3">
              <p>{description}</p>
            </div>
          )}
        </div>
        {index !== journeyData.length - 1 && (
          <>
            <div
              className={`journey-line ${
                index === 0 ? "journey-line-start" : isLeft ? "journey-line-middle left" : "journey-line-middle right"
              } d-none d-md-block`}
            ></div>
            <div
              className={`journey-line ${
                index === 0 ? "journey-line-start" : isLeft ? "journey-line-middle left" : "journey-line-middle right"
              } mobile d-block d-md-none`}
            ></div>
          </>
        )}
      </div>
    </div>
  );
}

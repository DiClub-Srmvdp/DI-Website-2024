import React from 'react'

export default function EventsPage() {
  return (
    <main className="page-wrapper">
      <section className="di-banner"></section>

      <section>
        <div className="events-heading text-center container my-4 pt-5">
          <h1>
            <span>W</span>orkshop <span>E</span>vents
          </h1>
        </div>
        <div className="container-fluid">
          <div className="row event-wrapper">
            <div className="col-12 col-lg-6 p-0">
              <div className="event-box1">
                <div className="p-4">
                  <h2 className="text-center">Build-A-Bot</h2>
                </div>
                <div id="carouselEvent1" className="carousel slide p-3" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div
                      className="carousel-item di-carousel-item active"
                      style={{ backgroundImage: "url('/assets/img/events/buildabot/0.png')" }}
                    ></div>
                    <div className="carousel-item di-carousel-item" style={{ backgroundImage: "url('/assets/img/events/buildabot/2.png')" }}></div>
                    <div className="carousel-item di-carousel-item" style={{ backgroundImage: "url('/assets/img/events/buildabot/3.png')" }}></div>
                    <div className="carousel-item di-carousel-item" style={{ backgroundImage: "url('/assets/img/events/buildabot/4.png')" }}></div>
                    <div className="carousel-item di-carousel-item" style={{ backgroundImage: "url('/assets/img/events/buildabot/5.png')" }}></div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselEvent1" data-bs-slide="prev">
                    <i className="fa-regular fa-hand-point-left di-carousel-icon"></i>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselEvent1" data-bs-slide="next">
                    <i className="fa-regular fa-hand-point-right di-carousel-icon"></i>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <div className="event-content-text p-3">
                  <p>
                    The "Build-A-Bot" workshop on August 30, 2023, during the Design and Innovation Club Workshop 2023: 02, was highly impactful for
                    1st and 2nd-year participants. This one-day event focused on creating software chatbots using UiPath, a popular RPA tool. Over 60
                    active learners from various departments attended, fostering collaboration and diversity. Mrs. M. Indumathy, the Design and
                    Innovation Club's faculty coordinator, guided the workshop smoothly, with support from Dr. S. Sridevi. The day started with
                    introductions, followed by an immersive project overview by Mr. Bhuvanesawaran B, an Assistant Professor and UiPath Community
                    Trainer at Rajalakshmi College of Engineering.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 p-0">
              <div className="event-box2">
                <div className="p-4">
                  <h2 className="text-center">Web-Development</h2>
                </div>
                <div id="carouselEvent2" className="carousel slide p-3" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item di-carousel-item active" style={{ backgroundImage: "url('/assets/img/events/webdev/5.png')" }}></div>
                    <div className="carousel-item di-carousel-item" style={{ backgroundImage: "url('/assets/img/events/webdev/1.png')" }}></div>
                    <div className="carousel-item di-carousel-item" style={{ backgroundImage: "url('/assets/img/events/webdev/2.png')" }}></div>
                    <div className="carousel-item di-carousel-item" style={{ backgroundImage: "url('/assets/img/events/webdev/4.png')" }}></div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselEvent2" data-bs-slide="prev">
                    <i className="fa-regular fa-hand-point-left di-carousel-icon"></i>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselEvent2" data-bs-slide="next">
                    <i className="fa-regular fa-hand-point-right di-carousel-icon"></i>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <div className="event-content-text p-3">
                  <p>
                    The Web Development Workshop was linked to Hackfest 2.0, focusing on web development. Held on August 21st and 22nd, it engaged 1st
                    and 2nd-year participants, powered by UpGrad, with Mr. Dinesh as the guide and Mr. Shubam coordinating.With 65 learners, it
                    started with intros and a project overview. They learned HTML and CSS, receiving participation certificates from UpGrad. The
                    workshop combined learning and innovation, fostering growth and exploration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="events-heading text-center container my-4 pt-5">
          <h1>
            <span>P</span>remium <span>E</span>vents
          </h1>
        </div>
        <div className="container-fluid">
          <div className="row event-wrapper">
            <div className="col-12 col-lg-6 p-0">
              <div className="event-box3">
                <div className="p-4">
                  <h2 className="text-center">Hackfest</h2>
                </div>
                <div id="carouselEvent3" className="carousel slide p-3" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div
                      className="carousel-item di-carousel-item active"
                      style={{ backgroundImage: "url('/assets/img/events/hackfest/Hackfest1.JPG')" }}
                    ></div>
                    <div
                      className="carousel-item di-carousel-item"
                      style={{ backgroundImage: "url('/assets/img/events/hackfest/Hackfest2.JPG')" }}
                    ></div>
                    <div
                      className="carousel-item di-carousel-item"
                      style={{ backgroundImage: "url('/assets/img/events/hackfest/Hackfest3.JPG')" }}
                    ></div>
                    <div
                      className="carousel-item di-carousel-item"
                      style={{ backgroundImage: "url('/assets/img/events/hackfest/Hackfest4.JPG')" }}
                    ></div>
                    <div
                      className="carousel-item di-carousel-item"
                      style={{ backgroundImage: "url('/assets/img/events/hackfest/Hackfest5.JPG')" }}
                    ></div>
                    <div
                      className="carousel-item di-carousel-item"
                      style={{ backgroundImage: "url('/assets/img/events/hackfest/Hackfest6.JPG')" }}
                    ></div>
                    <div
                      className="carousel-item di-carousel-item"
                      style={{ backgroundImage: "url('/assets/img/events/hackfest/Hackfest7.JPG')" }}
                    ></div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselEvent3" data-bs-slide="prev">
                    <i className="fa-regular fa-hand-point-left di-carousel-icon"></i>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselEvent3" data-bs-slide="next">
                    <i className="fa-regular fa-hand-point-right di-carousel-icon"></i>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <div className="event-content-text p-3">
                  <p>
                    The second edition of DI Club's signature technical hackathon, Hackfest 2.0, had the theme "WebVille: A futuristic smart community
                    hub." This 24-hour hackathon took place on the 13th and 14th of September and featured 34 competing teams. Three winners were
                    chosen from these teams, making it an enriching platform for all the contestants.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 p-0">
              <div className="event-box4">
                <div className="p-4">
                  <h2 className="text-center">Codathon</h2>
                </div>
                <div id="carouselEvent4" className="carousel slide p-3" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div
                      className="carousel-item di-carousel-item active"
                      style={{ backgroundImage: "url('/assets/img/events/codeathon.jpg')" }}
                    ></div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselEvent4" data-bs-slide="prev">
                    <i className="fa-regular fa-hand-point-left di-carousel-icon"></i>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselEvent4" data-bs-slide="next">
                    <i className="fa-regular fa-hand-point-right di-carousel-icon"></i>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <div className="event-content-text p-3">
                  <p>
                    The Codathon at National Hackfest 2023 challenged grades 10-12 students, supported by DCSE, SRMIST VDP campus, and SRM Innovation,
                    Incubation, and Entrepreneurship Cell. DAV Boys Hr Sec School took the top spot, with joint runners-up Chennai Public School and
                    DAV Boys Hr Sec School. Coordination by Mr. Rajavel from DCSE, VDP campus, encouraged coding skill development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


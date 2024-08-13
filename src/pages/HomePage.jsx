import React from "react";

export default function HomePage() {
  return (
    <main className="page-wrapper">
      <section className="di-home-banner">
        <div className="di-home-banner-content d-flex align-items-center">
          <div className="container pt-2 pt-lg-5">
            <div className="di-home-banner-moto pt-2 pt-lg-5">
              <span>I</span>nspire. <span>D</span>esign. <span>I</span>nnovate.
            </div>
            <div className="di-home-banner-name p-2 p-lg-5">Design & Innovation Club</div>
          </div>
        </div>
        <div className="">
          <div className="di-home-banner-explore">
            <a className="di-link" href="#about-section">
              Who we are?<i className="fa-solid fa-chevron-down pt-2 d-block"></i>
            </a>
          </div>
        </div>
      </section>

      <section id="about-section" className="about-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-8 p-0">
              <div className="about-content p-3 p-lg-5">
                <h1 className="mt-5 pt-5 mt-lg-0 pt-lg-0">
                  <span>A</span>bout <span>U</span>s
                </h1>
                <h3 className="mt-3">Welcome to the DI-verse!</h3>
                <p>
                  The realm where the synergy of creativity and relentless hard work converges to infuse every endeavor with an innovative flair and
                  intuitive design sensibility.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-4 p-0">
              <img className="img-fluid about-img" src="./src/assets/img/about-event.jpg" />
            </div>
          </div>
        </div>
      </section>

      <section className="register-section">
        <div className="container p-3 p-lg-5 text-center">
          <p className="register-text">Ready to embark on an innovative journey? Click here to be part of our design voyage.</p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfl5g_Xpx5kfA4ImczDwFZGPdQkBRzpS1JNucdQUi47u71HxA/viewform"
            className="btn btn-light register-btn my-3"
            target="_blank"
          >
            Join Us
          </a>
        </div>
      </section>
    </main>
  );
}

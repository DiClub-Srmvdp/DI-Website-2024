import React from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  const floatingIconStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "75px",
    height: "75px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(56,189,248,0.6) 20%, rgba(0,0,0,0.8) 100%)",
    boxShadow: "0px 0px 25px rgba(56,189,248,0.9), 0px 0px 50px rgba(56,189,248,0.6)",
    zIndex: 9999,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover", // ensures no extra space around logo
    borderRadius: "50%",
  };

  const hoverEffect = (e, isHover) => {
    e.currentTarget.style.transform = isHover ? "scale(1.2)" : "scale(1)";
    e.currentTarget.style.boxShadow = isHover
      ? "0px 0px 40px rgba(56,189,248,1), 0px 0px 80px rgba(56,189,248,0.9)"
      : "0px 0px 25px rgba(56,189,248,0.9), 0px 0px 50px rgba(56,189,248,0.6)";
  };

  return (
    <main className="page-wrapper">
      {/* Your existing sections remain unchanged */}
      <section className="di-home-banner">
        <div className="di-home-banner-content d-flex align-items-center position-relative">
          <div className="container pt-2 pt-lg-5">
            <div className="di-home-banner-moto pt-2 pt-lg-5">
              <span>I</span>nspire. <span>D</span>esign. <span>I</span>nnovate.
            </div>
            <div className="di-home-banner-name p-2 p-lg-5">
              Design & Innovation Club
            </div>
          </div>
        </div>
        <div>
          <div className="di-home-banner-explore">
            <a className="di-link" href="#about-section">
              Who we are?
              <i className="fa-solid fa-chevron-down pt-2 d-block"></i>
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
                  The realm where the synergy of creativity and relentless hard
                  work converges to infuse every endeavor with an innovative
                  flair and intuitive design sensibility.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-4 p-0">
              <img
                className="img-fluid about-img"
                src="/assets/img/about-event.jpg"
                alt="About Event"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="register-section">
        <div className="container p-3 p-lg-5 text-center">
          <p className="register-text">
            Ready to embark on an innovative journey? Click here to be part of
            our design voyage.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc8E36crEGYuFlm-jM5gmZx8c5Rs-JNhe_o_gJBHoDCRyQksw/viewform?usp=header"
            className="btn btn-light register-btn my-3"
            target="_blank"
            rel="noreferrer"
          >
            Join Us
          </a>
        </div>
      </section>
      {/* Floating Logo with Flamy Blue Particles */}
      {/* Floating Logo with Magical Flame Effect */}
<a
  href="https://triwizard-di.vercel.app/"
  target="_blank"
  rel="noreferrer"
  style={{
    position: "fixed",
    bottom: "30px",
    right: "30px",
    width: "110px",
    height: "110px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(56,189,248,1) 40%, rgba(0,0,0,0.8) 100%)",
    boxShadow:
      "0px 0px 50px rgba(56,189,248,1), 0px 0px 100px rgba(56,189,248,0.9), 0px 0px 160px rgba(56,189,248,0.6)",
    zIndex: 999999,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible",
  }}
>
  {/* Pulsing Aura Ring */}
  <motion.div
    style={{
      position: "absolute",
      width: "220%",
      height: "220%",
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(56,189,248,0.5), transparent 70%)",
      zIndex: -3,
    }}
    animate={{ scale: [1, 1.4, 1], opacity: [0.7, 0, 0.7] }}
    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
  />

  {/* 🔥 Flame Waves behind the icon */}
  {[...Array(3)].map((_, i) => (
    <motion.div
      key={i}
      style={{
        position: "absolute",
        bottom: "-20px",
        width: "140%",
        height: "140%",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(56,189,248,0.4), transparent)",
        filter: "blur(30px)",
        zIndex: -2,
      }}
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.6, 0.2, 0.6],
        y: [0, -40, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 3 + i,
        ease: "easeInOut",
        delay: i * 0.5,
      }}
    />
  ))}

  {/* ✨ Flame Particles */}
  {[...Array(30)].map((_, i) => (
    <motion.div
      key={i}
      style={{
        position: "absolute",
        bottom: "0%",
        left: `${Math.random() * 100}%`,
        width: "6px",
        height: "6px",
        borderRadius: "50%",
        background:
          Math.random() > 0.5 ? "rgba(56,189,248,1)" : "rgba(125,211,252,0.9)",
        filter: "blur(6px)",
        zIndex: -1,
      }}
      animate={{
        y: ["0%", "-250%"],
        opacity: [1, 0],
        scale: [0.6, 1.8],
        x: [0, (Math.random() - 0.5) * 80],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.5 + Math.random() * 2,
        ease: "easeOut",
        delay: Math.random() * 2,
      }}
    />
  ))}

  {/* 🪄 Floating Glowing Logo */}
  <motion.img
    src="/assets/img/cup.png"
    alt="Triwizard Logo"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "50%",
      boxShadow:
        "0px 0px 40px rgba(56,189,248,1), inset 0px 0px 20px rgba(255,255,255,0.8)",
    }}
    animate={{
      scale: [1, 1.15, 1],
      rotate: [0, 2, -2, 0],
      y: [0, -5, 0], // floating up & down
    }}
    transition={{
      repeat: Infinity,
      duration: 4,
      ease: "easeInOut",
    }}
  />
</a>



    </main>
  );
}

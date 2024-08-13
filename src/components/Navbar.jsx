import React from "react";

export default function Navbar() {
  return (
    <header>
      <DesktopNavbar />
      <MobileNavbar />
    </header>
  );
}

function NavItem({ href, label }) {
  return (
    <li className="nav-item">
      <a className="nav-link di-nav-link" href={href}>
        {label}
      </a>
    </li>
  );
}

function NavBrand({ logoSrc, width }) {
  return (
    <a className="di-navhead-brand" href="/">
      <img src={logoSrc} width={width} />
    </a>
  );
}

function DesktopNavbar() {
  return (
    <nav id="di-navhead" className="navbar navbar-expand-lg fixed-top di-navhead d-none d-lg-flex">
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto">
            <NavItem href="/events" label="Events" />
            <NavItem href="/team" label="Team" />
          </ul>
        </div>
        <NavBrand logoSrc="/assets/img/di-logo.png" width="96px" />
        <div className="collapse navbar-collapse mx-auto">
          <ul className="navbar-nav mx-auto">
            <NavItem href="/projects" label="Projects" />
            <NavItem href="/journey" label="Journey" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

function MobileNavbar() {
  return (
    <nav id="di-navhead-mobile" className="navbar di-navhead di-navhead-mobile fixed-top d-flex d-lg-none">
      <div className="container-fluid">
        <button
          className="navbar-toggler di-navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMobile"
          aria-controls="navbarMobile"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-grip"></i>
        </button>
        <NavBrand logoSrc="./src/assets/img/di-logo.png" width="96px" />
      </div>
      <div className="collapse di-navhead-mobile-collapse" id="navbarMobile">
        <div className="di-navhead-mobile-content">
          <ul className="navbar-nav">
            <NavItem href="/events" label="Events" />
            <NavItem href="/team" label="Team" />
            <NavItem href="/projects" label="Projects" />
            <NavItem href="/journey" label="Journey" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

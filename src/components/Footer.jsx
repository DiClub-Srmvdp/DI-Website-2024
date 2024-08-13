import React from "react";

export default function Footer() {
  return (
    <footer className="main-footer mt-auto py-3">
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-12 col-lg-3 px-0 px-lg-5">
            <ul className="nav list-unstyled d-flex footer-social-media justify-content-end me-3">
              <li className="ms-3">
                <a href="https://www.facebook.com/search/top?q=di%20club" target="_blank">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li className="ms-3">
                <a href="https://www.linkedin.com/company/diclub/" target="_blank">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li className="ms-3">
                <a href="https://www.instagram.com/diclub.srmvdp/" target="_blank">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-4"></div>
          <div className="col-12 col-lg-5">
            <div className="px-0 px-lg-5 footer-copyright my-3 my-lg-2">
              Copyright <b>2023</b> Design & Innovation Club
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

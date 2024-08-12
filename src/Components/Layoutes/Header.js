import React from "react";
import "../Styles/Header_Style.css";
import {Link} from "react-router-dom";

function Header() {
  return <>
    <div classNameName="container-fluid">
      <div classNameName="row">
        <div classNameName="col">
          <nav className="navbar navbar-expand-lg bg-body-tertiary px-4">
            <div className="container-fluid">
              <Link className="navbar-brand fs-1" to="#"><b className="burger_style ms-1">Burger</b><b className="king-style"> King</b></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse nave-hover" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link mx-2 fs-5 fw-medium" to="#">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link mx-2 fs-5 fw-medium" to="#">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link mx-2 fs-5 fw-medium" to="#">Feature</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link mx-2 fs-5 fw-medium" to="#">Chef</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link mx-2 fs-5 fw-medium" to="#">Menu</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link mx-2 fs-5 fw-medium" to="#">Booking</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link mx-2 fs-5 fw-medium" to="#">Contact</Link>
                  </li>              
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>

  </>;
}

export default Header;

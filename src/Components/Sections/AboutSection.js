import React from "react";
import aboutimg from "../Assets/about.jpg";
import "../Styles/About.css"

function AboutSection() {
  return (
    <>
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-6 col-sm-12 col-12 text-center text-lg-start">
            <img className="img-fluid rounded-4" src={aboutimg} alt="about" />
          </div>
          <div className="col-lg-6 col-sm-12 col-12 pt-xl-5 px-4">
            <p className="fs-5 T_Head pt-xl-5 mb-0 mt-4">About Us</p>
            <h1 className="display-6 fw-bold pb-4">Cooking Since 1990</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec pretium mi. Curabitur facilisis ornare velit non vulputate.
              Aliquam metus tortor, auctor id gravida condimentum, viverra quis
              sem.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec pretium mi. Curabitur facilisis ornare velit non vulputate.
              Aliquam metus tortor, auctor id gravida condimentum, viverra quis
              sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean
              consectetur convallis porttitor. Aliquam interdum at lacus non
              blandit.
            </p>
            <button className="btn btn-info btn-about py-2 px-4 mt-3">Book Table</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection;

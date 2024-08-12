import React from "react";
import "../Styles/Hero_style.css";
import ButtonMenu from "./ButtonMenu";
import Buttontable from "./Buttontable";

function Hero() {
  return (
    <>
      <div id="carouselAutoplaying" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container-fluid bg_hero1">
              <div className="container py-5">
                <div className="row py-5 my-5">
                  <h1 className="fw-bold display-4 text-center mb-5 text-white">
                    Best<span className="quality"> Quality</span> Ingredients
                  </h1>

                  <h6 className="text-center lh-lg mb-5 text-white">
                    Amet cillum duis ipsum ea labore duis.Consectetur amet anim
                    consequat nulla excepteur. <br />
                    Fugiat Lorem consequat pariatur proident dolore sit magna
                    eiusmod incididunt
                  </h6>
                  <div className="text-center mb-5">
                    <ButtonMenu />
                    <Buttontable />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container-fluid bg_hero2">
              <div className="container py-5">
                <div className="row py-5 my-5">
                  <h1 className="fw-bold display-4 text-center mb-5 text-white">
                    World's<span className="quality">Best</span> Chef
                  </h1>

                  <h6 className="text-center lh-lg mb-5 text-white">
                    Amet cillum duis ipsum ea labore duis.Consectetur amet anim
                    consequat nulla excepteur. <br />
                    Fugiat Lorem consequat pariatur proident dolore sit magna
                    eiusmod incididunt
                  </h6>
                  <div className="text-center mb-5">
                    <ButtonMenu />
                    <Buttontable />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container-fluid bg_hero3">
              <div className="container py-5">
                <div className="row py-5 my-5">
                  <h1 className="fw-bold display-4 text-center mb-5 text-white">
                    Fastest<span className="quality"> Order</span> Delivery
                  </h1>

                  <h6 className="text-center lh-lg mb-5 text-white">
                    Amet cillum duis ipsum ea labore duis.Consectetur amet anim
                    consequat nulla excepteur. <br />
                    Fugiat Lorem consequat pariatur proident dolore sit magna
                    eiusmod incididunt
                  </h6>
                  <div className="text-center mb-5">
                    <ButtonMenu />
                    <Buttontable />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Hero;

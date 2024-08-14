import React from "react";
import "../Styles/Feature.css";
import img1 from "../Assets/feature-1.jpg";
import img2 from "../Assets/feature-2.jpg";
import img3 from "../Assets/feature-3.jpg";
import img4 from "../Assets/feature-4.jpg";
import img5 from "../Assets/f1.png";
import img6 from "../Assets/f2.png";
import img7 from "../Assets/f3.png";
import img8 from "../Assets/f4.png";
import img9 from "../Assets/f5.png";
import img10 from "../Assets/f6.png";

function Keyfeature() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-12 col-12">
          <span>Why Choose Us</span>
          <h1 className="fw-medium display-6 pb-4 pt-2">Our Key Features</h1>
          <div className="row">
            <div className="col-6 pe-0">
              <img className="img-fluid" src={img1} alt="Feature" />
            </div>
            <div className="col-6 ps-0">
              <img className="img-fluid" src={img2} alt="Feature" />
            </div>
            <div className="col-6 pe-0">
              <img className="img-fluid" src={img3} alt="Feature" />
            </div>
            <div className="col-6 ps-0">
              <img className="img-fluid" src={img4} alt="Feature" />
            </div>
          </div>
          <p className="py-4">
            Lorem ipsum dolor sit amet consec adipis elit. Phasel nec preti mi.
            Curabit facilis ornare velit non vulputa. Aliquam metus tortor,
            auctor id gravida condime, viverra quis sem. Curabit non nisl nec
            nisi sceleri maximus
          </p>
          <div>
            <button
              type="submit"
              className="btn w-100 btn-success fw-medium py-2 fs-5 btn-sub1"
            >
              Book A Table
            </button>
          </div>
        </div>
        <div className="col-lg-8 col-md-12 col-12 pt-4">
            <div className="row ps-3">
                <div className="col-6 feature">
                    <img className="img-fluid" src={img5} alt="f1"/>
                    <h4>World’s best Chef</h4>
                    <p>Lorem ipsum dolor sit amet elit. Phasel nec preti mi. Curabit facilis ornare velit non vulput metus tortor</p>
                </div>
                <div className="col-6 feature">
                    <img className="img-fluid" src={img6} alt="f1"/>
                    <h4>Natural ingredients</h4>
                    <p>Lorem ipsum dolor sit amet elit. Phasel nec preti mi. Curabit facilis ornare velit non vulput metus tortor</p>
                </div>
                <div className="col-6 feature">
                    <img className="img-fluid" src={img7} alt="f1"/>
                    <h4>Best quality products</h4>
                    <p>Lorem ipsum dolor sit amet elit. Phasel nec preti mi. Curabit facilis ornare velit non vulput metus tortor</p>
                </div>
                <div className="col-6 feature">
                    <img className="img-fluid" src={img8} alt="f1"/>
                    <h4>Fresh vegetables & Meet</h4>
                    <p>Lorem ipsum dolor sit amet elit. Phasel nec preti mi. Curabit facilis ornare velit non vulput metus tortor</p>
                </div>
                <div className="col-6 feature">
                    <img className="img-fluid" src={img9} alt="f1"/>
                    <h4>Fastest door delivery</h4>
                    <p>Lorem ipsum dolor sit amet elit. Phasel nec preti mi. Curabit facilis ornare velit non vulput metus tortor</p>
                </div>
                <div className="col-6 feature">
                    <img className="img-fluid" src={img10} alt="f1"/>
                    <h4>Ground beef & Low fat</h4>
                    <p>Lorem ipsum dolor sit amet elit. Phasel nec preti mi. Curabit facilis ornare velit non vulput metus tortor</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Keyfeature;

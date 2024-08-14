import React from "react";
import "../Styles/Menu.css";
import img1 from "../Assets/m1.png";
import img2 from "../Assets/m2.png";
import img3 from "../Assets/m3.png";
import burger_img from "../Assets/menu-burger-img.jpg";
import burger from "../Assets/menu-burger.jpg";
import beverage_img from "../Assets/menu-beverage-img.jpg";
import beverage from "../Assets/menu-beverage.jpg";
import snack_img from "../Assets/menu-snack-img.jpg";
import snack from "../Assets/menu-snack.jpg";

function Menu() {
  return (
    <>
      <div className="container-fluid bg-body-secondary">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 py-4">
              <div className="text-center bg-white py-4 px-4 shadow-lg rounded-4">
                <img className="img-fluid menu_img" src={img1} alt="img" />
                <h2 className="pt-2">Burgers</h2>
                <p className="px-sm-4">
                  Lorem ipsum dolor sit amet elit. Phasel nec pretium mi.
                  Curabit facilis ornare velit non vulputa. Aliquam metus tortor
                  auctor quis sem.
                </p>
                <button className="btn btn-link fw-medium fs-5 btn_link">
                  View Menu
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 py-4">
              <div className="text-center bg-white py-4 px-4 shadow-lg rounded-4">
                <img className="img-fluid menu_img" src={img2} alt="img" />
                <h2 className="pt-2">Snacks</h2>
                <p className="px-sm-4">
                  Lorem ipsum dolor sit amet elit. Phasel nec pretium mi.
                  Curabit facilis ornare velit non vulputa. Aliquam metus tortor
                  auctor quis sem.
                </p>
                <button className="btn btn-link fw-medium fs-5 btn_link">
                  {" "}
                  View Menu
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 py-4">
              <div className="text-center bg-white py-4 px-4 shadow-lg rounded-4">
                <img className="img-fluid menu_img" src={img3} alt="img" />
                <h2 className="pt-2">Beverages</h2>
                <p className="px-sm-4">
                  Lorem ipsum dolor sit amet elit. Phasel nec pretium mi.
                  Curabit facilis ornare velit non vulputa. Aliquam metus tortor
                  auctor quis sem.
                </p>
                <button className="btn btn-link fw-medium fs-5 btn_link">
                  {" "}
                  View Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">
          <p className="text-center mb-0 pt-5 pb-2 fs-5">Food Menu</p>
          <h1 className=" text-center fw-bold pb-5">Delicious Food Menu</h1>

          <ul
            className="nav nav-pills mb-3 justify-content-center"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Burgers
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Snacks
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Beverages
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabindex="0"
            >
              <div className="row">
                <div className="col-lg-8 col-sm-12 col-12 pt-4 pe-sm-5 pe-lg-2">
                  <div className="row py-2">
                    <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-end">
                      <img
                        className="w rounded-circle img_size"
                        src={burger}
                        alt="burger"
                      />
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 col-8 ps-0">
                      <div className="row">
                        <div className="col mb-0">
                          <p class="word fs-5 fw-bold mb-0 pt-2">
                            Mini cheese Burger
                          </p>
                        </div>
                        <div className="col-3">
                          <p class="word fw-bold fs-5 color_y ms-sm-0 float-end mb-0 pt-2">
                            $9.00
                          </p>
                        </div>
                      </div>
                      <p className=" ms-sm-0">
                        Lorem ipsum dolor sit amet elit. Phasel nec preti facil
                      </p>
                    </div>
                  </div>
                  <div className="row py-2">
                    <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-end">
                      <img
                        className="w rounded-circle img_size"
                        src={burger}
                        alt="burger"
                      />
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 col-8 ps-0">
                      <div className="row">
                        <div className="col mb-0">
                          <p class="word fs-5 fw-bold mb-0 pt-2">
                            Double size burger
                          </p>
                        </div>
                        <div className="col-3">
                          <p class="word fw-bold fs-5 color_y ms-sm-0 float-end mb-0 pt-2">
                            $11.00
                          </p>
                        </div>
                      </div>
                      <p className=" ms-sm-0">
                        Lorem ipsum dolor sit amet elit. Phasel nec preti facil
                      </p>
                    </div>
                  </div>
                  <div className="row py-2">
                    <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-end">
                      <img
                        className="w rounded-circle img_size"
                        src={burger}
                        alt="burger"
                      />
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 col-8 ps-0">
                      <div className="row">
                        <div className="col mb-0">
                          <p class="word fs-5 fw-bold mb-0 pt-2">
                            Bacon, EGG and Cheese
                          </p>
                        </div>
                        <div className="col-3">
                          <p class="word fw-bold fs-5 color_y ms-sm-0 float-end mb-0 pt-2">
                            $22.00
                          </p>
                        </div>
                      </div>
                      <p className=" ms-sm-0">
                        Lorem ipsum dolor sit amet elit. Phasel nec preti facil
                      </p>
                    </div>
                  </div>
                  <div className="row py-2">
                    <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-end">
                      <img
                        className="w rounded-circle img_size"
                        src={burger}
                        alt="burger"
                      />
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 col-8 ps-0">
                      <div className="row">
                        <div className="col mb-0">
                          <p class="word fs-5 fw-bold mb-0 pt-2">
                            Pulled porx Burger
                          </p>
                        </div>
                        <div className="col-3">
                          <p class="word fw-bold fs-5 color_y ms-sm-0 float-end mb-0 pt-2">
                            $18.00
                          </p>
                        </div>
                      </div>
                      <p className=" ms-sm-0">
                        Lorem ipsum dolor sit amet elit. Phasel nec preti facil
                      </p>
                    </div>
                  </div>
                  <div className="row py-2">
                    <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-end">
                      <img
                        className="w rounded-circle img_size"
                        src={burger}
                        alt="burger"
                      />
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 col-8 ps-0">
                      <div className="row">
                        <div className="col mb-0">
                          <p class="word fs-5 fw-bold mb-0 pt-2">
                            Fried chicken Burger
                          </p>
                        </div>
                        <div className="col-3">
                          <p class="word fw-bold fs-5 color_y ms-sm-0 float-end mb-0 pt-2">
                            $16.00
                          </p>
                        </div>
                      </div>
                      <p className=" ms-sm-0">
                        Lorem ipsum dolor sit amet elit. Phasel nec preti facil
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12 text-center">
                  <img
                    className="img-fluid h-100 rounded-4 "
                    src={burger_img}
                    alt="burger"
                  />
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabindex="0"
            >
              <div className="row">
                <div className="col-lg-8 col-sm-12 col-12 pt-4 pe-sm-5 pe-lg-2">
                  <div className="row py-2">
                    <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-end">
                      <img
                        className="w rounded-circle img_size"
                        src={snack}
                        alt="burger"
                      />
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 col-8 ps-0">
                      <div className="row">
                        <div className="col mb-0">
                          <p class="word fs-5 fw-bold mb-0 pt-2">
                            Corn Tikki - Spicy fried Aloo
                          </p>
                        </div>
                        <div className="col-3">
                          <p class="word fw-bold fs-5 color_y ms-sm-0 float-end mb-0 pt-2">
                            $15.00
                          </p>
                        </div>
                      </div>
                      <p className=" ms-sm-0">
                        Lorem ipsum dolor sit amet elit. Phasel nec preti facil
                      </p>
                    </div>
                  </div>
                  <div className="row py-2">
                    <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-end">
                      <img
                        className="w rounded-circle img_size"
                        src={snack}
                        alt="burger"
                      />
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 col-8 ps-0">
                      <div className="row">
                        <div className="col mb-0">
                          <p class="word fs-5 fw-bold mb-0 pt-2">
                            Bread besan Toast
                          </p>
                        </div>
                        <div className="col-3">
                          <p class="word fw-bold fs-5 color_y ms-sm-0 float-end mb-0 pt-2">
                            $25.00
                          </p>
                        </div>
                      </div>
                      <p className=" ms-sm-0">
                        Lorem ipsum dolor sit amet elit. Phasel nec preti facil
                      </p>
                    </div>
                  </div>
                  <div className="row py-2">
                    <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-end">
                      <img
                        className="w rounded-circle img_size"
                        src={snack}
                        alt="burger"
                      />
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 col-8 ps-0">
                      <div className="row">
                        <div className="col mb-0">
                          <p class="word fs-5 fw-bold mb-0 pt-2">
                            Healthy soya nugget snacks
                          </p>
                        </div>
                        <div className="col-3">
                          <p class="word fw-bold fs-5 color_y ms-sm-0 float-end mb-0 pt-2">
                            $30.00
                          </p>
                        </div>
                      </div>
                      <p className=" ms-sm-0">
                        Lorem ipsum dolor sit amet elit. Phasel nec preti facil
                      </p>
                    </div>
                  </div>
                  <div className="row py-2">
                    <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-end">
                      <img
                        className="w rounded-circle img_size"
                        src={snack}
                        alt="burger"
                      />
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 col-8 ps-0">
                      <div className="row">
                        <div className="col mb-0">
                          <p class="word fs-5 fw-bold mb-0 pt-2">
                            Tandoori Soya Chunks
                          </p>
                        </div>
                        <div className="col-3">
                          <p class="word fw-bold fs-5 color_y ms-sm-0 float-end mb-0 pt-2">
                            $13.00
                          </p>
                        </div>
                      </div>
                      <p className=" ms-sm-0">
                        Lorem ipsum dolor sit amet elit. Phasel nec preti facil
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12 text-center">
                  <img
                    className="img-fluid h-100 rounded-4 "
                    src={snack_img}
                    alt="burger"
                  />
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
              tabindex="0"
            >
              <div className="row">
                <div className="col-lg-8 col-sm-12 col-12 pt-4 pe-sm-5 pe-lg-2">
                  <div className="row py-2">
                    <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-end">
                      <img
                        className="w rounded-circle img_size"
                        src={beverage}
                        alt="burger"
                      />
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 col-8 ps-0">
                      <div className="row">
                        <div className="col mb-0">
                          <p class="word fs-5 fw-bold mb-0 pt-2">
                            Standard black coffee
                          </p>
                        </div>
                        <div className="col-3">
                          <p class="word fw-bold fs-5 color_y ms-sm-0 float-end mb-0 pt-2">
                            $9.00
                          </p>
                        </div>
                      </div>
                      <p className=" ms-sm-0">
                        Lorem ipsum dolor sit amet elit. Phasel nec preti facil
                      </p>
                    </div>
                  </div>
                  <div className="row py-2">
                    <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-end">
                      <img
                        className="w rounded-circle img_size"
                        src={beverage}
                        alt="burger"
                      />
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 col-8 ps-0">
                      <div className="row">
                        <div className="col mb-0">
                          <p class="word fs-5 fw-bold mb-0 pt-2">
                            Standard black coffee
                          </p>
                        </div>
                        <div className="col-3">
                          <p class="word fw-bold fs-5 color_y ms-sm-0 float-end mb-0 pt-2">
                            $11.00
                          </p>
                        </div>
                      </div>
                      <p className=" ms-sm-0">
                        Lorem ipsum dolor sit amet elit. Phasel nec preti facil
                      </p>
                    </div>
                  </div>
                  <div className="row py-2">
                    <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-end">
                      <img
                        className="w rounded-circle img_size"
                        src={beverage}
                        alt="burger"
                      />
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 col-8 ps-0">
                      <div className="row">
                        <div className="col mb-0">
                          <p class="word fs-5 fw-bold mb-0 pt-2">
                            Caramel Macchiato
                          </p>
                        </div>
                        <div className="col-3">
                          <p class="word fw-bold fs-5 color_y ms-sm-0 float-end mb-0 pt-2">
                            $22.00
                          </p>
                        </div>
                      </div>
                      <p className=" ms-sm-0">
                        Lorem ipsum dolor sit amet elit. Phasel nec preti facil
                      </p>
                    </div>
                  </div>
                  <div className="row py-2">
                    <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-end">
                      <img
                        className="w rounded-circle img_size"
                        src={beverage}
                        alt="burger"
                      />
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 col-8 ps-0">
                      <div className="row">
                        <div className="col mb-0">
                          <p class="word fs-5 fw-bold mb-0 pt-2">
                            Caffe Americano
                          </p>
                        </div>
                        <div className="col-3">
                          <p class="word fw-bold fs-5 color_y ms-sm-0 float-end mb-0 pt-2">
                            $18.00
                          </p>
                        </div>
                      </div>
                      <p className=" ms-sm-0">
                        Lorem ipsum dolor sit amet elit. Phasel nec preti facil
                      </p>
                    </div>
                  </div>
                  <div className="row py-2">
                    <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-end">
                      <img
                        className="w rounded-circle img_size"
                        src={beverage}
                        alt="burger"
                      />
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 col-8 ps-0">
                      <div className="row">
                        <div className="col mb-0">
                          <p class="word fs-5 fw-bold mb-0 pt-2">
                            Single Cup Brew
                          </p>
                        </div>
                        <div className="col-3">
                          <p class="word fw-bold fs-5 color_y ms-sm-0 float-end mb-0 pt-2">
                            $16.00
                          </p>
                        </div>
                      </div>
                      <p className=" ms-sm-0">
                        Lorem ipsum dolor sit amet elit. Phasel nec preti facil
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12 text-center">
                  <img
                    className="img-fluid h-100 rounded-4 "
                    src={beverage_img}
                    alt="burger"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;

import React from "react";
import "../Styles/BookTable.css";
function BookTable() {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-12 py-5">
              <span className="fs-4 T_Head">Book A Table</span>
              <h1 className="display-5 fw-bold pb-4">
                Book Your Table For Private Dinners & Happy Hours
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                vulputate. Aliquam metus tortor, auctor id gravida condimentum,
                viverra quis sem.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                vulputate. Aliquam metus tortor, auctor id gravida condimentum,
                viverra quis sem. Curabitur non nisl nec nisi scelerisque
                maximus. Aenean consectetur convallis porttitor. Aliquam
                interdum at lacus non blandit.
              </p>
            </div>
            <div className="col-lg-6 col-sm-12 col-12">
              <div className="row">
                <div className="col-lg-9 col-md-10 col-sm-12 col-12 px-sm-4 px-2 table_bg py-5 m-auto">
                  <form>
                    <div className="mb-3 position-relative">
                      <i class="bi bi-person position-absolute fs-4 icon_style"></i>
                      <input
                        type="text"
                        className="form-control py-2 bg-transparent input_style text-white"
                        placeholder="Name"
                      />
                    </div>
                    <div className="mb-3 position-relative">
                      <i class="bi bi-envelope position-absolute fs-4 icon_style"></i>
                      <input
                        type="email"
                        className="form-control py-2 bg-transparent place input_style text-white"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-3 position-relative">
                      <i class="bi bi-phone-vibrate position-absolute fs-4 icon_style"></i>
                      <input
                        type="text"
                        className="form-control py-2 bg-transparent input_style"
                        placeholder="Mobile"
                      />
                    </div>
                    <div className="mb-3 text-white">
                      <input
                        type="date"
                        className="form-control py-2 bg-transparent input_style"
                        placeholder="Date"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="time"
                        className="form-control py-2 bg-transparent input_style "
                        placeholder="Time"
                      />
                    </div>
                    <div className="mb-3 position-relative">
                      <i class="bi bi-chevron-compact-down position-absolute fs-4 icon_style"></i>
                      <select
                        class="form-select"
                        className="form-control py-2 bg-transparent input_style "
                      >
                        <option selected>Guest 1</option>
                        <option value="1">Guest 2</option>
                        <option value="1">Guest 3</option>
                        <option value="1">Guest 4</option>
                        <option value="1">Guest 5</option>
                        <option value="1">Guest 6</option>
                        <option value="1">Guest 7</option>
                      </select>
                    </div>
                    <div className="mb-2">
                      <button
                        type="submit"
                        className="btn w-100 btn-success fw-medium py-2 fs-5 btn-sub"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookTable;

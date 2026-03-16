import React from "react";
function Pricing() {
  return (
    <div className="container mb-5 p-5">
      <div className="row p-5">
        <div className="col-6">
          <h1 className="mb-3 fs-4">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price <br></br>{" "}
            transparency in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col">
              <img src="media\images\pricing-eq.svg" style={{ width: "75%" }} />
              <p className="small">Free account opening</p>
            </div>
            <div className="col">
              <img src="media\images\pricing-eq.svg" style={{ width: "75%" }} />
              <p className="small">
                Free equity delivery and direct mutual funds
              </p>
            </div>
            <div className="col ">
              <img
                src="media\images\other-trades.svg"
                style={{ width: "75%" }}
              />
              <p className="small">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

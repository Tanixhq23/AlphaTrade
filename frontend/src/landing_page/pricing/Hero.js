import React from "react";
function Hero() {
  return (
    <div className="container ">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1
          style={{ fontSize: "1.5rem", lineHeight: "1.25", fontWeight: "500" }}
        >
          Charges
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.25",
            fontWeight: "400",
            color: "#9b9b9b",
            marginTop: "10px",
          }}
        >
          List of all charges and taxes
        </p>
      </div>
      <div className="row p-5 mt-5 border-bottom text-center">
        <div className="col-4 p-4 ">
          <img src="media\images\pricing-eq.svg" />
          <h1 className="fs-3">Free equity delivery</h1>
          <p style={{ marginTop: "30px" }}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4 ">
          <img src="media\images\other-trades.svg" />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p style={{ marginTop: "30px" }}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media\images\pricing-eq.svg" />
          <h1 className="fs-3">Free direct MF</h1>
          <p style={{ marginTop: "30px" }}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

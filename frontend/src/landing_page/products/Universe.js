import React, { useState, useEffect } from "react";
import axios from "axios";
function Universe() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:3002/",
          {},
          {
            withCredentials: true,
          },
        );
        if (data.status) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (err) {
        setUser(null);
      }
    };
    verifyUser();
  }, []);
  return (
    <div className="container">
      <div className="row text-center justify-content-center mb-5 ">
        <h1>The AlphaTrade Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div
          className="col-4 p-3 mt-5"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "3rem",
          }}
        >
          <img
            src="media/images/alpha.png"
            style={{
              height: "60px",
              objectFit: "contain",
              marginBottom: "15px",
            }}
          />
          <p
            className="text-small text-muted"
            style={{ fontSize: "0.75rem", maxWidth: "240px", margin: "0 auto" }}
          >
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div
          className="col-4 p-3 mt-5"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "3rem",
          }}
        >
          <img
            src="media\images\sensibull-logo.svg"
            style={{
              height: "50px",
              objectFit: "contain",
              marginBottom: "15px",
            }}
          />
          <p
            className="text-small text-muted"
            style={{ fontSize: "0.75rem", maxWidth: "240px", margin: "0 auto" }}
          >
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div
          className="col-4 p-3 mt-5"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "3rem",
          }}
        >
          <img
            src="media\images\tijori.svg"
            style={{
              height: "60px",
              objectFit: "contain",
              marginBottom: "15px",
            }}
          />
          <p
            className="text-small text-muted"
            style={{ fontSize: "0.75rem", maxWidth: "240px", margin: "0 auto" }}
          >
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div
          className="col-4 p-3 mt-5"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "3rem",
          }}
        >
          <img
            src="media\images\streak-logo.png"
            style={{
              height: "60px",
              objectFit: "contain",
              marginBottom: "15px",
            }}
          />
          <p
            className="text-small text-muted"
            style={{ fontSize: "0.75rem", maxWidth: "240px", margin: "0 auto" }}
          >
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div
          className="col-4 p-3 mt-5"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "3rem",
          }}
        >
          <img
            src="media\images\smallcase-logo.png"
            style={{
              height: "60px",
              objectFit: "contain",
              marginBottom: "15px",
            }}
          />
          <p
            className="text-small text-muted"
            style={{ fontSize: "0.75rem", maxWidth: "240px", margin: "0 auto" }}
          >
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div
          className="col-4 p-3 mt-5"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "3rem",
          }}
        >
          <img
            src="media\images\ditto-logo.png"
            style={{
              height: "60px",
              objectFit: "contain",
              marginBottom: "15px",
            }}
          />
          <p
            className="text-small text-muted"
            style={{ fontSize: "0.75rem", maxWidth: "240px", margin: "0 auto" }}
          >
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        {user ? (
          <button
            className="p-2 btn btn-primary signup-button fs-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            <a
              href="http://localhost:3001/"
              style={{ textDecoration: "none", color: "white" }}
            >
              Dashboard
            </a>
          </button>
        ) : (
          <button
            className="p-2 btn btn-primary signup-button fs-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Signup
          </button>
        )}
      </div>
    </div>
  );
}

export default Universe;

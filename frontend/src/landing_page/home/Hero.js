import React, { useState, useEffect } from "react";
import axios from "axios";
function Hero() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.post(
          "https://alphatrade-backend-d8jd.onrender.com/",
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
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.svg"
          alt="Hero Image"
          className="mb-5"
        />

        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        {user ? (
          <button
            className="p-2 btn btn-primary signup-button fs-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            <a href="null" style={{textDecoration:"none", color: "white"}}>Dashboard</a>
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

export default Hero;

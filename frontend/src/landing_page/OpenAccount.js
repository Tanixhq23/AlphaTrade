import React, { useState, useEffect } from "react";
import axios from "axios";
function OpenAccount() {
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
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Open a AlphaTrade account</h1>
        <p className="p-3">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        {user ? (
          <button
            className="p-2 btn btn-primary signup-button fs-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            <a
              href="http://localhost:3001/"
              style={{ textDecoration: "none", color: "white" }}
            >
              Open Account
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

export default OpenAccount;

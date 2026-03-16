import React, { useEffect, useState } from "react";

import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { useInRouterContext } from "react-router-dom";

const Home = ({ name }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.post(
          "https://alphatrade-backend-d8jd.onrender.com/",
          {},
          { withCredentials: true },
        );

        if (data.status) {
          setUser(data.user);
        } else {
          window.location.href = "http://https://alphatrade-backend-d8jd.onrender.com:3000/login";
        }
      } catch (err) {
        console.log(err);
      }
    };

    verifyUser();
  }, []);
  return (
    <>
      <TopBar Username={user} />
      <Dashboard  Username={user} />
    </>
  );
};

export default Home;

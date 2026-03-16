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
          "http://localhost:3002/",
          {},
          { withCredentials: true },
        );

        if (data.status) {
          setUser(data.user);
        } else {
          window.location.href = "http://localhost:3000/login";
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

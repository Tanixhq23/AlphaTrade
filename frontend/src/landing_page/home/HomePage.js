import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";
import Awards from "./Awards";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function HomePage() {
  const navigate = useNavigate();
  const [cookies, , removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      try {
        if (!cookies.token) return;

        const { data } = await axios.post(
          "http://localhost:3002/",
          {},
          { withCredentials: true },
        );

        const { status, user } = data;

        if (status) {
          setUsername(user);
          toast(`Hello ${user}`, { position: "top-right" });
        } else {
          removeCookie("token");
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
        removeCookie("token");
        navigate("/login");
      }
    };

    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  return (
    <>
      <ToastContainer />
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;

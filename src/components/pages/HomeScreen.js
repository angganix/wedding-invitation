import "../../styles/home-screen.scss";
import { BsBoxArrowRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function HomeScreen() {
  const [guestName, setGuestName] = useState("Tamu Undangan");

  const getUrlName = () => {
    let uriSearch = window.location.search;
    let uriParams = new URLSearchParams(uriSearch);

    if (uriParams.get("nama")) {
      setGuestName(uriParams.get("nama"));
    }
  };

  const playMusic = () => {
    let musicEl = document.getElementById("music");
    musicEl.play();
  };

  useEffect(() => {
    getUrlName();
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="container min-vh-100 my-3"
      id="home-screen-page"
    >
      <div className="min-vh-100 row justify-content-center align-items-center mx-1">
        <div className="home-screen-container">
          <h6 className="text-center font-weight-bold">
            We invite you to our attendance
          </h6>
          <h2 className="text-center font-weight-bold mt-3">Ery & Sony</h2>
          <h4 className="text-center">Kamis, 20 Mei 2021</h4>
          <hr className="my-3" />
          <p className="text-center">
            Kepada Yth, <br />
            Bapak / Ibu / Saudara/i <br />
            <span className="d-block pt-4">
              <span style={{ fontSize: 24 }}>
                <u>{guestName}</u>
              </span>
            </span>
            <br />
            Mohon Maaf bila ada kesalahan penulisan nama dan gelar
          </p>
        </div>
        <Link
          to="/home"
          className="btn btn-dark d-block mx-auto align-self-start mt-3"
          onClick={() => playMusic()}
        >
          Buka Undangan
          <BsBoxArrowRight
            className="ml-2"
            style={{ marginTop: -2, fontSize: 22 }}
          />
        </Link>
      </div>
    </motion.div>
  );
}

export default HomeScreen;

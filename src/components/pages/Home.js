import "../../styles/home.scss";
import Particles from "react-particles-js";
import { useEffect } from "react";
import { motion } from "framer-motion";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="mb-5 pt-3 position-relative"
      id="home-page"
      exit={{ opacity: 0 }}
    >
      <img
        src="/images/frame-border.png"
        alt=""
        className="img-fluid frame-border-top-left"
      />
      <img
        src="/images/frame-border.png"
        alt=""
        className="img-fluid frame-border-top-right"
      />

      <div className="container mt-5">
        <div
          className="card border-0"
          style={{ zIndex: -1, background: "rgba(300,300,300,0.8)" }}
        >
          <div className="card-body">
            <h4 className="text-center">Undangan Pernikahan</h4>
            <h2 className="text-center">Ery & Sony</h2>
            <hr />
            <h4 className="text-center">21 Mei 2021</h4>
          </div>
        </div>
      </div>

      <img
        src="/images/gallery/LAKS3350-min.JPG"
        alt=""
        className="img-fluid home-page-image"
      />

      <div className="position-absolute" style={{ top: 0 }}>
        <Particles
          height="100vh"
          params={{
            particles: {
              number: {
                value: 160,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                random: true,
                speed: 1,
                direction: "top",
                out_mode: "out",
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble",
                },
                onclick: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 0,
                  opacity: 0,
                },
                repulse: {
                  distance: 400,
                  duration: 4,
                },
              },
            },
          }}
        />
      </div>
    </motion.div>
  );
}

export default Home;

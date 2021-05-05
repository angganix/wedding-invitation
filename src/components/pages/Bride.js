import "../../styles/bride.scss";
import { useBrideStory } from "../../utils/bride-services";
import { useEffect } from "react";
import { motion } from "framer-motion";

function BrideSection({ brideImage, brideName, children, className = "" }) {
  return (
    <div
      className={`d-flex flex-column justify-content-start align-items-center ${className}`}
    >
      <div className="position-relative">
        <img
          src={brideImage}
          alt=""
          className="img-fluid d-block mx-auto bride-image rounded-circle"
        />
        <img
          src="/images/circle-images.png"
          alt=""
          className="img-fluid d-block mx-auto bride-image-outer"
        />
      </div>
      <div>
        <h2 className="text-center">{brideName}</h2>
        {children}
      </div>
    </div>
  );
}

function BrideStory() {
  const { storyList } = useBrideStory();

  useEffect(() => {
    window.$(".carousel").carousel();
  }, []);

  return (
    <div>
      <div id="carouselId" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {storyList.map((item, idx) => (
            <li
              key={idx}
              data-target="carouselId"
              data-slide-to={idx}
              className={`${idx === 0 ? "active" : ""}`}
            ></li>
          ))}
        </ol>
        <div className="carousel-inner" role="listbox">
          {storyList.map((item, idx) => (
            <div
              className={`carousel-item ${idx === 0 ? "active" : ""}`}
              key={idx}
              data-interval="8000"
            >
              <img
                src={item.image}
                className={`d-block w-100 bride-carousel-image rounded img-thumbnail ${
                  idx === 0 ? "first-bride-story" : ""
                }`}
                alt=""
              ></img>
              <div className="carousel-caption position-static">
                <h4 className="text-dark">
                  {item.title} - {item.event_date}
                </h4>
                <p style={{ fontSize: 12 }} className="text-dark">
                  {item.story}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Bride() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="mb-5 pt-3 pb-5 position-relative"
      id="bride-page"
    >
      <img
        src="/images/frame-border-2.png"
        alt=""
        className="img-fluid frame-border-top-left"
        style={{ width: 60 }}
      />
      <img
        src="/images/frame-border-2.png"
        alt=""
        className="img-fluid frame-border-bottom-right"
        style={{ width: 60 }}
      />

      <div className="container mt-5">
        <h4 className="text-center">Bismillahirahmanirahim</h4>
        <h4 className="text-center">
          Assalamualaikum Warahmatullahi Wabarakatuh
        </h4>
        <hr />
        <p className="text-center px-2 mb-3" style={{ fontSize: 14 }}>
          Maha suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan.
          Ya Allah, perkenankanlah kami merangkaikan kasih sayang yang Kau
          ciptakan diantara putra-putri kami:
        </p>

        <BrideSection
          brideImage="/images/woman-bride.jpg"
          brideName="Ns. Ery Nurhayati S.kep"
          className="mt-5"
        >
          <p className="text-center">
            Putri ke empat <br />
            Alm.bapak sukari <br /> & <br /> ibu Siti miturut
          </p>

          <div className="d-flex flex-row justify-content-center align-items-center">
            <div className="flex-shrink-0 w-25">
              <hr />
            </div>
            <div className="flex-grow-1">
              <strong className="text-center d-block" style={{ fontSize: 24 }}>
                Dengan
              </strong>
            </div>
            <div className="flex-shrink-0 w-25">
              <hr />
            </div>
          </div>
        </BrideSection>

        <BrideSection
          brideImage="/images/man-bride.jpg"
          brideName="Sertu Mar Sony Teguh Pribadi"
          className="mb-5 mt-5"
        >
          <p className="text-center">
            Putra ke dua <br />
            Bapak Sugiono <br /> & <br /> ibu Sri darwati
          </p>
        </BrideSection>

        <hr />

        <BrideStory />
      </div>
    </motion.div>
  );
}

export default Bride;

import "../../styles/event.scss";
import { FiClock, FiCalendar } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function EventData({ title, eventDate, eventTime, eventAddress }) {
  return (
    <div className="mx-5 d-flex flex-column justify-content-start align-items-center mb-4">
      <div>
        <h4 className="text-center">{title}</h4>
      </div>
      <div className="d-flex flex-column justify-content-start align-items-start">
        <div className="d-flex flex-row justify-content-start">
          <div className="flex-grow-1 mr-2">
            <FiCalendar />
          </div>
          <div className="flex-grow-1">{eventDate}</div>
        </div>
        <div className="d-flex flex-row justify-content-start">
          <div className="flex-grow-1 mr-2">
            <FiClock />
          </div>
          <div className="flex-grow-1">{eventTime}</div>
        </div>
        <div className="d-flex flex-row justify-content-start">
          <div className="flex-grow-1 mr-2">
            <HiOutlineLocationMarker />
          </div>
          <div className="flex-grow-1">{eventAddress}</div>
        </div>
      </div>
    </div>
  );
}

function EventWarning({ warningMessage, children }) {
  return (
    <div className="flex-shrink-0 mb-3" style={{ width: "48%" }}>
      <h5 style={{ fontSize: 14 }} className="text-center text-wrap">
        {children}
        {warningMessage}
      </h5>
    </div>
  );
}

function EventMap() {
  return (
    <div>
      <iframe
        title="event location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6463097984024!2d109.36107481477292!3d-6.932808794990984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTUnNTguMSJTIDEwOcKwMjEnNDcuOCJF!5e0!3m2!1sen!2sid!4v1620100826004!5m2!1sen!2sid"
        width="100%"
        height="320"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
      <button className="btn btn-secondary d-block mx-auto" disabled>
        Akad & Resepsi
      </button>
    </div>
  );
}

function Event() {
  const [resultCountdown, setResultCountdown] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    let eventDate = new Date("May 20, 2021 11:00:00");
    const counterTime = setInterval(() => {
      let nowDate = new Date().getTime();
      let distance = eventDate - nowDate;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setResultCountdown(
        `${days} Days, ${hours < 10 ? "0" + hours : hours}:${
          minutes < 10 ? "0" + minutes : minutes
        }:${seconds < 10 ? "0" + seconds : seconds}`
      );
    });

    return () => {
      clearInterval(counterTime);
    };
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="mb-5 pt-3 pb-5 position-relative"
      id="event-page"
    >
      <img
        src="/images/frame-border-2.png"
        alt=""
        className="img-fluid frame-border-top-left"
        style={{ width: 60 }}
      />

      <h2 className="text-center mt-5 mb-4">Save the Date</h2>

      <EventData
        title="Akad Nikah"
        eventDate="Kamis, 20 Mei 2021"
        eventTime="Jam 14:00 WIB - Selesai"
        eventAddress={
          <p>
            Tempat mempelai putri Dusun karanglo rt01/09 Desa sewaka
            kec.pemalang kab.pemalang
          </p>
        }
      />

      <EventData
        title="Resepsi Pernikahan"
        eventDate="Jum'at, 21 Mei 2021"
        eventTime="Jam 13:00 WIB - Selesai"
        eventAddress={
          <p>Dusun karanglo rt01/09 desa sewaka kec.pemalang kab.pemalang</p>
        }
      />

      <hr
        className="mb-4"
        style={{ border: 0, borderBottom: "1px dashed #bbb" }}
      />

      <p className="text-center" style={{ fontSize: 14 }}>
        Berhubung dengan adaya pandemi Covid-19 <br /> bagi tamu undangan
        dimohon untuk:
      </p>

      <div className="mx-2 d-flex flex-row justify-content-around align-items-start flex-wrap">
        <EventWarning warningMessage="Menggunakan Masker">
          <img
            src="/images/mask.png"
            alt=""
            className="img-fluid d-block mx-auto mb-1"
            style={{ width: 65, objectFit: "cover", objectPosition: "center" }}
          />
        </EventWarning>
        <EventWarning warningMessage="Mencuci Tangan">
          <img
            src="/images/handwash.png"
            alt=""
            className="img-fluid d-block mx-auto mb-1"
            style={{ width: 65, objectFit: "cover", objectPosition: "center" }}
          />
        </EventWarning>
        <EventWarning warningMessage="Menjaga Jarak">
          <img
            src="/images/distancing.png"
            alt=""
            className="img-fluid d-block mx-auto mb-1"
            style={{ width: 65, objectFit: "cover", objectPosition: "center" }}
          />
        </EventWarning>
        <EventWarning warningMessage="Menjauhi Kerumunan">
          <img
            src="/images/crowd.png"
            alt=""
            className="img-fluid d-block mx-auto mb-1"
            style={{ width: 65, objectFit: "cover", objectPosition: "center" }}
          />
        </EventWarning>
      </div>

      <hr style={{ border: 0, borderBottom: "1px dashed #bbb" }} />

      <div className="text-center">
        <h4 className="text-center">Event starts on {resultCountdown}</h4>
      </div>

      <hr style={{ borde: 0, borderBottom: "1px dashed #bbb" }} />

      <EventMap />
    </motion.div>
  );
}

export default Event;

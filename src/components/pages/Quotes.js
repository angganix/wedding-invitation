import { motion } from "framer-motion";

function BoxQuote({ children }) {
  return (
    <div className="mb-4 bordered-quote">
      <div>{children}</div>
    </div>
  );
}

function Quotes() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="mb-5 pt-3 pb-5 position-relative"
      id="quotes-page"
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
        className="img-fluid frame-border-top-right"
        style={{ width: 60 }}
      />

      <h2 className="text-center mt-3 mb-4">Doa Pernikahan</h2>

      <hr
        className="mx-3 mb-4"
        style={{ border: 0, borderBottom: "1px dashed #aaa" }}
      />

      <div className="container">
        <BoxQuote>
          <p style={{ fontStyle: "italic" }}>
            Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung
            dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa
            kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda bagi kaum yang berfikir.
          </p>
          <p className="font-weight-bold" style={{ fontStyle: "italic" }}>
            QS. Ar-Ruum : 21
          </p>
        </BoxQuote>

        <BoxQuote>
          <p style={{ fontStyle: "italic" }}>
            Semoga Allah memberi berkah kepadamu dan memberkahi (pernikahan)mu,
            serta mengumpulkan kalian berdua dalam satu kebaikan.
          </p>
          <p className="font-weight-bold" style={{ fontStyle: "italic" }}>
            (HR. Abu Dawud no 2130)
          </p>
        </BoxQuote>
      </div>
    </motion.div>
  );
}

export default Quotes;

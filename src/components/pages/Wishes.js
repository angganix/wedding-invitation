import { BiUser, BiCommentDetail } from "react-icons/bi";
import { RiSendPlaneFill } from "react-icons/ri";
import { useFormWishes, useWishes } from "../../utils/wishes-services";
import { motion } from "framer-motion";

function WishesForm() {
  const { setForm, saveForm } = useFormWishes();

  return (
    <div>
      <div className="form-group mb-3">
        <label htmlFor="nama">
          <BiUser className="mr-2 mt-n1" style={{ fontSize: 18 }} />
          Nama
        </label>
        <input
          type="text"
          name="nama"
          id="nama"
          className="form-control shadow-none"
          onChange={(e) => setForm(e)}
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="content">
          <BiCommentDetail className="mr-2 mt-n1" style={{ fontSize: 18 }} />
          Ucapan atau Do'a
        </label>
        <textarea
          name="content"
          id="content"
          rows="8"
          className="form-control shadow-none"
          style={{ resize: "none" }}
          onChange={(e) => setForm(e)}
        ></textarea>
      </div>

      <div className="form-group mb-3">
        <button
          className="btn btn-block bg-dark text-white"
          onClick={() => saveForm()}
        >
          <RiSendPlaneFill className="mr-2 mt-n1" style={{ fontSize: 16 }} />
          Kirim
        </button>
      </div>
    </div>
  );
}

function WhisesList({ data }) {
  return (
    <div className="card border-0 shadow-sm mb-3">
      <div className="card-body p-3">
        <h4 style={{ fontSize: 16 }}>
          <BiUser style={{ fontSize: 18 }} className="mt-n1 mr-2" />
          {data.nama}
        </h4>
        <p className="mb-0" style={{ fontSize: 14 }}>
          "{data.content}"
        </p>
      </div>
    </div>
  );
}

function Wishes() {
  const { doaList } = useWishes();

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="mb-5 pt-3 pb-5 position-relative"
      id="wishes-page"
    >
      <img
        src="/images/frame-border.png"
        alt=""
        className="img-fluid frame-border-top-left"
        style={{ width: 80 }}
      />
      <img
        src="/images/frame-border.png"
        alt=""
        className="img-fluid frame-border-top-right"
        style={{ width: 80 }}
      />

      <h2 className="text-center mt-3 mb-4">Tulis Ucapan & Do'a</h2>

      <div className="container">
        <hr
          className="mb-4"
          style={{ border: 0, borderBottom: "1px dashed #bbb" }}
        />

        <WishesForm />

        <hr
          className="my-4"
          style={{ border: 0, borderBottom: "1px dashed #bbb" }}
        />

        <h4 className="text-center">Doa untuk pengantin</h4>
        <hr
          className="my-4"
          style={{ border: 0, borderBottom: "1px dashed #bbb" }}
        />
        {doaList.map((item, idx) => (
          <WhisesList key={idx} data={item} />
        ))}
      </div>
    </motion.div>
  );
}

export default Wishes;

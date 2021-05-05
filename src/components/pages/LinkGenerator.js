import { useState } from "react";
import { AiOutlineLink } from "react-icons/ai";

function LinkGenerator() {
  const [nama, setNama] = useState("");
  const [link, setLink] = useState("");

  const generateLink = () => {
    if (!nama) {
      alert("Harap mengisi nama tamu undangan");
    } else {
      let linkUndangan = `https://ery-sony.nixmedia.web.id/?nama=${encodeURIComponent(
        nama
      )}`;
      setLink(linkUndangan);
    }
  };

  const copyLink = () => {
    let copyText = document.getElementById("linkInput");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Link disalin: " + copyText.value);
  };

  return (
    <div className="mb-5 pt-3 pb-5 position-relative">
      <div className="container">
        <h4 className="text-center">Link Generator</h4>

        <hr style={{ border: 0, borderBottom: "1px dashed #bbb" }} />

        <div className="form-group mb-3">
          <label htmlFor="nama" className="text-center d-block">
            Nama tamu yang diundang
          </label>
          <input
            type="text"
            name="nama"
            id="nama"
            className="form-control text-center"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <button
            className="btn btn-block btn-dark"
            onClick={() => generateLink()}
          >
            <AiOutlineLink style={{ fontSize: 18 }} className="mt-n1" />{" "}
            Generate Link
          </button>
        </div>

        <div className="form-group">
          {link && (
            <div>
              <label className="text-center d-block">
                Link Undangan <br />
                <small>Tap untuk menyalin</small>
              </label>
              <input
                placeholder="Linknya muncul disini"
                type="text"
                className="form-control text-center"
                value={link}
                readOnly
                id="linkInput"
                onClick={() => copyLink()}
              ></input>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LinkGenerator;

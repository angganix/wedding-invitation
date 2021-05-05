import imageList from "../../data/gallery.json";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function ModalGallery({ show, image, close }) {
  useEffect(() => {
    const openModal = () => {
      window.$("#imageModal").modal("show");
    };

    const closeModal = () => {
      window.$("#imageModal").modal("hide");
      close();
    };

    if (show) {
      openModal();
    } else {
      closeModal();
    }
  }, [show, close]);

  return (
    <div className="modal fade" id="imageModal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body p-0">
            <img
              src={`/images/gallery/${image}`}
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  const [images, setImages] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});

  const loadImage = async () => {
    let data = await imageList;
    setImages(data);
  };

  const selectImage = (filename) => {
    let imageSelected = images.filter((item) => item.filename === filename)[0];
    setSelectedImage(imageSelected);
    setModalShow(true);
  };

  const closeModal = () => {
    setModalShow(false);
  };

  useEffect(() => {
    loadImage();
    return () => {
      window.$(".modal-backdrop").remove();
      window.$("body").removeClass("modal-open");
    };
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="mb-5 pt-3 pb-5 position-relative"
      id="event-page"
    >
      <h2 className="text-center mt-3 mb-4">Galeri Foto & Video</h2>
      <div className="d-flex flex-row justify-content-center align-items-start flex-wrap">
        <div className="flex-grow-1 p-1">
          <iframe
            title="vid content"
            src="https://drive.google.com/file/d/10lFrLn79Zalckql3-l-MfJ9_nG0mHtVY/preview"
            width="100%"
            height="220"
            style={{ border: 0 }}
            className="rounded"
          ></iframe>
        </div>
        {images.map((item, idx) => (
          <div className="flex-grow-1 p-1" style={{ width: "48%" }} key={idx}>
            <img
              onClick={() => selectImage(item.filename)}
              src={`/images/gallery/${item.filename}`}
              alt=""
              className="img-fluid rounded"
            />
          </div>
        ))}
        <ModalGallery
          show={modalShow}
          image={selectedImage.filename}
          close={closeModal}
        />
      </div>
    </motion.div>
  );
}

export default Gallery;

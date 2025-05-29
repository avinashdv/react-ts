import { useState } from "react";
import { createPortal } from "react-dom";
import { IModal } from "../interfaces/ImageGalleryModal";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSLcpU6BO-cHuxnvoCTqI0MGi1C_okYzI-rA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGj1RQ31sQUu05jxxjVoOzkcQmF_BOoax5Q&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCv57Zsp9y2P0XFfKtTN--0KeFmPzQi3Tp2w&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcU1AzFed7rB6fzfMg6z5rP0nPJJQ1bLaPuQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmOqVO5KjBmF6X9NpZdNUDt8drUX8cBozINQ&s",
];

const Modal: React.FC<IModal> = ({ image, onClose }) => {
  const modalRoot = document.getElementById("modal-root");
  if (modalRoot) {
    return createPortal(
      <div className="modal-portal" onClick={onClose}>
        <img src={image} />
      </div>,
      modalRoot
    );
  }

  return <></>;
};

function ImageGalleryModal() {
  const [selected, setSelected] = useState<string | null>("");

  return (
    <div>
      <h1>Gallery</h1>
      <div className="image-gallery">
        {images.map((image) => {
          return (
            <img
              onClick={() => setSelected(image)}
              className="image"
              src={image}
              width="300"
              height="200"
            />
          );
        })}
      </div>
      {selected && <Modal image={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

export default ImageGalleryModal;

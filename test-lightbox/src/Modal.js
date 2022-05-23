import React from "react";
import "../src/Modal.css";

const Modal = () => {
  const closeModal = () => {
    console.log("Deberia de cerrar");
    return (
      <div>
        <h1>debe de cerrar</h1>
      </div>
    );
  };
  return (
    <div
      className="videocontainer"
    >
      <iframe src="https://youtube.com/embed/dQw4w9WgXcQ" className="video" />Í
    </div>
  );
};
export default Modal;


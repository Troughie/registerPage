import React from "react";
import { MdCancel } from "react-icons/md";

interface camera {
  videoRef: any;
}

const Modal: React.FC<camera> = ({ videoRef }) => {
  return (
    <div>
      <MdCancel size={30} />
      <div className="flex content-center h-screen w-screen">
        <video ref={videoRef}></video>
      </div>
    </div>
  );
};

export default Modal;

import React from "react";
import { images } from "../assets";

const Header = () => {
  return (
    <>
      <div className="w-screen bg-slate-300 flex fixed top-0 h-12 opacity-75 text-center z-9999">
        <img
          src={images.logo}
          width={120}
          height={110}
          alt=""
          className="absolute right-50 translate-x-[50%]"
        />
      </div>
    </>
  );
};

export default Header;

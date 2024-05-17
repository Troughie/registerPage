import React, { ReactNode } from "react";
import { DefaultLayout } from "..";
import { images } from "../../assets";

const InformationLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <DefaultLayout>
      <div className=" relative mt-[50px]  flex shadow-lg flex-col items-center justify-center px-[100px] text-black ">
        <div className="rounded-xl flex flex-col p-5 bg-zinc-200 h-auto w-screen md:w-full md:max-w-[1319px]">
          <img src={images.bg_images} alt="" />
          {children}
        </div>
      </div>

      <div className="mt-[100px]  items-center flex flex-col relative top-50 mx-4 text-center">
        <h2 className="text-xl md:text-4xl text-blue-400 pb-6">FAQ</h2>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </DefaultLayout>
  );
};

export default InformationLayout;

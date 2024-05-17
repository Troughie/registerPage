import React, { useState } from "react";

import { images } from "../assets";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import instance from "../api";
import Loading from "../components/loading";
import SweetAlert2 from "react-sweetalert2";
const Confirm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [swalProps, setSwalProps] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitOTP = async (data: any) => {
    const formData = { otp: data?.OTP, tokenID: id };
    setIsLoading(true);
    await instance
      .post("store/confirm", formData)
      .then((res) => {
        setSwalProps({
          show: true,
          title: "Success",
          text: res.data.message,
        });
        console.log(res);

        setIsLoading(false);
      })
      .catch((errors) => {
        setSwalProps({
          show: true,
          title: "Error",
          text: errors.response.data.message,
        });
        setIsLoading(false), console.log(errors);
      });
  };
  return isLoading ? (
    <Loading />
  ) : (
    <div className=" relative mt-[50px]  flex shadow-lg flex-col items-center justify-center px-[100px] text-black ">
      <SweetAlert2 {...swalProps} />
      <div className="rounded-xl flex flex-col p-5 bg-zinc-200 h-auto w-screen md:w-full md:max-w-[1319px]">
        <img src={images.bg_images} alt="" />
        <form onSubmit={handleSubmit(submitOTP)} className=" m-20 ">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              OTP
            </label>
            <input
              type="text"
              id="base-input"
              {...register("OTP")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
            />
          </div>
          <button className="flex w-full justify-center rounded-lg bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Confirm;

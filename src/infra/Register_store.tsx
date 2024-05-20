import { useForm } from "react-hook-form";
import SweetAlert2 from "react-sweetalert2";
import { images } from "../assets";
import { DefaultLayout } from ".";
import instance from "../api";
import { useState } from "react";
import Loading from "../components/loading";
import { registerStore } from "../model/input.model";
import CustomInput from "../commons/input";

interface CustomCSSProperties extends React.CSSProperties {
  "--image-url"?: string;
}

const Register_store = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [swalProps, setSwalProps] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const style: CustomCSSProperties = {
    "--image-url": `url(${images.bg_images})`,
    backgroundPosition: `100% 80%`,
  };

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    await instance
      .post("store/register", data)
      .then((res) => {
        setSwalProps({
          show: true,
          title: "Success",
          text: res?.data?.message,
        });
        setIsLoading(false);
      })
      .catch((errors) => {
        setSwalProps({
          show: true,
          title: "Error",
          text: errors?.data?.message,
        });
        setIsLoading(false), console.log(errors);
      });
  };

  return isLoading ? (
    <Loading />
  ) : (
    <DefaultLayout>
      <SweetAlert2
        {...swalProps}
        onConfirm={() => {
          window.location.reload();
        }}
      />
      <div
        style={style}
        className={`h-screen relative left-0 md:bg-[image:var(--image-url)]`}
      >
        <img className="md:hidden" src={images.bg_images} alt="" />
        <div className="flex flex-col w-full relative">
          <div className=" rounded-2xl  md:w-1/3 border absolute mx-4 top-10 md:right-10 border-stroke bg-white shadow-lg">
            <div className="border-b border-stroke py-4 px-6.5 ">
              <h3 className="font-bold  text-black ">
                Become a Partner Restaurant with Step GoFood
              </h3>
              <p className="font-normal text-black ">
                (*) Please enter correct email address.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl">
              <div className="p-6.5">
                {registerStore.map((el) => (
                  <CustomInput
                    key={el.field}
                    errors={errors}
                    register={register}
                    field={el.field}
                    label={el.label}
                    validator={el.validator}
                  />
                ))}

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Send Message
                </button>
              </div>
            </form>
            <div className="mx-4 my-2">
              {" "}
              <p className="font-thin text-xs">
                <small>
                  By submitting this form, I agree to StepGo's terms and
                </small>
                <a href="" className="font-thin text-xs">
                  {" "}
                  Conditions of stepGo
                </a>
              </p>
              <p className="font-thin text-xs mt-3">
                <small>
                  Partners should note not to change the name and/or address of
                  the Restaurant/Store within 60 (sixty) days from the date the
                  Restaurant/Store is activated on the Grab application. Grab
                  has the sole right to refuse and/or not support Partner's
                  request to change this information within the above time
                  limit.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2  items-center flex flex-col relative top-50 mx-4 text-center">
        <h2 className="text-xl md:text-4xl text-blue-400 pb-6">
          DEVELOP YOUR BUSINESS WITH GRABFOOD
        </h2>
        <p className="text-lg">
          Note, Grab will collect (i) New Merchant Package of 1.2 million VND,
          including VAT for each GrabFood Merchant in the City area. Ho Chi Minh
          and City. New registration from Hanoi, from September 1, 2023
          (referred to as "New Merchant Package") and (ii) commission fee on
          Merchant's sales according to the rate specified in the service
          contract e-commerce between Grab and Merchants (referred to as
          “Service Fee”).
        </p>
      </div>
      <div className="mt-[100px]  items-center flex flex-col relative top-50 mx-4 text-center">
        <h2 className="text-xl md:text-4xl text-blue-400 pb-6">
          IMPORTANT DOCUMENTS NEED TO PREPARE WHEN REGISTERING TO BECOME A
          GRABFOOD PARTNER​{" "}
        </h2>
        <img src={images.important} alt="" className="rounded-lg" />
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

export default Register_store;

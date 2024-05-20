import React, { useCallback, useEffect, useRef, useState } from "react";

import { inputDataRegister } from "../model/input.model";
import SweetAlert2 from "react-sweetalert2";
import { useForm } from "react-hook-form";
import Loading from "../components/loading";
import { useNavigate } from "react-router-dom";
import ChildInformation from "../components/childInfomation";
import InformationLayout from "./layout/informationLayout";
import { inputPersonRegister } from "../model/input.model";
import { addressSelectInter } from "../types/data_register";
import { dataUseForm, data_person, data_store } from "../types/data_submit";
import instance from "../api";
import pathRoutes from "../share/path";
import { fileToBase64, getWithExpiry } from "../share/utils";

const inputImg2: addressSelectInter[] = [
  {
    label: "Ảnh mặt trước",
    field: "front",
    validator: {
      required: {
        value: true,
        message: "Hoàn tất trường này",
      },
    },
  },
  {
    label: "Ảnh mặt sau",
    field: "back",
    validator: {
      required: {
        value: true,
        message: "Hoàn tất trường này",
      },
    },
  },
];

const inputImg: addressSelectInter[] = [
  {
    label: "Ảnh đại diện",
    field: "logo",
    validator: {
      required: {
        value: true,
        message: "Hoàn tất trường này",
      },
    },
  },
  {
    label: "Ảnh nền",
    field: "bg",
    validator: {
      required: {
        value: true,
        message: "Hoàn tất trường này",
      },
    },
  },
];

const SubmitInformation = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [swalProps, setSwalProps] = useState({});
  const [token, setToken] = useState<string>("");
  const [screen, setScreen] = useState<number>(1);
  const navigate = useNavigate();

  const textHeader: string =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat sed inventore fuga in, ";
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ mode: "all", reValidateMode: "onChange" });

  const submitHandler = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
    setScreen(2);
    window.scrollTo(0, 0);
  };

  const submitLastHandler = async (data: dataUseForm) => {
    setIsLoading(true);
    const {
      aDetail_person,
      aDetail_store,
      address_person,
      address_store,
      back,
      bg,
      dob,
      email,
      front,
      isAddressSimilar,
      logo,
      mainDish,
      name,
      phone,
      store_name,
    } = data;
    const fullAddressStore = [aDetail_store, address_store].join(",");
    const fullAddressPerson = !isAddressSimilar
      ? [aDetail_person, address_person].join(",")
      : "";
    const day = dob.replace("-", "");

    const formData = new FormData();
    //Chuyển đổi file thành base64
    const back1 = await fileToBase64(back[0]);
    const logo1 = await fileToBase64(logo[0]);
    const bg1 = await fileToBase64(bg[0]);
    const front1 = await fileToBase64(front[0]);
    // Thêm dữ liệu PersonDto vào formData
    formData.append("back", back1);
    formData.append("front", front1);
    formData.append("name", name);
    formData.append("dob", day);
    formData.append("phone", phone);
    formData.append("address", fullAddressPerson);
    formData.append("email", email);

    // Thêm dữ liệu StoreDto vào formData
    formData.append("bg", bg1);
    formData.append("logoStore", logo1);
    formData.append("name_store", store_name);
    formData.append("store_address", fullAddressStore);
    formData.append("mainDish", mainDish);
    formData.append("token", token);

    await instance
      .post("store/complete", formData)
      .then((res) => {
        setIsLoading(false);
        localStorage.removeItem("token");
        console.log(res);
      })
      .catch((err) => {
        console.log(err),
          setSwalProps({
            show: true,
            title: "Error",
            text: errors?.data?.message,
          });
      });
  };

  useEffect(() => {
    const token = getWithExpiry("token");
    console.log(token);

    if (!token) navigate(pathRoutes.confirm.path);
    setToken(token);
  }, []);

  return !isLoading ? (
    <InformationLayout>
      <SweetAlert2 {...swalProps} />
      {screen === 1 ? (
        <ChildInformation
          data={inputImg}
          labelImg="Logo và ảnh nền hiển thị trên app"
          textAddress="Địa chỉ cửa hàng"
          dataArrays={inputDataRegister}
          submitHandler={handleSubmit(submitHandler)}
          textHeader="Thông tin của cửa hàng"
          textNoteBody={textHeader}
          textNoteHeader={textHeader}
          errors={errors}
          typeAddress="store"
          register={register}
          btnText="Tiếp tục"
          setValue={setValue}
        />
      ) : (
        <ChildInformation
          data={inputImg2}
          labelImg="Hình ảnh căn cước công dân hoặc hồ chiếu"
          textAddress="Địa chỉ thường trú"
          typeAddress="person"
          dataArrays={inputPersonRegister}
          submitHandler={handleSubmit(submitLastHandler)}
          textHeader="Thông tin chủ cửa hàng/người sở hữu"
          textNoteBody={textHeader}
          textNoteHeader={textHeader}
          errors={errors}
          btnText="Hoàn thành"
          showCheck={false}
          setValue={setValue}
          register={register}
        />
      )}
    </InformationLayout>
  ) : (
    <Loading />
  );
};

export default SubmitInformation;

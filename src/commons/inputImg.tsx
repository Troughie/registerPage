import React, { useState } from "react";
import CustomInput from "./input";
interface props {
  label: string;
  name: string;
  register: any;
  errors: any;
  validator: object;
}

const InputImg: React.FC<props> = ({
  label,
  register,
  name,
  errors,
  validator,
}) => {
  const [img, setImg] = useState(null);
  const handleFileInputChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="mb-5">
      <div className="mb-10">
        <CustomInput
          errors={errors}
          field={name}
          label={label}
          register={register}
          validator={validator}
          typeInput="file"
          handleOnchange={(e: any) => {
            handleFileInputChange(e);
          }}
        />
        <div className="rounded-lg h-40 md:w-80 md:h-60 shadow-lg mb-5 mx-auto flex justify-center">
          <img
            src={img ?? ""}
            alt=""
            className="w-auto h-auto  rounded-md shadow-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default InputImg;

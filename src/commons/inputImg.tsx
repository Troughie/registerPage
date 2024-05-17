import React, { useState } from "react";
interface props {
  label: string;
  name: string;
  register: any;
}

const InputImg: React.FC<props> = ({ label, register, name }) => {
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
    <div className="mb-10">
      <div className="rounded-lg w-80 h-60 shadow-lg mb-5 mx-auto flex justify-center">
        <img
          src={img ?? ""}
          alt=""
          className="w-auto h-auto  rounded-md shadow-md object-contain"
        />
      </div>
      <div>
        <label className="gap-2 mb-2 text-md font-medium text-gray-900 items-center flex">
          {label}
        </label>
        <input
          type="file"
          id="base-input"
          {...register(`${name}`)}
          onChange={handleFileInputChange}
          className="bg-gray-50 shadow-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        />
      </div>
    </div>
  );
};

export default InputImg;

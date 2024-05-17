import React, { useEffect, useState } from "react";
import { address } from "../model/addressModel";
import { addressSelect } from "../model/input.model";
import instance from "../api";

interface props {
  register: any;
  errors: any;
}
const SelectAddress: React.FC<props> = ({ register, errors }) => {
  const [provinces, setProvinces] = useState<address[]>([]);
  const [districts, setDistricts] = useState<address[]>([]);
  const [wards, setWards] = useState<address[]>([]);

  const handleProvince = async () => {
    const province = await instance.post("address/provinces");
    setProvinces(province.data);
    console.log(province);
  };
  const handleDistrict = async (code: string, id: string) => {
    if (id === "province") {
      const result = await instance.post(`address/district`, { code: code });
      setDistricts(result.data);
      console.log(result);
    } else if (id === "district") {
      const result = await instance.post(`address/ward`, { code: code });
      setWards(result.data);
    }
  };

  useEffect(() => {
    handleProvince();
  }, []);

  return (
    <div>
      {addressSelect.map((el) => (
        <div className="mb-5">
          <label className="gap-2 mb-2 text-sm font-medium text-gray-900 items-center flex">
            <span className="text-red-700 text-xl">*</span>
            <span>{el.label}</span>
          </label>
          <select
            {...register(`${el.field}`)}
            onChange={(e) => {
              handleDistrict(e.target.value, el.field);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id=""
            error={errors[el.field]}
          >
            <option value="">---Select {el.label} ---</option>
            {el.field === "province" &&
              provinces?.map((item) => (
                <option value={item.code}>{item.name}</option>
              ))}
            {el.field === "district" &&
              districts?.map((item) => (
                <option value={item.code}>{item.name}</option>
              ))}
            {el.field === "ward" &&
              wards?.map((item) => (
                <option value={item.code}>{item.name}</option>
              ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default SelectAddress;

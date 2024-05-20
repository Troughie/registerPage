import React, { useEffect, useState } from "react";
import { address } from "../model/addressModel";
import { addressSelect } from "../model/input.model";
import instance from "../api";

interface props {
  register: any;
  setValue: any;
  typeAddress: string;
}
const SelectAddress: React.FC<props> = ({
  register,
  setValue,
  typeAddress,
}) => {
  const [provinces, setProvinces] = useState<address[]>([]);
  const [districts, setDistricts] = useState<address[]>([]);
  const [wards, setWards] = useState<address[]>([]);
  const [fullAddress, setFullAddress] = useState("");
  const handleProvince = async () => {
    const province = await instance.post("address/provinces");
    setProvinces(province.data.sort());
    console.log(province);
  };

  const handleDistrict = async (code: string, id: string) => {
    if (id === "province") {
      const result = await instance.post(`address/district`, { code: code });
      setDistricts(result?.data?.sort());
      setFullAddress(provinces.find((el) => el.code === code)?.full_name ?? "");
      console.log(result);
    } else if (id === "district") {
      const result = await instance.post(`address/ward`, { code: code });
      setFullAddress(
        [districts.find((el) => el.code === code)?.full_name, fullAddress].join(
          ","
        )
      );
      setWards(result?.data?.sort());
    } else if (id === "ward") {
      setFullAddress(
        [wards.find((el) => el.code === code)?.full_name, fullAddress].join(",")
      );
    }
  };
  useEffect(() => {
    setValue(`address_${typeAddress}`, fullAddress);
  }, [fullAddress]);

  useEffect(() => {
    handleProvince();
  }, []);

  return (
    <div>
      <input type="hidden" {...register(`address_${typeAddress}`)} />
      {addressSelect.map((el) => (
        <div key={el.field} className="mb-5">
          <label className="gap-2 mb-2 text-sm font-medium text-gray-900 items-center flex">
            <span className="text-red-700 text-xl">*</span>
            <span>{el.label}</span>
          </label>
          <select
            onChange={(e) => {
              handleDistrict(e.target.value, el.field);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id=""
          >
            <option value="">---Select {el.label} ---</option>
            {el.field === "province" &&
              provinces?.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.full_name}
                </option>
              ))}
            {el.field === "district" &&
              districts?.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.full_name}
                </option>
              ))}
            {el.field === "ward" &&
              wards?.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.full_name}
                </option>
              ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default SelectAddress;

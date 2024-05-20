import React from "react";

interface option {
  value: string;
  label: string;
}
interface registerOption {
  register: any;
}
const optionMainDish: option[] = [
  { value: "pho", label: "Phở" },
  { value: "banhmi", label: "Bánh mì" },
  { value: "rice", label: "Cơm" },
  { value: "pizza", label: "Pizza" },
  { value: "milk", label: "Trà sữa" },
  { value: "snack", label: "Ăn vặt" },
  { value: "ff", label: "Thức ăn nhanh" },
  { value: "cf", label: "Coffee , trà và nước ép" },
  { value: "desert", label: "Desert" },
  { value: "other", label: "Các loại khác" },
];
const SelectGroupOne: React.FC<registerOption> = ({ register }) => {
  return (
    <div className="mb-4.5">
      <div className="relative z-20 bg-transparent ">
        <select
          {...register("mainDish")}
          className={`bg-gray-50 w-full my-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400`}
        >
          <option value="" className="text-body">
            Món kinh doanh chính
          </option>
          {optionMainDish.map((dish) => (
            <option key={dish.value} value={dish.value} className="text-body">
              {dish.label}
            </option>
          ))}
        </select>

        <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
          <svg
            className="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.8">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                fill=""
              ></path>
            </g>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default SelectGroupOne;

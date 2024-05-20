import {
  addressSelectInter,
  data_register,
  idInputValue,
  inputRegister,
} from "../types/data_register";

export const inputModelRegisterStore: data_register[] = [
  {
    label: "Front citizen identification",
    img: "",
    idInput: idInputValue.ci,
  },
  {
    label: "Back citizen identification",
    img: "",
    idInput: idInputValue.bc,
  },
  {
    label: "Business registration",
    img: "",
    idInput: idInputValue.bu,
  },
];

export const inputDataRegister: inputRegister[] = [
  {
    label: "Tên cửa hàng",
    field: "store_name",
    validator: {
      required: { value: true, message: "Hoàn tất trường này" },
    },
  },
  {
    label: "Email liên hệ",
    field: "email",
    validator: {
      required: {
        value: true,
        message: "Hoàn tất trường này",
      },
      pattern: {
        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        message: "Định dạng mail chưa chính xác ex: xxxxxx@xxxx.xxx",
      },
    },
  },
  {
    label: "Số điện thoại liên hệ",
    field: "phone",
    validator: {
      required: {
        value: true,
        message: "Hoàn tất trường này",
      },
      minLength: {
        value: 10,
        message: "Số điện thoại phải có 10 ký tự",
      },
    },
  },
];

export const registerStore: inputRegister[] = [
  {
    label: "Tên người đăng ký",
    field: "name",
    validator: {
      required: { value: true, message: "Hoàn tất trường này" },
    },
  },
  {
    label: "Email (lưu ý phải điền chính xác email)",
    field: "email",
    validator: {
      required: {
        value: true,
        message: "Hoàn tất trường này",
      },
      pattern: {
        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        message: "Định dạng mail chưa chính xác ex: xxxxxx@xxxx.xxx",
      },
    },
  },
  {
    label: "Số điện thoại",
    field: "phone",
    validator: {
      required: {
        value: true,
        message: "Hoàn tất trường này",
      },
      minLength: {
        value: 10,
        message: "Số điện thoại phải có 10 ký tự",
      },
    },
  },
];

export const inputPersonRegister: inputRegister[] = [
  {
    label: "Họ và tên",
    field: "name",
    validator: {
      required: { value: true, message: "Hoàn tất trường này" },
    },
  },
  {
    label: "Ngày tháng năm sinh",
    field: "dob",
    validator: {
      required: {
        value: true,
        message: "Hoàn tất trường này",
      },
    },
    type: "date",
  },
];
export const addressSelect: addressSelectInter[] = [
  {
    label: "Thành phố",
    field: "province",
  },
  {
    label: "Tinh thanh",
    field: "district",
  },
  {
    label: "Phường xã",
    field: "ward",
  },
];

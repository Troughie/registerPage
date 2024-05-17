import {
  addressSelect,
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
    label: "Name restaurant",
    field: "store_name",
    validator: {
      required: { value: true, message: "Name restaurant is required" },
    },
  },
  {
    label: "Email contact store",
    field: "email",
    validator: {
      required: {
        value: true,
        message: "email is required",
      },
      pattern: {
        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        message: "valid email required",
      },
    },
  },
  {
    label: "Personal tax code",
    field: "code",
    validator: {
      required: {
        value: true,
        message: "Personal tax code is required",
      },
    },
  },
  {
    label: "Phone contact store",
    field: "phone",
    validator: {
      required: {
        value: true,
        message: "Phone is required",
      },
      minLength: {
        value: 10,
        message: "At least 10 characters",
      },
    },
  },

  {
    label: "Name bank",
    field: "banks",
    validator: {
      required: {
        value: true,
        message: "Name bank is required",
      },
    },
  },
  {
    label: "Card bank",
    field: "card",
    validator: {
      required: {
        value: true,
        message: "Card bank is required",
      },
    },
  },
  {
    label: "Address detail (Optional)",
    field: "address",
    validator: {},
  },
];

export const inputPersonRegister: inputRegister[] = [
  {
    label: "Username",
    field: "name",
    validator: {
      required: { value: true, message: "Hoàn tất trường này" },
    },
  },
  {
    label: "Day of birth",
    field: "date",
    validator: {
      required: {
        value: true,
        message: "Hoàn tất trường này",
      },
    },
    type: "date",
  },
  {
    label: "Nationality",
    field: "nationality",
    validator: {
      required: {
        value: true,
        message: "Hoàn tất trường này",
      },
    },
  },
  {
    label: "Số CMND/Hộ chiếu",
    field: "card",
    validator: {
      required: {
        value: true,
        message: "Hoàn tất trường này",
      },
    },
  },
  {
    label: "Ngày ngày cấp",
    field: "create_at",
    validator: {
      required: {
        value: true,
        message: "Hoàn tất trường này",
      },
    },
    type: "date",
  },
  {
    label: "Nơi cấp",
    field: "Where",
    validator: {
      required: {
        value: true,
        message: "Hoàn tất trường này",
      },
    },
  },
  {
    label: "Ngày hết hạn",
    field: "expired",
    validator: {
      required: {
        value: true,
        message: "Hoàn tất trường này",
      },
    },
    type: "date",
  },
];

export const addressSelect: addressSelect[] = [
  {
    label: "Thành phố",
    field: "province",
  },
  {
    label: "Tinh thanh",
    field: "district",
  },
  ,
  {
    label: "Phuong xa",
    field: "ward",
  },
];

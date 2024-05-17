export interface data_register {
  img: string;
  label: string;
  idInput: string;
}

export enum idInputValue {
  bu = "certificate",
  ci = "front_card",
  bc = "back_card",
}

export interface images_register {
  key: string;
  value: string;
}

export interface addressSelect {
  label: string;
  field: string;
}

export interface inputRegister {
  label: string;
  field: string;
  validator: any;
  type?: string;
}

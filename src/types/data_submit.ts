export interface dataUseForm {
  aDetail_person?: string;
  aDetail_store: string;
  address_person?: string;
  address_store: string;
  back: File;
  bg: File;
  mainDish: string;
  dob: string;
  email: string;
  front: File;
  isAddressSimilar: boolean;
  logo: File;
  name: string;
  phone: string;
  store_name: string;
}

export interface responseData {
  message: string;
  data: any;
  code: number;
  error?: string;
}

export interface data_store {
  bg: File;
  logoStore: File;
  name_store: string;
  address: string;
}

export interface data_person {
  dob: string;
  back: File;
  front: File;
  name: string;
  phone: string;
  address: string;
  email: string;
}

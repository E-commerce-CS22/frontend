export type User = {
  name: string;
  age: string;
};

export type UserLoginData = {
  email: string;
  password: string;
};

export type CustomerRegisterData = {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  phone: string;
  password: string;
  password_confirmation: string;
  address: string;
  city: string;
  postal_code?: string;
  profile?: string;
};

export type LoginInputData = {
  email: string;
  password: string;
};

export type ProductData = {
  id?: string;
  name: string;
  description: string;
  price: number;
  discount_type?: string;
  discount_value?: number;
  status?: string;
  discount_start_date?: string;
  discount_end_date?: string;
  variants?: {
    color?: string;
    memory?: string;
    ram?: string;
    image?: string;
  }[];
};

export type CategoryData = {
  name: string;
  slug: string;
  description: string;
  color: string;
};

export type TagData = {
  name: string;
  slug: string;
};

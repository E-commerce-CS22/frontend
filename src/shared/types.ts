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

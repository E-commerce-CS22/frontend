/* eslint-disable @typescript-eslint/no-explicit-any */
export const useSignUp = () => {
  const mutate = (data: any) => {
    return data;
  };
  const isError = false;
  const error = "testing error";
  return { mutate, isError, error };
};

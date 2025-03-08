/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

// type useAddNewCustomerHookProps = {};

export const useAddNewCustomerHook = () => {
  const onDone = (data) => {
    // here we will send the data to the server
    // this function accepts the data as props
  };
  const router = useRouter();
  const methods = useForm<any>({
    mode: "all",
    criteriaMode: "all",
  });
  const {
    handleSubmit,
    formState: { isDirty },
  } = methods;

  const handleCancel = () => router.back();

  const handleClick = (data) => {
    const result = data; // we may restructure the data here
    onDone(result);
  };

  return { methods, handleSubmit, isDirty, handleClick, handleCancel };
};

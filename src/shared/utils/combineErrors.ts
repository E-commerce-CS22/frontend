/* eslint-disable @typescript-eslint/no-explicit-any */
export const combineErrors = (reactFormErrors: any, mutationErrors: any) => {
  const mappedMutationErrors = Array.isArray(mutationErrors)
    ? mutationErrors?.reduce(
        (acc: any, error: any) => ({
          ...acc,
          [error.field]: {
            message: error.message,
          },
        }),
        {}
      )
    : [];

  return {
    ...mappedMutationErrors,
    ...reactFormErrors,
  };
};

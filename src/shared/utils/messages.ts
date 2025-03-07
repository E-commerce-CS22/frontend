export const MIN_LENGTH_MESSAGE = "Minimum input length is {{ value }}";
export const MAX_LENGTH_MESSAGE = "Maximum input length is {{ value }}";

export const MIN_VALUE_MESSAGE = "Minimum value is {{ value }}";
export const MAX_VALUE_MESSAGE = "Maximum value is {{ value }}";

export const FIELD_IS_REQUIRED_MSG = "Required";
export const X_FIELD_IS_REQUIRED_MSG = "{{ value }} field is required";

export const INVALID_PATTERN_MSG = "Invalid input pattern";
export const NUMERIC_PATTERN_MSG = "Invalid input,must consist of Numeric digits only";

export const NumericPattern = /^(([0-9]*)|(([0-9]*)\.([0-9]*)))$/g;

export const getValuedValidationFactory = (message: string) => (t, value) => {
  return { value: value, message: t(message, { value: value }) };
};

export const getMinLengthValidation = getValuedValidationFactory(MIN_LENGTH_MESSAGE);
export const getMaxLengthValidation = getValuedValidationFactory(MAX_LENGTH_MESSAGE);

export const getPatternValidation = getValuedValidationFactory(INVALID_PATTERN_MSG);

export const getMinValueValidation = getValuedValidationFactory(MIN_VALUE_MESSAGE);
export const getMaxValueValidation = getValuedValidationFactory(MAX_VALUE_MESSAGE);

export const getRequiredValidation = getValuedValidationFactory(FIELD_IS_REQUIRED_MSG);
export const getNumericValidation = getValuedValidationFactory(NUMERIC_PATTERN_MSG);

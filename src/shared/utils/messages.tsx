export const MIN_LENGTH_MESSAGE = "Minimum input length is {{ value }}";
export const MAX_LENGTH_MESSAGE = "Maximum input length is {{ value }}";

export const MIN_VALUE_MESSAGE = "Minimum value is {{ value }}";
export const MAX_VALUE_MESSAGE = "Maximum value is {{ value }}";

export const FIELD_IS_REQUIRED_MSG = "Required";
export const X_FIELD_IS_REQUIRED_MSG = "{{ value }} field is required";

export const INVALID_PATTERN_MSG = "Invalid input pattern";
export const NUMERIC_PATTERN_MSG =
  "Invalid input,must consist of Numeric digits only";

export const NumericPattern = /^(([0-9]*)|(([0-9]*)\.([0-9]*)))$/g;

export const getValuedValidationFactory = (message: string) => (t, value) => {
  return { value: value, message: t(message, { value: value }) };
};

export const getMinLengthValidation =
  getValuedValidationFactory(MIN_LENGTH_MESSAGE);
export const getMaxLengthValidation =
  getValuedValidationFactory(MAX_LENGTH_MESSAGE);

export const getPatternValidation =
  getValuedValidationFactory(INVALID_PATTERN_MSG);

export const getMinValueValidation =
  getValuedValidationFactory(MIN_VALUE_MESSAGE);
export const getMaxValueValidation =
  getValuedValidationFactory(MAX_VALUE_MESSAGE);

export const getRequiredValidation = getValuedValidationFactory(
  FIELD_IS_REQUIRED_MSG
);
export const getNumericValidation =
  getValuedValidationFactory(NUMERIC_PATTERN_MSG);

export const patternMobile = {
  message: "Phone must be like : {{ +9677XXXXXXXX }}",
  value: /^(\+|(00))9677\d{8}$/,
};

export const patternEmail = {
  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  message: "Please enter a valid email",
};

export const getPatternMobileErrorMessage = (t, errorMessage) => {
  if (errorMessage === "Phone must be like : {{ +967788777333 }}") {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: t("Phone must be like : {{ +967788777333 }}", {
            phone: "<span class='mobile-phone-rtl-fix'>+967788777333</span>",
            interpolation: { escapeValue: false },
          }),
        }}
      />
    );
  } else return t(errorMessage);
};

export const patternPassword = {
  value: /^(?=.*?[A-Z])(?=.*?[^\w\s]).{8,}$/,
  message:
    "Password must contain: Minimum of 8 characters, at least one uppercase letter, and one special character (e.g., !@#$%&)",
};

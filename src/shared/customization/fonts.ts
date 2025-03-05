export type FontFamilyEnum = "medium" | "regular" | "bold";

export const arFonts: Record<FontFamilyEnum, string> = {
  medium: "Arab Kufi Bold", // there is no medium in arabic and we have to use bold in arabic
  regular: "Arab Kufi Regular",
  bold: "Arab Kufi Bold",
};

export const enFonts: Record<FontFamilyEnum, string> = {
  medium: "CoHeadlineTrial-Light",
  regular: "CoHeadlineTrial-Regular",
  bold: "CoHeadlineTrial-Bold",
};

export const getAppFonts = (
  type: FontFamilyEnum,
  overrides?: { ar: string; en: string }
) => {
  return `${arFonts[overrides?.ar || type]} , ${
    enFonts[overrides?.en || type]
  }`;
};

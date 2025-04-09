import { primary } from "@/shared/customization";
import { makeStyles } from "@mui/styles";

export const useMainHeaderStyles = makeStyles(() => ({
  headerItem: {
    height: 150,
    maxHeight: 150,
    textAlign: "center",
  },
  textWhiteColor: {
    color: primary,
  },
  questionBox: {
    marginBottom: 10,
  },
  questionText: {
    fontSize: 18,
    fontFamily: "CoHeadlineTrial-Regular,Arab Kufi Regular",
    paddingTop: 20,
  },
  faqsText: {
    fontSize: 36,
    fontFamily: "CoHeadlineTrial-Bold,Arab Kufi Regular",
  },
  inputBox: {
    maxWidth: 536,
    margin: "auto",
  },
  input: {
    paddingTop: "12px",
  },
  searchIcon: {
    marginTop: "0px !important",
    height: 30,
    width: 30,
  },
}));

import { createStyles } from "@mui/styles";
import { ThemePalette } from "../../customization";
import { boxShadowCard } from "../../customization/shadows";

export const commonCardStyles = createStyles({
  root: {
    padding: "15px",
  },
  card: {
    color: ThemePalette.primary.main,
    margin: "0 auto",
    width: "100%",
    backgroundColor: ThemePalette.common.white,
    textAlign: "center",
    height: "380px",
    boxShadow: boxShadowCard,
    borderRadius: "10px",
  },
  gutterBottom: {
    color: ThemePalette.primary.main,
    padding: "10px 0px 0px 5px",
    fontSize: "22px",
  },
  subGutter: {
    textAlign: "center",
    color: ThemePalette.primary.main,
    fontSize: "18px",
    width: "304px",
    height: "42px",
    margin: "0 auto",
    fontFamily: "CoHeadlineTrial-Regular, Arab Kufi Regular",
  },
  subGutter2: {
    textAlign: "center",
    color: ThemePalette.primary.main,
    fontSize: "16px",
    width: "fit-content",
    height: "21px",
    margin: "0 auto",
    paddingTop: "30px",
    left: "497px",
    paddingBottom: "7px",
    fontFamily: "CoHeadlineTrial-Regular, Arab Kufi Regular",
  },
  headerIcon: {
    paddingTop: "10px",
  },
  button: {
    background: ThemePalette.primary.main,
    padding: "10px",
    color: ThemePalette.common.white,
    margin: "0px 18px",
    marginBottom: "10px",
    // width: "180px",
    width: "fit-content",
    height: " 40px",
    "&:hover": {
      backgroundColor: "#1C2346",
    },
  },
  container: {
    color: ThemePalette.primary.main,
    padding: "10px",
    fontSize: "22px",
    margin: "10px",
  },
  divider: {
    background: "#F0F2F5",
    marginTop: "5px",
    width: "calc(100% - 50px)",
    marginInline: "auto",
  },
  header: {},
});

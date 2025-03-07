import { makeStyles } from "tss-react/mui";
import { darkRed, primary } from "../../customization/theme/colors";

export const styles = makeStyles()((theme) => ({
  root: {
    display: "flex",
    position: "relative",
  },
  container: {
    borderRadius: 10,
    border: "1px solid #5B779880",
    width: 348,
    height: 210,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderStyle: "dashed",
    position: "relative",
  },

  containerImg: {
    borderRadius: 10,
    width: 348,
    height: 210,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginLeft: "15px",
    boxShadow: "inset 365px -40px 11px -15px rgba(0,0,0,0.5)",
  },
  img: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    opacity: "50%",
  },
  errorsContainer: {
    border: `1px solid ${darkRed}`,
    width: 348,
    height: 210,
    borderRadius: 10,
    color: "#973149",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    opacity: 1,
    borderStyle: "dashed",
    position: "relative",
  },
  error: {
    border: `1px solid ${theme.palette.error.main}`,
  },
  btn: {
    backgroundColor: theme.palette.success.main,
    color: "#fff",
    marginTop: 5,
    "&:hover": {
      backgroundColor: theme.palette.success.light,
    },
    height: 30,
  },
  imageIcon: {
    color: "#B1BDD1",
    fontSize: "3rem",
    margin: "auto",
    marginTop: "12px",
    marginBottom: "15px",
  },
  span: {
    fontWeight: "bold",
    color: "black",
  },
  imageIconError: {
    margin: 10,
    color: theme.palette.error.main,
    position: "absolute",
  },
  addIcon: {
    color: "#FFF",
    fontSize: "30px",
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    color: "white",
    "& .MuiSvgIcon-root": {
      width: "100%",
      height: "100%",
      justifyContent: "center",
    },
  },
  label: {
    display: "flex",
    flexDirection: "column",
  },
  zoomIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    color: primary,
    backgroundColor: "#fff",
    "&.MuiIconButton-root": {
      width: 35,
      height: 35,
    },
  },
  content: {
    padding: 0,
    position: "relative",
  },
  input: {
    position: "absolute",
    top: "0",
    left: "0",
    opacity: 0,
    zIndex: 10,
    cursor: "pointer",
    width: "100%",
    height: "100%",
  },
  button: {},
}));

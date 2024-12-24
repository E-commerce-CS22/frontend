import { makeStyles } from "@mui/styles";

export const useNotificationDrawerStyles = makeStyles(() => ({
  paper: {
    width: 370,
    overflowX: "hidden",
  },
  paperMobileScreen: {
    width: "100%",
  },
  container: {
    paddingInline: 15,
  },
  iconButtonClose: {
    height: 20,
    width: 20,
    opacity: 0.3,
    margin: 10,
    marginInline: 0,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  number: {
    fontSize: 14,
  },
  footer: {
    margin: 15,
    height: 50,
    width: 340,
    position: "absolute",
    bottom: 0,
  },
}));

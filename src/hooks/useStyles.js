import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  media: {
    height: "100vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: "100vh"
  },
  btn: {
    position: "absolute",
    bottom: "15%",
    left: "50%",
    transform: "translate(-50%, 50%)"
  },
  down: {
    "&>:nth-child(1)": {
      transition: "transform 0.75s ease-in-out",
      transform: "rotate(90deg)"
    }
  },
  up: {
    "&>:nth-child(1)": {
      transition: "transform 0.75s ease-in-out",
      transform: "rotate(-90deg)"
    }
  }
}));

export default useStyles;
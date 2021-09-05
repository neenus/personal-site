import { useSpring, animated } from "react-spring";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core/styles";
import DoubleArrowOutlinedIcon from "@material-ui/icons/DoubleArrowOutlined";
const {
  CardMedia,
  makeStyles,
  Typography,
  Box,
  Fab
} = require("@material-ui/core");

let theme = createTheme();
theme = responsiveFontSizes(theme);
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
  primaryMessage: {
    textTransform: "uppercase",
    fontWeight: 700
  },
  secondaryMessage: {
    textTransform: "uppercase",
    fontWeight: 200
  },
  downButton: {
    position: "absolute",
    bottom: "25%",
    left: "50%",
    transform: "translate(-50%, 50%)",
    "&>:nth-child(1)": {
      transform: "rotate(90deg)"
    }
  }
}));

const HomePage = () => {
  const classes = useStyles();

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 300,
    config: {
      duration: 700
    }
  });
  return (
    <animated.main style={props}>
      <ThemeProvider theme={theme}>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
        >
          <div className={classes.overlay}>
            <Box
              minHeight="70vh"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              color="white"
            >
              <Typography
                variant="h2"
                className={classes.primaryMessage}
                gutterBottom
                align="center"
              >
                Neenus Gabriel
              </Typography>
              <Typography
                variant="h4"
                className={classes.secondaryMessage}
                align="center"
              >
                Full stack web developer
              </Typography>
            </Box>
            <Fab
              aria-label="down"
              variant="circular"
              className={classes.downButton}
            >
              <DoubleArrowOutlinedIcon />
            </Fab>
          </div>
        </CardMedia>
      </ThemeProvider>
    </animated.main>
  );
};

export default HomePage;

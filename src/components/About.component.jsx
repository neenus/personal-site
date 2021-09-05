import {
  makeStyles,
  Avatar,
  Box,
  Typography,
  Button,
  Link
} from "@material-ui/core";
import { forwardRef } from "react";
import Title from "./Title.component";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#fff",
    minHeight: "70vh",
    textAlign: "center"
  },
  container: {
    padding: theme.spacing(5),
    margin: theme.spacing(0, "auto"),
    maxWidth: theme.spacing(125)
  },
  large: {
    marginTop: theme.spacing(3),
    width: theme.spacing(15),
    height: theme.spacing(15),
    "&:hover": {
      boxShadow: "1px 1px 30px black",
      cursor: "pointer"
    }
  },
  btn: {
    marginTop: theme.spacing(3),
    "&:hover": {
      backgroundColor: "#000",
      color: "#fff"
    }
  }
}));

const About = forwardRef((props, ref) => {
  const classes = useStyles();
  return (
    <div id="about" className={classes.root} ref={ref}>
      <ThemeProvider theme={theme}>
        <Box
          className={classes.container}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Title variant="h2" message="About me" className="subtitle" />
          <Typography>
            Dynamic and motivated software engineer with years of experience in
            full stack software development and a passion for creative problem
            solving. Dedicated life-long learner always eager to discover new
            things.
            <br />
            <br />
            Outside of work I'm a husband, a father, a son and a friend. I try
            to enjoy my time with my family as much as I can because life is too
            short not to... if you want to know more about me buy me a beer and
            I'll tell you everything... just kidding you can{" "}
            <Link href="#">get in touch here</Link> but a beer would still be
            nice. 😜
          </Typography>
          <Avatar
            variant="circular"
            className={classes.large}
            src={"/20170514_001355.jpg"}
            alt="A horrible headshot of myself"
            onClick={() =>
              alert(
                "I know quality of this image is horrible if you're a photographer or know anything about professional headshots I'd like to talk to you please 😀"
              )
            }
          />
          <Button variant="outlined" className={classes.btn}>
            Contact Me!
          </Button>
        </Box>
      </ThemeProvider>
    </div>
  );
});

export default About;

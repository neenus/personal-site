import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core/styles";
const { CardMedia, makeStyles, Typography, Box } = require("@material-ui/core");

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
  [theme.breakpoints.up("md")]: {}
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <main>
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
                variant="h4"
                className={classes.secondaryMessage}
                align="center"
              >
                Hello! my name is
              </Typography>
              <Typography
                variant="h2"
                className={classes.primaryMessage}
                gutterBottom
                align="center"
              >
                Neenus Gabriel
              </Typography>
            </Box>
          </div>
        </CardMedia>
      </ThemeProvider>
    </main>
  );
};

export default HomePage;

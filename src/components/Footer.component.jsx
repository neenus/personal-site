import { makeStyles, Typography, Box, Link } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(1),
    color: "white"
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(0, 0.5)
    }
  }
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <Box
      id="footer"
      className={classes.footer}
      display="flex"
      justifyContent="space-around"
      alignItems="center"
    >
      <Typography variant="caption">
        &copy; Neenus Gabriel
        {" - "}
        {new Date().getFullYear()}
      </Typography>
      <Box className={classes.socialLinks}>
        <Link
          rel="noreferrer"
          color="inherit"
          target="_blank"
          href="https://www.linkedin.com/in/neenuswg/"
        >
          <LinkedInIcon />
        </Link>
        <Link
          rel="noreferrer"
          color="inherit"
          target="_blank"
          href="https://github.com/neenus"
        >
          <GitHubIcon />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;

import { Typography, Box, Link, useTheme } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const getStyles = theme => ({
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
});

const Footer = () => {
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <Box
      id="footer"
      sx={styles.footer}
      display="flex"
      justifyContent="space-around"
      alignItems="center"
    >
      <Typography variant="caption">
        &copy; Neenus Gabriel
        {" - "}
        {new Date().getFullYear()}
      </Typography>
      <Box sx={styles.socialLinks}>
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

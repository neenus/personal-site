import { Typography, useTheme } from "@mui/material";

const getStyles = theme => ({
  title: {
    textTransform: "uppercase",
    fontWeight: 700,
    fontFamily: "Montserrat"
  },
  subtitle: {
    textTransform: "uppercase",
    fontWeight: 200,
    fontFamily: "Montserrat",
    position: "relative",
    marginBottom: "2em",

    "&:after": {
      display: "block",
      content: '""',
      width: "100%",
      height: "1px",
      background: "red",
      position: "absolute",
      bottom: -10
    }
  }
});

const Title = ({ variant, message, className }) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <Typography
      variant={variant}
      gutterBottom
      align="center"
      sx={styles[className]}
    >
      {message}
    </Typography>
  );
};

export default Title;

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  title: {
    textTransform: "uppercase",
    fontWeight: 700
  },
  subtitle: {
    textTransform: "uppercase",
    fontWeight: 200
  }
}));

const Title = ({ variant, message, className }) => {
  const classes = useStyles();
  return (
    <Typography
      variant={variant}
      gutterBottom
      align="center"
      className={classes[className]}
    >
      {message}
    </Typography>
  );
};

export default Title;

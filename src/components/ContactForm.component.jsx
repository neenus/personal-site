import {
  Box,
  makeStyles,
  Button,
  useTheme,
  useMediaQuery
} from "@material-ui/core";
import useForm from "../useForm";
import { Send } from "@material-ui/icons";
// import axios from "axios";
import { useRef } from "react";
import FormInput from "./FormInput.component";
import ReCAPTCHA from "react-google-recaptcha";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "white"
  },
  container: {
    padding: theme.spacing(1),
    margin: theme.spacing(0, "auto"),
    maxWidth: theme.spacing(125)
  }
}));

const ContactForm = () => {
  const recaptchaRef = useRef();
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { state, handleChange, handleSubmit } = useForm(submit);

  function submit() {
    console.log("form submitted!", state);
  }

  return (
    <div id="contact-form" className={classes.root}>
      <Box className={classes.container}>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <FormInput
            label="Full Name"
            name="name"
            handleChange={handleChange}
            value={state.name}
          />
          <FormInput
            label="Email Address"
            name="email"
            type="email"
            handleChange={handleChange}
            value={state.email}
          />
          <FormInput
            label="Message"
            name="message"
            multiline
            minRows="3"
            handleChange={handleChange}
            value={state.message}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            endIcon={<Send />}
            fullWidth={isMobile}
          >
            Send
          </Button>
        </form>
      </Box>
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.REACT_APP_SITE_KEY}
      ></ReCAPTCHA>
    </div>
  );
};

export default ContactForm;

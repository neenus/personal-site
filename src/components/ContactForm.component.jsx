import {
  Box,
  makeStyles,
  Button,
  useTheme,
  useMediaQuery
} from "@material-ui/core";
import useForm from "../useForm";
import { validate } from "../utils/validate";
import { Send } from "@material-ui/icons";
// import axios from "axios";
import { useRef, useEffect, useState } from "react";
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
  const [formReady, setFormReady] = useState(false);

  const { state, handleBlur, handleChange, handleSubmit, errors } = useForm(
    submit,
    validate
  );

  function submit() {
    formReady
      ? console.log("form submitted!", state)
      : console.log("Cannot submit form please fix form errors");
  }

  useEffect(() => {
    if (Object.values(state).every(x => x !== "")) {
      if (Object.values(errors).every(x => x === "")) {
        setFormReady(true);
      }
    } else {
      setFormReady(false);
    }
  }, [errors, state]);

  return (
    <div id="contact-form" className={classes.root}>
      <Box className={classes.container}>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <FormInput
            label="Full Name"
            name="name"
            onBlur={e => handleBlur(e.target)}
            handleChange={handleChange}
            value={state.name}
            error={errors.name ? true : false}
            helperText={errors.name ? errors.name : ""}
          />
          <FormInput
            label="Email Address"
            name="email"
            type="email"
            onBlur={e => handleBlur(e.target)}
            handleChange={handleChange}
            value={state.email}
            error={errors.email ? true : false}
            helperText={errors.email ? errors.email : ""}
          />
          <FormInput
            label="Message"
            name="message"
            multiline
            minRows="3"
            onBlur={e => handleBlur(e.target)}
            handleChange={handleChange}
            value={state.message}
            error={errors.message ? true : false}
            helperText={errors.message ? errors.message : ""}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            endIcon={<Send />}
            fullWidth={isMobile}
            disabled={!formReady}
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

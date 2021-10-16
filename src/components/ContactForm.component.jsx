import {
  Box,
  makeStyles,
  Button,
  useTheme,
  useMediaQuery,
  Snackbar,
  IconButton,
  CircularProgress
} from "@material-ui/core";
import useForm from "../useForm";
import { Send } from "@material-ui/icons";
import axios from "axios";
import React, { useRef, useEffect, useState } from "react";
import FormInput from "./FormInput.component";
import ReCAPTCHA from "react-google-recaptcha";
import CloseIcon from "@material-ui/icons/Close";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "white"
  },
  container: {
    padding: theme.spacing(1),
    margin: theme.spacing(0, "auto"),
    maxWidth: theme.spacing(125)
  },
  snackbar: {
    fontSize: "2rem"
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative"
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "5%",
    marginTop: -12,
    marginLeft: -12,
    zIndex: 10
  }
}));

const ContactForm = () => {
  const recaptchaRef = useRef();
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [formReady, setFormReady] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    success: false
  });

  const handleClose = () =>
    setSnackbar({
      ...snackbar,
      message: "",
      open: false
    });

  const Alert = props => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  const { state, handleBlur, handleChange, handleSubmit, errors, loading } =
    useForm(submit);

  async function submit() {
    const token = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();

    const endpoint = process.env.REACT_APP_AWS_API_GATEWAY_URL;
    const { name, email, message } = state;
    if (!formReady) {
      setSnackbar({
        ...snackbar,
        success: false,
        message: "Please fix all form errors and re-submit again",
        open: true
      });
    } else {
      try {
        const response = await axios({
          method: "POST",
          url: endpoint,
          withCredentials: false,
          data: {
            name,
            email,
            message,
            token
          },
          headers: {
            "Content-Type": "application/json"
          }
        });
        if (response.status === 200) {
          setSnackbar({
            ...snackbar,
            success: true,
            message:
              "Thank you! Your email was sent successfully I will get back to you shortly.",
            open: true
          });
        } else {
          setSnackbar({
            ...snackbar,
            success: false,
            message: "Opps! something went wrong, please try again.",
            open: true
          });
        }
      } catch (error) {
        setSnackbar({
          ...snackbar,
          success: false,
          message: "Opps! something went wrong, please try again.",
          open: true
        });
      }
    }
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
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        fontSize="large"
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleClose}
        message={snackbar.message}
        action={
          <React.Fragment>
            <IconButton color="secondary" size="small" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      >
        <Alert
          onClose={handleClose}
          severity={snackbar.success ? "success" : "error"}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
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
          <div className={classes.wrapper}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
              endIcon={<Send />}
              fullWidth={isMobile}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </Button>
            {loading && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>
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

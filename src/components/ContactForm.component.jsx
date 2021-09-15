import { Box, makeStyles, Button } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { useState, useEffect } from "react";
import FormInput from "./FormInput.component";

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
  const classes = useStyles();
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
    validationErrors: {
      name: false,
      email: false,
      message: false
    },
    validationErrorMsgs: {
      name: "",
      email: "",
      message: ""
    },
    formDsiabled: true
  });

  useEffect(() => {
    formIsValid();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.name, state.email, state.message]);

  const handleChange = e => {
    const input = e.target.value;
    switch (e.target.name) {
      case "name":
        nameIsValid(input);
        return setState(state => ({ ...state, name: input }));
      case "email":
        emailIsValid(input);
        return setState(state => ({ ...state, email: input }));
      case "message":
        messageIsValid(input);
        return setState(state => ({ ...state, message: input }));
      default:
        break;
    }
  };

  const handleSubmit = async e => {
    if (!state.formDsiabled) {
      e.preventDefault();
      console.log(state);
      resetState();
    }
  };

  const resetState = () => {
    setState(state => ({
      ...state,
      name: "",
      email: "",
      message: ""
    }));
  };

  const handleBlur = payload => {
    switch (payload) {
      case "name":
        nameIsValid(state.name);
        break;
      case "email":
        emailIsValid(state.email);
        break;
      case "message":
        messageIsValid(state.message);
        break;
      default:
        break;
    }
  };

  const nameIsValid = async name => {
    !name
      ? await setError({ field: "name", errorMsg: "Name is required" })
      : await setValidInputState("name");
  };
  const emailIsValid = async email => {
    if (!email) {
      await setError({ field: "email", errorMsg: "Email is required" });
    } else {
      let validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      !validEmail
        ? await setError({ field: "email", errorMsg: "Email is not valid" })
        : await setValidInputState("email");
    }
  };
  const messageIsValid = async message => {
    !message
      ? setError({ field: "message", errorMsg: "Message is required" })
      : await setValidInputState("message");
  };

  const setError = ({ field, errorMsg }) => {
    setState(state => ({
      ...state,
      validationErrors: {
        ...state.validationErrors,
        [field]: true
      },
      validationErrorMsgs: {
        ...state.validationErrorMsgs,
        [field]: errorMsg
      }
    }));
  };

  const setValidInputState = async payload => {
    await setState(state => ({
      ...state,
      validationErrors: {
        ...state.validationErrors,
        [payload]: false
      },
      validationErrorMsgs: {
        ...state.validationErrorMsgs,
        [payload]: ""
      }
    }));
  };

  const formIsValid = () => {
    const formInputs = {
      name: state.name,
      email: state.email,
      message: state.message
    };

    const isValid =
      Object.values(formInputs).every(x => x !== "") &&
      Object.values(state.validationErrors).every(x => x === false);

    isValid
      ? setState(state => ({
          ...state,
          formDsiabled: false
        }))
      : setState(state => ({
          ...state,
          formDsiabled: true
        }));
  };

  return (
    <div id="contact-form" className={classes.root}>
      <Box className={classes.container}>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <FormInput
            onBlur={e => handleBlur(e.target.name)}
            label="Full Name"
            name="name"
            handleChange={handleChange}
            value={state.name}
            error={state.validationErrors.name}
            helperText={state.validationErrorMsgs.name}
          />
          <FormInput
            onBlur={e => handleBlur(e.target.name)}
            label="Email Address"
            name="email"
            type="email"
            handleChange={handleChange}
            value={state.email}
            error={state.validationErrors.email}
            helperText={state.validationErrorMsgs.email}
          />
          <FormInput
            onBlur={e => handleBlur(e.target.name)}
            label="Message"
            name="message"
            multiline
            minRows="6"
            handleChange={handleChange}
            value={state.message}
            error={state.validationErrors.message}
            helperText={state.validationErrorMsgs.message}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            endIcon={<Send />}
            fullWidth
            disabled={state.formDsiabled}
          >
            Send
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default ContactForm;

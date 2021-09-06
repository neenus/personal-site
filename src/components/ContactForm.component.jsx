import { Box, makeStyles, Button } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { useState } from "react";
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
    message: ""
  });

  const handleChange = e => {
    const input = e.target.value;
    switch (e.target.name) {
      case "name":
        return setState(state => ({ ...state, name: input }));
      case "email":
        return setState(state => ({ ...state, email: input }));
      case "message":
        return setState(state => ({ ...state, message: input }));
      default:
        break;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(state);
    resetState();
  };

  const resetState = () => {
    setState(state => ({
      ...state,
      name: "",
      email: "",
      message: ""
    }));
  };

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
            minRows="6"
            handleChange={handleChange}
            value={state.message}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            endIcon={<Send />}
            fullWidth
          >
            Send
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default ContactForm;

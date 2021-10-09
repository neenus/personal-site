export const validate = payload => {
  const { name, value } = payload;

  switch (name) {
    case "name":
      nameIsValid(value);
      break;
    case "email":
      emailIsValid(value);
      break;
    case "message":
      messageIsValid(value);
      break;
    default:
      break;
  }
  return errors;
};

let errors = {};
const nameIsValid = name => {
  if (!name) {
    return (errors = {
      ...errors,
      name: "Name is required"
    });
  } else {
    return (errors = {
      ...errors,
      name: ""
    });
  }
};

const messageIsValid = message => {
  if (!message) {
    return (errors = {
      ...errors,
      message: "Message is required"
    });
  } else {
    return (errors = { ...errors, message: "" });
  }
};

const emailIsValid = email => {
  if (!email) {
    return (errors = {
      ...errors,
      email: "Email is required"
    });
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return (errors = {
      ...errors,
      email: "Email is not valid"
    });
  } else {
    return (errors = { ...errors, email: "" });
  }
};

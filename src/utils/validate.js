export const validateOne = payload => {
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

export const validateAll = (state, errors) => {
  if (Object.values(state).every(x => x !== "")) {
    if (Object.values(errors).every(x => x === "")) {
      return true;
    }
  } else {
    return false;
  }
};

let errors = {};
const nameIsValid = name => {
  if (!name || name === "Name is required") {
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
  if (!message || message === "Message is required") {
    return (errors = {
      ...errors,
      message: "Message is required"
    });
  } else {
    return (errors = { ...errors, message: "" });
  }
};

const emailIsValid = email => {
  if (!email || email === "Email is required") {
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

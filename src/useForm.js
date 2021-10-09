import { useState } from "react";
const useForm = (callback, validate) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  const resetInitialState = () => {
    setState({
      name: "",
      email: "",
      message: ""
    });
    setErrors({
      name: "",
      email: "",
      message: ""
    });
  };

  const handleBlur = payload => {
    return setErrors(validate(payload));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setErrors(validate(e.target));
    setState(state => ({
      ...state,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    callback();
    resetInitialState();
  };

  return {
    state,
    handleBlur,
    handleChange,
    handleSubmit,
    errors
  };
};

export default useForm;

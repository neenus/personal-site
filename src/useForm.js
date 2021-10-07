import { useState } from "react";
const useForm = callback => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    callback();
  };

  return {
    state,
    handleChange,
    handleSubmit
  };
};

export default useForm;

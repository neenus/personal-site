import { useState } from "react";
import { validateOne, validateAll } from "./utils/validate";
const useForm = callback => {
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

  const [loading, setLoading] = useState(false);

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
    return setErrors(validateOne(payload));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setErrors(validateOne(e.target));
    setState(state => ({
      ...state,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    if (!validateAll(state, errors)) {
      Object.entries(state).map(async ([name, value]) => {
        setErrors(
          validateOne({
            name,
            value
          })
        );
      });
      await callback();
      setLoading(false);
    } else {
      await callback();
      setLoading(false);
      resetInitialState();
    }
  };

  return {
    state,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    loading
  };
};

export default useForm;

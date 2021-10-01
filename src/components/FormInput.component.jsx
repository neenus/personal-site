import { TextField } from "@material-ui/core";

const FormInput = ({ handleChange, ...otherProps }) => {
  return (
    <div>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        autoComplete="off"
        size="small"
        {...otherProps}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormInput;

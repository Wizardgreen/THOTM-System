import PropTypes from "prop-types";
import MaterialCheckbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default function Checkbox({ checked, label, onChange }) {
  const handleCheck = (event) => {
    onChange(event.target.checked);
  };
  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <MaterialCheckbox
            onChange={handleCheck}
            checked={checked}
            color="primary"
          />
        }
        label={label}
        labelPlacement="start"
      />
    </FormGroup>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

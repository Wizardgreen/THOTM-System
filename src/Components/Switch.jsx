import React from "react";
import PropTypes from "prop-types";
import MaterialSwitch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default function Switch({ checked, label, onChange }) {
  const handleSwitch = (event) => {
    onChange(event.target.checked);
  };
  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <MaterialSwitch
            onChange={handleSwitch}
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

Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

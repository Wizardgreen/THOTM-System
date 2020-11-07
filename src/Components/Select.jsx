import React from "react";
import PropTypes from "prop-types";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

export default function Select({
  passingClass,
  option = [],
  label,
  value,
  onChange,
  fullWidth,
}) {
  const selectChange = (event) => onChange(event.target.value);
  return (
    <TextField
      className={passingClass}
      label={label}
      value={value}
      onChange={selectChange}
      fullWidth={fullWidth}
      select
    >
      {option.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </TextField>
  );
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
};

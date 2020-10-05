import React from "react";
import PropTypes from "prop-types";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     // width: "20ch",
//   },
// }));

export default function Select({
  option = [],
  label,
  value,
  onChange,
  fullWidth,
}) {
  // const classes = useStyles();
  const selectChange = (event) => onChange(event.target.value);
  return (
    <TextField
      // className={classes.root}
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

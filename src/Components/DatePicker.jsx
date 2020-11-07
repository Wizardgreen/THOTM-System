import "date-fns";
import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function DatePicker({
  passingClass,
  value,
  label,
  onChange,
  fullWidth,
}) {
  return (
    <MuiPickersUtilsProvider className={passingClass} utils={DateFnsUtils}>
      <KeyboardDatePicker
        className={passingClass}
        margin="normal"
        disableToolbar
        format="yyyy/MM/dd"
        label={label}
        value={value}
        onChange={onChange}
        fullWidth={fullWidth}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />
    </MuiPickersUtilsProvider>
  );
}

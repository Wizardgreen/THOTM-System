import PropTypes from "prop-types";
import MaterialTextField from "@material-ui/core/TextField";
import { format } from "utils/date";

export default function DatePicker({
  passingClass,
  onChange,
  value,
  label,
  fullWidth,
}) {
  const formatDate = value ? value : format(new Date(), "yyyy-mm-dd");
  const handleCheck = (event) => {
    onChange(event.target.value);
  };

  return (
    <MaterialTextField
      className={passingClass}
      label={label}
      onChange={handleCheck}
      type="date"
      fullWidth={fullWidth}
      defaultValue={formatDate}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}

DatePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  passingClass: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
};

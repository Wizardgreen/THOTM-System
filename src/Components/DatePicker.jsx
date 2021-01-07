import PropTypes from "prop-types";
import MaterialTextField from "@material-ui/core/TextField";

export default function DatePicker({
  passingClass,
  onChange,
  value,
  label,
  fullWidth,
  key,
}) {
  const formatDate = value.replaceAll(".", "-", 2);

  return (
    <MaterialTextField
      className={passingClass}
      id={key}
      label={label}
      onChange={onChange}
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
  key: PropTypes.string.isRequired,
};

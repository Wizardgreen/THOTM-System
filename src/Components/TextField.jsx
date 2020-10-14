import React from "react";
import PropTypes from "prop-types";
import MaterialTextField from "@material-ui/core/TextField";
import useI18n from "utils/useI18n";

export default function TextField({
  label,
  value,
  onChange,
  multiline = false,
  fullWidth = false,
  variant = "standard",
  type,
}) {
  const i18nLabel = useI18n(label);
  const textChange = (event) => onChange(event.target.value);
  return (
    <MaterialTextField
      label={i18nLabel}
      value={value}
      onChange={textChange}
      fullWidth={fullWidth}
      multiline={multiline}
      variant={variant}
    />
  );
}

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool,
  multiline: PropTypes.bool,
  variant: PropTypes.oneOf(["standard", "filled", "outlined"]),
  type: PropTypes.string,
};

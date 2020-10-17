import React from "react";
import PropTypes from "prop-types";
import MaterialIcon from "@material-ui/core/Icon";

export default function Icon({
  className = "",
  color = "inherit",
  fontSize = "inherit",
  component = "span",
  children = "",
}) {
  return (
    <MaterialIcon
      className={className}
      color={color}
      fontSize={fontSize}
      component={component}
    >
      {children}
    </MaterialIcon>
  );
}

Icon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  component: PropTypes.string,
  fontSize: PropTypes.oneOf(["inherit", "default", "small", "large"]),
  color: PropTypes.oneOf([
    "inherit",
    "primary",
    "secondary",
    "action",
    "error",
    "disabled",
  ]),
};

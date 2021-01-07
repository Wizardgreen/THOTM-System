import MaterialTypography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

export default function Typography({
  variant = "body1",
  align = "inherit",
  color = "initial",
  display = "initial",
  paragraph = false,
  gutterBottom = false,
  children = "",
}) {
  return (
    <MaterialTypography
      variant={variant}
      align={align}
      color={color}
      display={display}
      paragraph={paragraph}
      gutterBottom={gutterBottom}
    >
      {children}
    </MaterialTypography>
  );
}

Typography.propTypes = {
  align: PropTypes.oneOf(["inherit", "left", "center", "right", "justify"]),
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "caption",
    "button",
    "overline",
    "srOnly",
    "inherit",
  ]),
  color: PropTypes.oneOf([
    "initial",
    "inherit",
    "primary",
    "secondary",
    "textPrimary",
    "textSecondary",
    "error",
  ]),
  display: PropTypes.oneOf(["initial", "block", "inline"]),
  paragraph: PropTypes.bool,
  gutterBottom: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

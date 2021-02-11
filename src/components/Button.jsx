import PropTypes from "prop-types";
import MaterialButton from "@material-ui/core/Button";
import useI18n from "utils/useI18n";

export default function Button({
  className = "",
  variant = "contained",
  color = "default",
  href = "",
  size = "medium",
  fullWidth = false,
  disabled = false,
  onClick,
  children = null,
}) {
  const i18nText = useI18n(typeof children === "string" ? children : null);

  return (
    <MaterialButton
      className={className}
      onClick={onClick}
      variant={variant}
      color={color}
      href={href}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      {i18nText || children}
    </MaterialButton>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(["outlined", "contained", "text"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf(["default", "inherit", "primary", "secondary"]),
  href: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.element,
  fullWidth: PropTypes.bool,
};

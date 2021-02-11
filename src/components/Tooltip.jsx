import PropTypes from "prop-types";
import MaterialTooltip from "@material-ui/core/Tooltip";
import useI18n from "utils/useI18n";
export default function Tooltip({ title, placement, children }) {
  const i18nTitle = useI18n(title);

  return (
    <MaterialTooltip title={i18nTitle} placement={placement}>
      {children}
    </MaterialTooltip>
  );
}

Tooltip.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  children: PropTypes.node.isRequired,
};

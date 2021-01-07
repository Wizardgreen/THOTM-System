import PropTypes from "prop-types";
import MaterialSpeedDialAction from "@material-ui/lab/SpeedDialAction";
import useI18n from "utils/useI18n";
import Icon from "components/Icon";

export default function SpeedDialAction({
  icon,
  tooltipTitle,
  tooltipOpen,
  onClick,
}) {
  const title = useI18n(tooltipTitle);

  return (
    <MaterialSpeedDialAction
      icon={<Icon fontSize="default">{icon}</Icon>}
      tooltipTitle={title}
      tooltipOpen={tooltipOpen}
      onClick={onClick}
    />
  );
}

SpeedDialAction.propTypes = {
  icon: PropTypes.string.isRequired,
  tooltipTitle: PropTypes.string,
  tooltipOpen: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

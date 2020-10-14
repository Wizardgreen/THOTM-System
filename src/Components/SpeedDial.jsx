import React from "react";
import PropTypes from "prop-types";
import MaterialSpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";

export default function SpeedDial({
  className = "",
  hidden = false,
  open = false,
  onOpen,
  onClose,
  actions = [],
  direction = "up",
}) {
  return (
    <MaterialSpeedDial
      ariaLabel="speed-dial"
      className={className}
      hidden={hidden}
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      icon={<SpeedDialIcon />}
      direction={direction}
    >
      {actions.map((action) => {
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={action.func}
        />;
      })}
    </MaterialSpeedDial>
  );
}

SpeedDial.propTypes = {
  className: PropTypes.string,
  hidden: PropTypes.bool.isRequired,
  open: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  direction: PropTypes.oneOf(["up", "down", "left", "right"]).isRequired,
};

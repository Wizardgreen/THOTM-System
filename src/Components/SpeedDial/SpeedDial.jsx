import React from "react";
import PropTypes from "prop-types";
import MaterialSpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import Icon from "components/Icon";

import MaterialSpeedDialAction from "@material-ui/lab/SpeedDialAction";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  speedDialIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export function SpeedDial({
  className = "",
  hidden = false,
  open = false,
  onOpen,
  onClose,
  actions = [],
  direction = "up",
}) {
  const classes = useStyle();
  return (
    <MaterialSpeedDial
      ariaLabel="speed-dial"
      className={className}
      hidden={hidden}
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      icon={
        <SpeedDialIcon
          className={classes.speedDialIcon}
          openIcon={<Icon>more_horiz</Icon>}
        />
      }
      direction={direction}
    >
      {actions.map((action) => {
        return (
          <MaterialSpeedDialAction
            icon={<Icon fontSize="default">{action.icon}</Icon>}
            tooltipTitle={action.name}
            onClick={action.func}
            tooltipOpen
            key={action.name}
          />
        );
      })}
    </MaterialSpeedDial>
  );
}

SpeedDial.propTypes = {
  className: PropTypes.string,
  hidden: PropTypes.bool,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  direction: PropTypes.oneOf(["up", "down", "left", "right"]),
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      func: PropTypes.func.isRequired,
    })
  ).isRequired,
};

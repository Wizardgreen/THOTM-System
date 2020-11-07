import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => {
  return {
    wrapper: {
      position: "relative",
      minHeight: "100%",
    },
  };
});

export default function PageWrapper({ name = "", children, className = "" }) {
  const classes = useStyle();
  return (
    <Paper
      className={`${name}-page ${className} ${classes.wrapper}`}
      elevation={3}
    >
      {children}
    </Paper>
  );
}

PageWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

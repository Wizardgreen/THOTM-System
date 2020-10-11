import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import { styled } from "@material-ui/core/styles";

const StyledPaper = styled(Paper)({
  position: "relative",
  marginBottom: "50px",
});

export default function PageWrapper({ name = "", children, className = "" }) {
  return (
    <StyledPaper className={`${name}-page ${className}`} elevation={3}>
      {children}
    </StyledPaper>
  );
}

PageWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

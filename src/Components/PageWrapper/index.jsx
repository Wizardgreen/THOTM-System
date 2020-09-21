import React from "react";
import PropType from "prop-types";
import Paper from "@material-ui/core/Paper";
import { styled } from "@material-ui/core/styles";

const StyledPaper = styled(Paper)({
  position: "relative",
  marginBottom: "50px",
});

export default function PageWrapper({ name = "", children }) {
  return (
    <StyledPaper className={`${name}-page`} elevation={3}>
      {children}
    </StyledPaper>
  );
}

PageWrapper.propTypes = {
  name: PropType.string.isRequired,
  children: PropType.element.isRequired,
};

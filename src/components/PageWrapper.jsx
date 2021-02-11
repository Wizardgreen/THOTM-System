import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

export default function PageWrapper({
  name = "",
  children,
  className = "",
  gap,
}) {
  const useStyle = makeStyles(() => {
    return {
      wrapper: {
        position: "relative",
        marginBottom: "60px",
      },
      gap: {
        padding: `${gap}px`,
      },
    };
  });
  const classes = useStyle();
  const combineClass = `${name}-page ${className} ${classes.wrapper} ${
    gap ? classes.gap : ""
  }`;
  return (
    <Paper className={combineClass} elevation={3}>
      {children}
    </Paper>
  );
}

PageWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  gap: PropTypes.number,
};

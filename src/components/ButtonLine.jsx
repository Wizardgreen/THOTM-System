import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => {
  return {
    btnLine: {
      display: "flex",
      justifyContent: "flex-end",
      "&> button": {
        marginLeft: theme.spacing(2),
      },
    },
  };
});

export default function ButtonLine({ children }) {
  const classes = useStyle();
  return <div className={classes.btnLine}>{children}</div>;
}

ButtonLine.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

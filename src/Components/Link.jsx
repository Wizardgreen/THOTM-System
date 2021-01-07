import PropTypes from "prop-types";
import MaterialLink from "@material-ui/core/Link";
import useI18n from "utils/useI18n";
import { useHistory } from "react-router-dom";

export default function Link({ path, text }) {
  const history = useHistory();
  const translateText = useI18n(text);
  const handleClick = (event) => {
    event.preventDefault();
    history.push(path);
  };
  return (
    <MaterialLink href="#" onClick={handleClick}>
      {translateText}
    </MaterialLink>
  );
}

Link.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

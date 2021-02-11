import PropTypes from "prop-types";
import MaterialLink from "@material-ui/core/Link";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Link({ path, text }) {
  const history = useHistory();
  const { t } = useTranslation();
  const handleClick = (event) => {
    event.preventDefault();
    history.push(path);
  };
  return (
    <MaterialLink href="#" onClick={handleClick}>
      {t(text)}
    </MaterialLink>
  );
}

Link.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

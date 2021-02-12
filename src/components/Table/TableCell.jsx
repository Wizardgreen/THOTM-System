import PropTypes from "prop-types";
import MaterialTableCell from "@material-ui/core/TableCell";
import { useTranslation } from "react-i18next";

export default function TableCell({ align, style, children }) {
  const { t } = useTranslation();

  return (
    <MaterialTableCell align={align} style={style}>
      {typeof children === "string" ? t(children) : children}
    </MaterialTableCell>
  );
}

TableCell.propTypes = {
  align: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

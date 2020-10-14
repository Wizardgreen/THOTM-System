import React from "react";
import PropTypes from "prop-types";
import MaterialTableCell from "@material-ui/core/TableCell";
import useI18n from "utils/useI18n";

export default function TableCell({ align, style, children }) {
  const i18nText = useI18n(typeof children === "string" ? children : null);
  return (
    <MaterialTableCell align={align} style={style}>
      {i18nText || children}
    </MaterialTableCell>
  );
}

TableCell.propTypes = {
  align: PropTypes.string,
  style: PropTypes.object,
};

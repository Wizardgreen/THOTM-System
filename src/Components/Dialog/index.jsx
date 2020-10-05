import React from "react";
import PropTypes from "prop-types";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import MaterialDialog from "@material-ui/core/Dialog";
import useI18n from "utils/useI18n";

export default function Dialog({
  title = "",
  text = "",
  onClose = () => {},
  open = false,
  fullScreen = false,
  scroll = "paper",
  children = null,
}) {
  const i18nTitle = useI18n(title);
  return (
    <MaterialDialog
      open={open}
      onClose={onClose}
      scroll={scroll}
      fullScreen={fullScreen}
    >
      {title && <DialogTitle>{i18nTitle}</DialogTitle>}
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
        {children}
      </DialogContent>
      <DialogActions></DialogActions>
    </MaterialDialog>
  );
}

Dialog.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  text: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  fullScreen: PropTypes.bool,
  maxWidth: PropTypes.oneOf([false, "xs", "sm", "md", "lg", "xl"]),
  scroll: PropTypes.oneOf(["paper, body"]),
  children: PropTypes.element.isRequired,
};

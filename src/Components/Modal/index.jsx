import React from "react";
import MaterialModal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function Modal({ children, open, onClose }) {
  const classes = useStyles();
  return (
    <MaterialModal className={classes.paper} open={open} onClose={onClose}>
      <div>{children}</div>
    </MaterialModal>
  );
}

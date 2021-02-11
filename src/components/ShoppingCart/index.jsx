import { useState } from "react";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Modal from "components/Modal";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CartList from "./CartList";

const useStyles = makeStyles({
  buttonWrapper: {
    position: "fixed",
    right: "3vw",
  },
});

export default function ShoppingCart() {
  const [isCartShow, setShow] = useState(false);
  const classes = useStyles();
  const itemCount = useSelector((state) => state.shoppingCart.itemCount);
  return itemCount ? (
    <React.Fragment>
      <IconButton
        className={classes.buttonWrapper}
        onClick={() => setShow(true)}
        aria-label="cart"
      >
        <Badge badgeContent={itemCount} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Modal open={isCartShow} onClose={() => setShow(false)}>
        <CartList />
      </Modal>
    </React.Fragment>
  ) : null;
}

import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header(props) {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Button onClick={handleClick}>Menu</Button>
        <Menu
          id="header--menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            {t("item.title")}
            {/* <Link to="/stock">{t("item.title")}</Link> */}
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/member">{t("member.member")}</Link>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(Header);

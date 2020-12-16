import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import Logo from "../../assets/commerce.png";
import useStyles from "./styles";

const Navbar = ({ cart }) => {
  const classes = useStyles();
  if (!cart.line_items) return "Loading....";
  return (
    <>
      <AppBar position="fixed" className="classes.appBar" color="inherit">
        <Toolbar>
          <Link style={{ color: "black", textDecoration: "none" }} to="/">
            <Typography variant="h6" className={classes.title} color="inherit">
              <img
                src={Logo}
                alt="Commerce.js"
                height="25px"
                className={classes.image}
              />
              Commerce.js
            </Typography>
          </Link>
          <div className={classes.grow} />
          <div className={classes.button}>
            <Link style={{ color: "black" }} to="/cart">
              <IconButton aria-label="Show Cart items" color="inherit">
                <Badge badgeContent={cart.line_items.length} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

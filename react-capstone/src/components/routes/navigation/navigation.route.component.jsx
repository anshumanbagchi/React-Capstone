import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";

import { Outlet, Link } from "react-router-dom";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="nav">
        <Link className="logo-container" to="/">
          <CrwnLogo className="page-logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
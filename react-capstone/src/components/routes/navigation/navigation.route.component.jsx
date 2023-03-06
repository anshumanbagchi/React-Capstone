import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";

import { Outlet, Link } from "react-router-dom";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import { UserContext } from "../../../contexts/user.context";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="nav">
        <Link className="logo-container" to="/">
          <CrwnLogo className="page-logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

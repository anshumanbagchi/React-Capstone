import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";

import { Outlet, Link } from "react-router-dom";
import { signOutUser } from "../../../utils/firebase/firebase.utils";

import { CartContext } from "../../../contexts/cart.context";

import CartIcon from "../../cart-icon/cart-icon.component";

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from "./navigation.styles";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

import { selectCurrentUser } from "../../../store/user/user.selector";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="page-logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

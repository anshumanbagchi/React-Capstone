import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";

import { Outlet } from "react-router-dom";
import { signOutStart } from "../../../store/user/user.actions";

import { selectIsCartOpen } from "../../../store/cart/cart.selector";

import CartIcon from "../../cart-icon/cart-icon.component";

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from "./navigation.styles";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

import { selectCurrentUser } from "../../../store/user/user.selector";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

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

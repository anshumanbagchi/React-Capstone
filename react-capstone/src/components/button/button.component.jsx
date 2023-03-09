import { Fragment } from "react";
import { BaseButton, GoogleSignInButton, InvertedButton } from "./button.styles";

export const BUTTON_TYPES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};
export const ButtonMap = {
  [BUTTON_TYPES.base]: BaseButton,
  [BUTTON_TYPES.google]: GoogleSignInButton,
  [BUTTON_TYPES.inverted]: InvertedButton,
};

const getButton = (buttonType = BUTTON_TYPES.base) => {
  console.log(buttonType);
  const ButtonMap = {
    [BUTTON_TYPES.base]: BaseButton,
    [BUTTON_TYPES.google]: GoogleSignInButton,
    [BUTTON_TYPES.inverted]: InvertedButton,
  };
  // console.log(ButtonMap[buttonType]);
  return ButtonMap[buttonType];
};

const Button = ({ children, buttonType, ...otherProps }) => {
  // const CustomButton = getButton(buttonType);
  // const CustomButton2 = ButtonMap[buttonType];
  // console.log(CustomButton);
  // return <CustomButton {...otherProps}>{children}</CustomButton>;
  return (
    <Fragment>
      <BaseButton {...otherProps}>{children}</BaseButton>
    </Fragment>
  );
};

export default Button;

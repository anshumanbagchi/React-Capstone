import { useState } from "react";
import { useDispatch } from "react-redux";

import { googleSignInStart, emailSignInStart } from "../../store/user/user.actions";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { SignUpContainer } from "./sign-in-form.styles";

import { BUTTON_TYPES } from "../button/button.component";
const defaultformFields = {
  email: "",
  pwd: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultformFields);
  const { email, pwd } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultformFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, pwd));
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect email or password");
          break;
        case "auth/user-not-found":
          alert("User email not found");
          break;
        default:
          console.log(error);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };
  return (
    <SignUpContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Email" required type="email" name="email" value={email} onChange={handleChange} />
        <FormInput label="Password" required type="password" name="pwd" value={pwd} onChange={handleChange} />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType={BUTTON_TYPES.google}>
            Google Sign In
          </Button>
        </div>
      </form>
    </SignUpContainer>
  );
};

export default SignInForm;

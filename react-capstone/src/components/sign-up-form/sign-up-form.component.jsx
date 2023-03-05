import { useState, useContext } from "react";
import { createAuthUserWithEmailAndPwd, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { UserContext } from "../../contexts/user.context";
import "./sign-up-form.styles.scss";

const defaultformFields = {
  displayName: "",
  email: "",
  pwd: "",
  confirmPwd: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultformFields);
  const { displayName, email, pwd, confirmPwd } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultformFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (pwd !== confirmPwd) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPwd(email, pwd);
      setCurrentUser(user);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user. Email already in use!");
      } else {
        console.log("Error in user creation", error);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Dont have an account?</h2>
      <span>Sign up with your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Display Name" required type="text" name="displayName" value={displayName} onChange={handleChange} />
        <FormInput label="Email" required type="email" name="email" value={email} onChange={handleChange} />
        <FormInput label="Password" required type="password" name="pwd" value={pwd} onChange={handleChange} />
        <FormInput label="Confirm Password" required type="password" name="confirmPwd" value={confirmPwd} onChange={handleChange} />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;

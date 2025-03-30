import React, { useState } from "react";
import {
  createUserDocumentFromAuth,
  createUserDocumentFromEmailandPassword,
} from "../../utils/firebase/firebase.utils";
import Button from "../Button";
import FormInput from "../input-component/FormInput";
const defaultformfield = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formfields, setformfields] = useState(defaultformfield);
  const { displayName, email, password, confirmPassword } = formfields;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setformfields({ ...formfields, [name]: value });
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    if (password != confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      const { user } = await createUserDocumentFromEmailandPassword(
        email,
        password
      );
      createUserDocumentFromAuth(user, { displayName });
      setformfields(defaultformfield);
    } catch (error) {
      if (error.code == "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("error creating the user", error.message);
      }
    }
  };

  return (
    <div className="flex flex-col w-[380px]">
      <h1 className="my-[7px] font-semibold text-3xl">
        I Don't have an account?
      </h1>
      <span className="text-slate-400 text-sm">
        Sign up with your email and password
      </span>
      <form onSubmit={handleSignup}>
        <FormInput
          label="Display Name"
          name="displayName"
          value={displayName}
          type="text"
          required
          onChange={handleChange}
        />

        <FormInput
          label="Email"
          name="email"
          value={email}
          type="email"
          required
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          name="password"
          value={password}
          type="password"
          required
          onChange={handleChange}
        />

        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          type="password"
          required
          onChange={handleChange}
        />
        <div className="flex justify-center">
          <Button type="submit" buttontype="default">
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;

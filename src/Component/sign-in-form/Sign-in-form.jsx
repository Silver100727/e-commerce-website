import React, { useContext, useState } from "react";
import {
  signInUserWithEmailandPassword,
  signinwithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Button from "../Button";
import FormInput from "../input-component/FormInput";

const defaultformfield = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formfields, setformfields] = useState(defaultformfield);
  const { email, password } = formfields;

  const resetFormFields = () => {
    setformfields(defaultformfield);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformfields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      await signInUserWithEmailandPassword(email, password);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        alert("Invalid Credential");
      } else if (error.code === "auth/wrong-password") {
        alert("incorrect password for email");
      } else if (error.code === "auth/user-not-found") {
        alert("Invalid Email");
      } else {
        console.log("Error creating the user:", error.message);
      }
    }
  };

  const logGoogleUser = async (event) => {
    event.preventDefault(); // Prevent accidental form submission
    try {
      await signinwithGooglePopup();
    } catch (error) {
      console.log("Error signing in with Google:", error.message);
    }
  };

  return (
    <div className="flex flex-col w-[380px]">
      <h1 className="my-[7px] font-semibold text-3xl">
        Already have an account?
      </h1>
      <span className="text-slate-400 text-sm">
        Sign up with your email and password
      </span>

      <form onSubmit={handleSignIn}>
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

        <div className="flex justify-around mt-5">
          <Button type="submit" buttontype="default">
            Sign In
          </Button>
          <Button type="button" buttontype="google" onClick={logGoogleUser}>
            <svg
              className="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 19"
            >
              <path
                fillRule="evenodd"
                d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                clipRule="evenodd"
              />
            </svg>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

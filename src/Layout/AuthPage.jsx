import React from "react";
import SignUpForm from "../Component/sign-up-form/Sign-up-form";
import SignInForm from "../Component/sign-in-form/Sign-in-form";

const AuthPage = () => {
  return (
    <div className="flex justify-center mt-20 space-x-64">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default AuthPage;

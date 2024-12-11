import LoginFormSection from "../../../containers/auth-page/login-page/form-section";
import React, { FC } from "react";

interface LoginPageProps { }

const LoginPage: FC<LoginPageProps> = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <LoginFormSection />
    </div>
  );
};

export default LoginPage;

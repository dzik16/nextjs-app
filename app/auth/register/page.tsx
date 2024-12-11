
import RegisterFormSection from "../../../containers/auth-page/register-page/form-section";
import React, { FC } from "react";

interface RegisterPageProps { }

const RegisterPage: FC<RegisterPageProps> = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <RegisterFormSection />
    </div>
  );
};

export default RegisterPage;

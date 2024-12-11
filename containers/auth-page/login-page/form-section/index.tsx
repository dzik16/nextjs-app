import LoginForm from "../../../../components/Forms/LoginForm";
import Link from "next/link";
import React, { FC } from "react";

interface LoginFormSectionProps { }

const LoginFormSection: FC<LoginFormSectionProps> = () => {
  return (
    <section className="w-full max-w-lg flex justify-center">
      <div className="flex items-center justify-center h-screen">
        <div className="w-96 max-w-sm bg-white p-8 rounded shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-6 text-black">Login</h1>
          <LoginForm />
          <div className="flex justify-center mt-2">
            <p className="text-gray-700">
              Dont have an account?{" "}
              <Link
                className="text-primaryColor font-medium"
                href={"/auth/register"}
              >
                <span className="text-blue-900 hover:text-green-600">
                  Register!
                </span>
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default LoginFormSection;

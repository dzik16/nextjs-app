import RegisterForm from "../../../../components/Forms/RegisterForm";
import Link from "next/link";
import React, { FC } from "react";

interface RegisterFormSectionProps { }

const RegisterFormSection: FC<RegisterFormSectionProps> = () => {
  return (
    <section className="w-full max-w-lg flex justify-center">
      <div className="flex items-center justify-center h-screen">
        <div className="w-96 max-w-sm bg-white p-8 rounded shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-6 text-black">Register</h1>
          <RegisterForm />
          <div className="flex justify-center mt-2">
            <p className="text-gray-700">
              Already have an account?{" "}
              <Link
                className="text-primaryColor font-medium"
                href={"/auth/login"}
              >
                <span className="text-blue-900 hover:text-green-600">
                  Login
                </span>
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default RegisterFormSection;

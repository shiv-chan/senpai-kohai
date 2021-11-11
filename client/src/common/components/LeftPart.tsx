import React from "react";
import { useLocation } from "react-router-dom";
import terms from "../../assets/terms.svg";
import shared_workspace from "../../assets/shared_workspace.svg";
import password from "../../assets/password.svg";

const LeftPart: React.FC = () => {
  const location = useLocation();
  return (
    <section className="flex flex-col justify-center items-center w-1/2 h-full bg-white">
      <div className="h-9/12">
        <p className="flex-initial text-5xl mb-16">Let's Get Started</p>
        {location.pathname === "/signup" && (
          <img src={terms} alt="terms" className="w-80 mb-16" />
        )}
        {location.pathname === "/login" && (
          <img src={shared_workspace} alt="terms" className="w-80 mb-16" />
        )}
        {location.pathname === "/forgotpassword" && (
          <img src={password} alt="terms" className="w-80 mb-16" />
        )}
        <p className="flex-initial text-2xl">Find your guide, Support youngs</p>
      </div>
    </section>
  );
};

export default LeftPart;

import React from "react";
import { useLocation } from "react-router-dom";
// import { ReactComponent as BlobR } from "./assets/BlobR.svg";

const LeftPart: React.FC = () => {
  const location = useLocation();
  return (
    <section className="flex flex-col justify-center items-center w-1/2 h-full bg-white">
      <p className="flex-initial text-6xl">Let's Get Started</p>
      <div className="flex-initial">image here</div>
      <p className="flex-initial text-4xl">Find your guide, Support youngs</p>
    </section>
  );
};

export default LeftPart;

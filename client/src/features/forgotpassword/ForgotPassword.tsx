import React from "react";
import { Link } from "react-router-dom";
import LeftPart from "../../common/components/LeftPart";

const ForgotPassword = () => {
  return (
    <div className="flex w-screen h-screen bg-primary_bg_color text-primary_title_color">
      <LeftPart />
      <section className="flex justify-center my-auto h-9/12 w-1/2">
        <div className="flex flex-col justify-end h-full w-7/12">
          <p className="flex-initial text-4xl mb-2">Forgot password?</p>
          <form action="" className="flex flex-col">
            <label htmlFor="email" className="text-lg mb-2">
              Email Address
            </label>
            <input type="email" className="mb-8 h-10 text-xl" />
            <button className="button">Send</button>
            <Link to="/login" className="underline">
              Back to login
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;

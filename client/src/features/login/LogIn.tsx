import React from "react";
import { Link } from "react-router-dom";
import LeftPart from "../../common/components/LeftPart";

const LogIn = () => {
  return (
    <div className="flex w-screen h-screen bg-primary_bg_color text-primary_title_color">
      <LeftPart />
      <section className="flex justify-center my-auto h-9/12 w-1/2">
        <div className="flex flex-col justify-end h-full w-7/12">
          <p className="flex-initial text-4xl mb-2">Login</p>
          <p className="flex-initial mb-12">
            Not registered yet?{" "}
            <Link to="/signup" className="underline">
              Create an Account
            </Link>
          </p>
          <form action="" className="flex flex-col">
            <label htmlFor="email" className="text-lg mb-2">
              Email Address
            </label>
            <input type="email" className="mb-8 h-10 text-xl" />
            <label htmlFor="password" className="text-lg mb-2">
              Password
            </label>
            <input type="password" className="h-10 mb-12" />
            <input type="checkbox" className="p-10" />
            <label htmlFor="">Remember me</label>
            <Link to="/forgotpassword" className="underline">
              Forgot password?
            </Link>
            <button className="button">Login</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LogIn;

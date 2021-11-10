import React from "react";
import { Link } from "react-router-dom";
import LeftPart from "../../common/components/LeftPart";

const SignUp = () => {
  return (
    <div className="flex w-screen h-screen bg-primary_bg_color text-primary_title_color">
      <LeftPart />
      <section className="flex flex-col justify-center m-auto h-full">
        <p className="flex-initial text-3xl">Create an Account</p>
        <p className="flex-initial">
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <form action="">
          <label htmlFor="email">Email Address</label>
          <input type="email" />
        </form>
        <form action="">
          <label htmlFor="password">Email Address</label>
          <input type="password" />
        </form>
      </section>
    </div>
  );
};

export default SignUp;

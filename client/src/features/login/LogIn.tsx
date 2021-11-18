import React, { useState } from "react";
import { Link } from "react-router-dom";
import LeftPart from "../../common/components/LeftPart";
import ISingUpLogIn from "../../interfaces/signUpLogIn";
import axios from "axios";
import { MdMail } from "react-icons/md";
import { FaUnlockAlt } from "react-icons/fa";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

const LogIn = () => {
  const [inputs, setInputs] = useState<ISingUpLogIn>({
    email: "",
    password: "",
  });
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const loginWithEmailAndPassword = async (
    e: React.FormEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    try {
      console.log("clicked");
      await axios.post("http://localhost:5000/login", inputs);
      console.log("logged in successfully!");
      setInputs({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="flex w-screen h-screen bg-primary_bg_color text-primary_title_color">
      <LeftPart />
      <section className="flex justify-center my-auto h-9/12 w-1/2 tablet_l_max:w-full ">
        <div className="flex flex-col justify-end h-full w-7/12 mobile_xl_max:w-9/12">
          <p className="flex-initial text-4xl mb-2 mobile_l_max:text-3xl">
            Login
          </p>
          <p className="flex-initial mb-12 mobile_l_max:text-sm">
            Not registered yet?{" "}
            <Link to="/signup" className="underline font-bold">
              Create an Account
            </Link>
          </p>
          <form action="" className="flex flex-col w-full">
            <label htmlFor="email" className="text-lg mb-2">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                className="mb-8 h-10 text-xl w-full pl-8"
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
                value={inputs.email}
              />
              <MdMail className="absolute top-2.5 left-2 text-xl text-gray-300" />
            </div>
            <label htmlFor="password" className="text-lg mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={isVisible ? "text" : "password"}
                className="h-10 mb-12 w-full px-8"
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
                value={inputs.password}
              />
              <FaUnlockAlt className="absolute top-2.5 left-2 text-xl text-gray-300" />
              <AiFillEyeInvisible
                className={[
                  "cursor-pointer",
                  "absolute",
                  "top-2",
                  "left-custom_left",
                  "mobile_l_max:left-mb_custom_left",
                  "text-2xl",
                  "text-gray-300",
                  isVisible ? "hidden" : null,
                ].join(" ")}
                onClick={() => setIsVisible((prevState) => !prevState)}
              />
              <AiFillEye
                className={[
                  "cursor-pointer",
                  "absolute",
                  "top-2",
                  "left-custom_left",
                  "mobile_l_max:left-mb_custom_left",
                  "text-2xl",
                  "text-gray-300",
                  isVisible ? null : "hidden",
                ].join(" ")}
                onClick={() => setIsVisible((prevState) => !prevState)}
              />
            </div>
            <div className="flex justify-between">
              <div className="mb-8">
                <input type="checkbox" className="mr-1" />
                <label htmlFor="">Remember me</label>
              </div>
              <Link to="/forgotpassword" className="underline font-bold">
                Forgot password?
              </Link>
            </div>
            <button
              className="button"
              onClick={(e) => loginWithEmailAndPassword(e)}
            >
              Login
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default LogIn;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LeftPart from '../../common/components/LeftPart';
import { MdMail } from 'react-icons/md';
import ForgotPasswordMessage from './ForgotPasswordMessage';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>('');
  const [isEmailsent, setIsEmailsent] = useState<boolean>(false);

  const sendResetPwEmail = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = { email };
    try {
      console.log('clicked');
      const response = await axios.post(
        'http://localhost:5000/forgotpassword',
        data
      );
      console.log(response.data.message);
      setIsEmailsent(true);
      // setEmail("");
    } catch (error) {
      console.log(`this is error ${error}`);
    }
  };
  return (
    <>
      {!isEmailsent ? (
        <div className="flex w-screen h-screen bg-primary_bg_color text-primary_title_color">
          <LeftPart />
          <section className="flex justify-center my-auto h-9/12 w-1/2 tablet_l_max:w-full">
            <div className="flex flex-col justify-center h-full w-7/12 mobile_xl_max:w-9/12">
              <h2 className="flex-initial text-4xl mb-12 mobile_l_max:text-3xl">
                Forgot password?
              </h2>
              <form action="" className="flex flex-col w-full">
                <label htmlFor="email" className="text-lg mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    className="mb-8 h-10 text-xl w-full pl-8"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <MdMail className="absolute top-2.5 left-2 text-xl text-gray-300" />
                </div>
                <Link to="/forgotpassword/message">
                  <button className="button w-full" onClick={sendResetPwEmail}>
                    Send
                  </button>
                </Link>
                <Link
                  to="/login"
                  className="flex-initial underline m-auto mt-10"
                >
                  Back to login
                </Link>
              </form>
            </div>
          </section>
        </div>
      ) : (
        <ForgotPasswordMessage />
      )}
    </>
  );
};

export default ForgotPassword;

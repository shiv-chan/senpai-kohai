import React from 'react';
import LeftPart from '../../common/components/LeftPart';
import { Link } from 'react-router-dom';

const ForgotPasswordMessage = () => {
  return (
    <main className="flex w-screen h-screen bg-primary_bg_color text-primary_title_color">
      <LeftPart />
      <section className="flex justify-center my-auto h-9/12 w-1/2 tablet_l_max:w-full">
        <div className="flex flex-col justify-center text-center h-full w-10/12 mobile_xl_max:w-9/12">
          <p className="flex-initial text-2xl mb-2 mobile_l_max:text-xl">
            Please check your email and create a new password.
          </p>
          <p className="flex-initial text-2xl mb-10 mobile_l_max:text-xl">
            Thank you!
          </p>
          <Link to="/login" className="flex-initial underline m-auto">
            Back to login
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ForgotPasswordMessage;

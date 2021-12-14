import React from 'react';

import LeftPart from '../../common/components/LeftPart';
import { Link } from 'react-router-dom';

const ForgotPasswordResetSuccess: React.FC = () => {
  return (
    <section className="flex justify-center my-auto h-9/12 w-1/2 tablet_l_max:w-full">
      <div className="flex flex-col justify-center text-center h-full w-10/12 mobile_xl_max:w-9/12">
        <p className="flex-initial text-2xl mb-10 mobile_l_max:text-xl">
          New password set successfully!
        </p>
        <Link to="/login" className="flex-initial underline m-auto">
          Back to login
        </Link>
      </div>
    </section>
  );
};

export default ForgotPasswordResetSuccess;

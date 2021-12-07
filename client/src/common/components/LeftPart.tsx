import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LeftPart: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    return;
  }, [location.pathname]);

  return (
    <section className="flex flex-col justify-center items-center w-1/2 h-full bg-white  tablet_l_max:hidden">
      <div className="h-9/12">
        {location.pathname.includes('/forgotpassword') ? (
          <p className="flex-initial text-5xl mb-16">Come Back Now!</p>
        ) : (
          <p className="flex-initial text-5xl mb-16">Let's Get Started</p>
        )}
        {location.pathname === '/signup' && (
          <img src="/assets/terms.svg" alt="terms" className="w-80 mb-16" />
        )}
        {location.pathname === '/login' && (
          <img
            src="/assets/shared_workspace.svg"
            alt="shared_workspace"
            className="w-80 mb-16"
          />
        )}
        {location.pathname.includes('/forgotpassword') && (
          <img
            src="/assets/password.svg"
            alt="password"
            className="w-80 mb-16"
          />
        )}
        <p className="flex-initial text-2xl">Find your guide, Support youngs</p>
      </div>
    </section>
  );
};

export default LeftPart;

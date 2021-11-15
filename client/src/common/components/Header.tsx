import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  // test tailwind
  return (
    <>
      {location.pathname === "/signup" ||
      location.pathname === "/login" ||
      location.pathname === "/forgotpassword" ? null : (
        <div className="bg-header_color text-white h-headerHeight">
          This is Header
        </div>
      )}
    </>
  );
};

export default Header;

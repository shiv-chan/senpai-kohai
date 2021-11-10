import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  // test tailwind
  return (
    <>
      {location.pathname === "/signup" ||
      location.pathname === "/login " ? null : (
        <div className="bg-header_color text-white">This is Header</div>
      )}
    </>
  );
};

export default Header;

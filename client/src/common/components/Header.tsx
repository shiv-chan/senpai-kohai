import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false); // TODO: replace with a global state later
  const location = useLocation();

  const menuStyle = () => {
    return isOpen
      ? { height: '30vh', transform: 'translateY(0%)' }
      : { height: '30vh', transform: 'translateY(-120%)' };
  };

  const headerItems = () => {
    return isLogin ? (
      <div className="flex items-center gap-3">
        <button className="border-2 border-solid	border-primary_bg_color rounded-full px-3 text-sm">
          Log out
        </button>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={20}
          distance="lg"
          rounded
        />
      </div>
    ) : (
      <div className="flex items-center gap-3">
        <Link to="/login">
          <button className="border-2 border-solid	border-primary_bg_color rounded-full px-3 text-sm">
            Log in
          </button>
        </Link>
        <Link to="/signup">
          <button className="font-bold text-header_color border-2 border-solid	border-primary_bg_color bg-primary_bg_color rounded-full px-3 text-sm">
            Sign up
          </button>
        </Link>
      </div>
    );
  };

  return (
    <>
      <header className="bg-header_color w-screen h-mobileHeaderHeight md:h-laptopHeaderHeight fixed top-0 z-30 menu">
        <div className="flex items-center	font-sans text-primary_bg_color h-full mx-4">
          <div className="flex-grow">
            <Link to="/" className="italic font-bold">
              Senpai-Kohai
            </Link>
          </div>
          {headerItems()}
        </div>
      </header>
      <div
        className="w-screen bg-tertiary_bg_color fixed top-mobileHeaderHeight flex justify-center items-center transition duration-500 ease-linear transform menu z-20"
        style={menuStyle()}
      >
        <ul className="text-header_color font-sans font-bold flex flex-col gap-y-4 text-xl">
          <Link to="/board" onClick={() => setOpen(false)}>
            <li>Browsing Peeps</li>
          </Link>
          <Link to="/profile/senpai" onClick={() => setOpen(false)}>
            <li>My Profile as Senpai</li>
          </Link>
          <Link to="/profile/kohai" onClick={() => setOpen(false)}>
            <li>My Profile as Kohai</li>
          </Link>
        </ul>
      </div>
      <div
        className={[
          'z-10',
          'w-full',
          'h-screen',
          'backdrop-filter',
          'backdrop-blur-sm',
          'fixed',
          isOpen ? null : 'hidden',
        ].join(' ')}
        onClick={() => setOpen(false)}
      ></div>
    </>
  );
};

export default Header;

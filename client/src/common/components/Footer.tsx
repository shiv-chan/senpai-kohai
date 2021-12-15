import React from 'react';

const Footer = () => (
  <footer className="flex justify-center items-center bg-header_color h-mobileHeaderHeight md:h-laptopHeaderHeight">
    <p className="text-primary_bg_color text-center text-xs">
      Copyright ©2021.{' '}
      <a
        href="https://github.com/shiv-chan/senpai-kohai"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold underline"
      >
        Senpai Kohai
      </a>{' '}
      All Rights Reserved.
    </p>
  </footer>
);

export default Footer;

import React from 'react';
import img from '../../assets/imgs/header.webp';
import './Header.css';

const Header = () => {
  return (
    <header className="w-screen h-[480px] mb-8 max-[510px]:mb-[-12rem]">
      <img src={img} alt="Rick-and-Morty" className="img"></img>
    </header>
  );
};

export default Header;

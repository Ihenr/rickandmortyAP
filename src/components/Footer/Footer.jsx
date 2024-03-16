import React from 'react';
import './Footer.css';
import 'boxicons';

const Footer = () => {
  return (
    <footer className=" w-full flex flex-col justify-center items-center py-5">
      <div className=" w-2/4 flex justify-between">
        <a
          href="https://www.linkedin.com/in/henry-morocho-558b68134/"
          target="_blank"
          rel="noreferrer"
          className=" rounded-full hover:scale-125 hover:bg-[#263a3b] flex justify-center items-center p-2"
        >
          <box-icon
            name="linkedin-square"
            type="logo"
            color="white"
            size="md"
            animation="tada"
          ></box-icon>
        </a>
        <a
          href="https://github.com/Ihenr"
          target="_blank"
          rel="noreferrer"
          className=" rounded-full hover:scale-125 hover:bg-[#263a3b]  flex justify-center items-center p-2"
        >
          <box-icon
            type="logo"
            name="github"
            color="white"
            size="md"
            animation="tada"
          ></box-icon>
        </a>
        <a
          href="https://www.instagram.com/morocho.henry/"
          target="_blank"
          rel="noreferrer"
          className=" rounded-full hover:scale-125 hover:bg-[#263a3b]  flex justify-center items-center p-2"
        >
          <box-icon
            name="instagram-alt"
            type="logo"
            color="white"
            size="md"
            animation="tada"
          ></box-icon>
        </a>
      </div>
      <h4 className=" uppercase  mt-3 tracking-widest font-bold">© Henry Morocho 2023</h4>
    </footer>
  );
};

export default Footer;

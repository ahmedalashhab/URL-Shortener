import React from "react";
import logo from "../assets/images/logo.svg";

const Nav = () => {
  return (
    <div className="flex w-3/4 mt-12 mx-auto">
      <img
        alt=" shortly logo"
        src={logo}
        className="self-center cursor-pointer"
      />
      <div className="mr-auto ml-8 my-auto ">
        <span className="ml-6 poppins-700 fourth-color hover:text-zinc-700 cursor-pointer">
          Features
        </span>
        <span className="ml-6 poppins-700 fourth-color hover:text-zinc-700 cursor-pointer">
          Pricing
        </span>
        <span className="ml-6 poppins-700 fourth-color hover:text-zinc-700 cursor-pointer">
          Resources
        </span>
      </div>
      <div className="ml-auto">
        <span
          className="mr-12 poppins-700 fourth-color hover:text-zinc-700
         cursor-pointer"
        >
          Login
        </span>
        <button className="custom-button py-2 px-6 rounded-full poppins-700 text-white hover:bg-teal-300">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Nav;

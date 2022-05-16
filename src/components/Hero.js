import React from "react";
import Nav from "./Nav";
import lady from "../assets/images/illustration-working.svg";

const Hero = () => {
  return (
    <section className="flex flex-col">
      <Nav />
      <div className="flex mt-16 items-center mx-auto w-3/4">
        <div className="flex-col first-color">
          <h1 className="text-7xl poppins-700 first-color mx-auto leading-tight ">
            More than just shorter links
          </h1>
          <h3 className="text-xl pr-3 mt-2 mx-auto fourth-color poppins-500 leading-loose">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </h3>
          <button className="custom-button hover:bg-teal-200 rounded-full text-white poppins-700 py-3 px-9 text-xl mt-8">
            Get Started
          </button>
        </div>
        <img
          className="-mr-48"
          alt="seated employee working on computer"
          src={lady}
        />
      </div>
    </section>
  );
};

export default Hero;

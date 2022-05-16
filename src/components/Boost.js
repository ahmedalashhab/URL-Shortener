import React from "react";

const Boost = () => {
  return (
    <section className="flex h-64 bg-boost w-full justify-center">
      <div className="flex flex-col justify-center gap-10 ">
        <h3 className="poppins-700 text-white text-4xl">
          Boost your links today
        </h3>
        <button className="custom-button mx-auto px-9 py-3 rounded-full poppins-700 text-white text-xl hover:bg-teal-200">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Boost;

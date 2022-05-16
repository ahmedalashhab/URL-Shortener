import React from "react";

import brand from "../assets/images/icon-brand-recognition.svg";
import detailed from "../assets/images/icon-detailed-records.svg";
import fully from "../assets/images/icon-fully-customizable.svg";

const Statistics = () => {
  return (
    <div className=" statistics">
      <div className=" flex flex-col mx-auto mt-36 w-3/4">
        <section className="search-bar rounded-xl -translate-y-20">
          <form className="flex justify-center py-12 pl-12">
            <input
              type="url"
              className=" rounded-lg poppins-500 text-lg w-3/4 h-16 px-6 my-auto"
              placeholder="Shorten a link here..."
            />
            <button className="custom-button poppins-700 rounded-2xl mx-auto px-9 py-5 text-white text-xl hover:bg-teal-200  ">
              Shorten it!
            </button>
          </form>
        </section>
        <section className=" flex flex-col gap-4">
          <h3 className="mx-auto first-color poppins-700 text-4xl">
            Advanced Statistics
          </h3>
          <span className="mx-auto fourth-color poppins-500 text-md w-5/12 leading-7 text-center">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </span>
        </section>
        <div className="flex mt-20 gap-12 mb-48 relative">
          <div className="flex-col bg-white rounded-lg z-10">
            <div className="icon p-5 rounded-full w-20 ml-8 -translate-y-12">
              <img alt="graph icon" src={brand} />
            </div>
            <div className="flex flex-col gap-4 px-8 ">
              <span className="poppins-700 first-color text-xl ">
                Brand Recognition
              </span>
              <span className="fourth-color poppins-500 text-md pb-8">
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </span>
            </div>
          </div>
          <div className="flex-col bg-white rounded-lg translate-y-12 z-10">
            <div className="icon p-5 rounded-full w-20 ml-8 -translate-y-12">
              <img alt="speedometer" src={detailed} />
            </div>
            <div className="flex flex-col gap-4 px-8 ">
              <span className="poppins-700 first-color text-xl ">
                Detailed Records
              </span>
              <span className="fourth-color poppins-500 text-md pb-8">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </span>
            </div>
          </div>
          <div className="flex-col bg-white rounded-lg translate-y-24 z-10">
            <div className="icon p-5 rounded-full w-20 ml-8 -translate-y-12">
              <img alt="stylus pens" src={fully} />
            </div>
            <div className="flex flex-col gap-4 px-8">
              <span className="poppins-700 first-color text-xl ">
                Fully Customizable
              </span>
              <span className="fourth-color poppins-500 text-md pb-8">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </span>
            </div>
          </div>
          <div className="w-full custom-button z-0 h-3 w-full absolute translate-y-32"></div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

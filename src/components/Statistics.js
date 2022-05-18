import React, { useEffect, useState } from "react";

import brand from "../assets/images/icon-brand-recognition.svg";
import detailed from "../assets/images/icon-detailed-records.svg";
import fully from "../assets/images/icon-fully-customizable.svg";

const getLocalStorage = () => {
  let links = localStorage.getItem("links");

  if (links) {
    return JSON.parse(links);
  } else {
    return [];
  }
};

const Statistics = () => {
  const [text, setText] = useState("");
  const [links, setLinks] = useState(getLocalStorage());
  const [errorMode, setErrorMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const validURL = (text) => {
      const pattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
          "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
          "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
          "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
          "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
          "(\\#[-a-z\\d_]*)?$",
        "i"
      ); // fragment locator
      return !!pattern.test(text);
    };

    validURL(text);

    if (!text) {
      setErrorMode(true);
    } else if (!validURL(text)) {
      alert("Please insert a valid URL");
      setErrorMode(true);
      setText("");
    } else {
      setErrorMode(false);
      const shortenLink = async () => {
        // fetch response
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`);
        //convert to JSON
        const data = await res.json();
        //Save to state
        setLinks([...links, data.result]);
        //Clear input
        setText(" ");
      };
      shortenLink();
    }
  };

  const renderList = () => {
    return (
      <>
        {links.length === 0
          ? null
          : links.map((link) => {
              return (
                <div className="flex bg-white p-3 items-center rounded ">
                  <div className="w-3/4 poppins-500">{link.original_link}</div>
                  <div className="sixth-color poppins-500">
                    {link.full_short_link}
                  </div>
                  <button
                    onClick={(e) => {
                      handleCopy(e, link);
                    }}
                    className="custom-button rounded ml-4 py-1 w-24 hover:bg-teal-200 text-white poppins-500 focus:bg-slate-800"
                  >
                    Copy
                  </button>
                </div>
              );
            })}
      </>
    );
  };

  //TODO FIX THIS COPY AND PASTE
  const handleCopy = (e, link) => {
    navigator.clipboard.writeText(link.full_short_link);
    e.target.textContent = "Copied!";
  };

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  return (
    <div className=" statistics">
      <div className=" flex flex-col mx-auto mt-36 w-3/4">
        <section>
          <div className="search-bar rounded-xl -translate-y-20  ">
            <form
              onSubmit={handleSubmit}
              className="flex justify-center py-12 pl-12 "
            >
              <input
                type="url"
                className={`rounded-lg poppins-500 text-lg w-3/4 h-16 px-6 my-auto ${
                  errorMode === true ? "border-4" : ""
                } border-red-500`}
                placeholder={
                  errorMode
                    ? "Please insert a valid URL"
                    : "Shorten a link here"
                }
                value={text}
                onChange={(e) => setText(e.target.value)}
              />

              <button
                onClick={handleSubmit}
                className="custom-button poppins-700 rounded-2xl mx-auto px-9 py-5 text-white text-xl hover:bg-teal-200"
              >
                Shorten it!
              </button>
            </form>
          </div>
          <div className="flex flex-col gap-4 -mt-16  ">{renderList()}</div>
        </section>
        <section className=" flex flex-col gap-4 mt-24">
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
                don’t mean a thing. Branded links help instill confidence in
                your content.
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

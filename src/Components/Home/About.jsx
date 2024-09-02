import React from "react";
import listLogo from "../Assets/list-logo.webp";

function About({ aboutData }) {
  const { section1, section2, section3, heading, subHeading } = aboutData;

  return (
    <section className="flex flex-col items-center pb-24 pt-8 overflow-x-hidden bg-white">
      <div className="md:w-3/5 flex flex-col items-center text-center">
        <h4 className="text-xl md:text-4xl py-6">{heading}</h4>
        <h2 className="text-3xl md:text-6xl leading-70 w-[90%]">
          {subHeading}
        </h2>
      </div>

      {/* Section1 */}
      <div className="w-full lg:h-[80vh] flex flex-col md:flex-row items-center mt-24">
        <div className="md:w-2/5 h-[50vh] md:h-full relative flex items-start md:items-center justify-center md:justify-end z-[1] before:absolute md:before:h-full before:h-3/4 md:before:w-4/5 before:w-full before:left-0 md:before:top-0 before:top-12 before:bg-[#9f70fd] before:z-[-1] md:before:rounded-r-lg before:rounded-t-lg">
          <img
            src={section1.Image[0]}
            alt=""
            className="w-1/2 md:w-3/5 rounded-xl shadow-[1px_1px_5px_rgba(0,0,0,1)]"
          />
        </div>
        <div className="md:w-1/2 flex justify-center text-justify md:text-left">
          <div className="w-5/6 md:w-[65%]">
            <h1 className="text-2xl md:text-5xl">{section1.title}</h1>
            <p className="md:text-2xl mt-8">{section1.description}</p>
            <ul className="text-sm md:text-lg my-8">{section1.paragraph}</ul>
          </div>
        </div>
      </div>

      {/* Section2 */}
      <div className="w-full lg:h-[80vh] flex flex-col md:flex-row items-center mt-32 md:mt-16">
        <div className="md:w-1/2 flex justify-center order-2 md:order-1">
          <div className="w-5/6 md:w-[65%]">
            <h1 className="text-2xl md:text-5xl">{section2.title}</h1>
            <p className="md:text-2xl mt-8">{section2.description}</p>
            <ul className="text-sm md:text-lg my-8">
              <li className="flex items-center gap-6">
                <img alt="" src={listLogo} />
                {section2.paragraph[0]}
              </li>
              <li className="flex items-center gap-6">
                <img alt="" src={listLogo} />
                {section2.paragraph[1]}
              </li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/2 h-[50vh] md:h-full relative flex justify-center items-start md:items-center md:justify-start order-1 md:order-2 z-[1] before:absolute md:before:h-full before:h-3/4 md:before:w-4/5 before:w-full before:right-0 md:before:top-0 before:top-12 before:bg-[#9f70fd] before:z-[-1] md:before:rounded-l-lg before:rounded-t-lg">
          <img src={section2.Image[0]} alt="" className="w-1/2 rounded-xl" />
          <img
            src={section2.Image[1]}
            alt=""
            className="w-2/6 rounded-2xl absolute top-[10%] left-[5%] md:left-[40%]"
          />
        </div>
      </div>

      {/* Section3 */}
      <div className="w-full lg:h-[80vh] flex flex-col md:flex-row items-center mt-24">
        <div className="md:w-1/3 h-[50vh] md:h-full relative flex items-start md:items-center justify-center md:justify-end z-[1] before:absolute md:before:h-full before:h-3/4 md:before:w-4/5 before:w-full before:left-0 md:before:top-0 before:top-12 before:bg-[#9f70fd] before:z-[-1] md:before:rounded-r-lg before:rounded-t-lg">
          <img
            src={section3.Image[0]}
            alt=""
            className="w-3/5 md:w-3/4 rounded-xl"
          />
        </div>
        <div className="md:w-2/3 flex justify-center">
          <div className="w-5/6 md:w-[65%]">
            <h1 className="text-2xl md:text-5xl">{section3.title}</h1>
            <p className="md:text-2xl mt-8">{section3.description}</p>
            <ul className="text-sm md:text-md my-8 flex flex-col md:gap-12">
              <li className="flex flex-col md:flex-row md:items-center md:gap-6">
                <div className="flex items-center">
                  <img alt="" src={listLogo} />
                  {section3.paragraph[0]}
                </div>
                <div className="flex items-center">
                  <img alt="" src={listLogo} />
                  {section3.paragraph[1]}
                </div>
              </li>
              <li className="flex flex-col md:flex-row md:items-center md:gap-6">
                <div className="flex items-center">
                  <img alt="" src={listLogo} />
                  {section3.paragraph[2]}
                </div>
                <div className="flex items-center">
                  <img alt="" src={listLogo} />
                  {section3.paragraph[3]}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

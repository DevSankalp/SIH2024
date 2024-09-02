import React from "react";
import { Typography, Button } from "@material-tailwind/react";

function Footer({ data }) {
  const {
    logoText,
    menuItems,
    buttonText,
    contactInfo,
    moreInfo,
    socialIcons,
  } = data;

  return (
    <footer className="flex flex-col items-center py-8 md:pt-12 md:pb-4 glassmorph bg-[rgba(255,255,255)] relative">
      <div className="w-[90%] flex flex-col gap-6 sm:gap-0 sm:flex-row items-center sm:items-start justify-between border-y-[1px] border-[rgba(0,0,0,.5)] p-8 md:p-16 md:pb-24">
        <Typography
          as="a"
          href="#"
          className="cursor-pointer flex text-3xl font-['poppins']"
        >
          {logoText}
        </Typography>
        <div className="flex flex-col gap-8 sm:gap-12">
          <ul className="flex flex-col gap-2 items-center sm:items-start">
            {menuItems.items.map((item, index) => (
              <li
                key={index}
                className="w-[max-content] font-normal relative before:absolute before:bg-black before:bottom-0 before:left-0 before:w-[102%] before:h-[1.5px] before:scale-x-0 lg:before:hover:scale-x-100 before:origin-left before:duration-500"
              >
                <a href={menuItems.links[index]} className="flex items-center">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/login"
            className="w-[100%] hover:text-black bg-black hover:bg-white border-2 border-black px-4 text-white py-2 rounded-lg duration-300"
          >
            {buttonText}
          </a>
        </div>
        <hr className="block sm:hidden h-[1px] w-[100%] border-black" />
        <div className="w-[90%] text-justify md:w-1/2 flex flex-col gap-8 sm:gap-12 items-center sm:items-start">
          <p>{moreInfo.about}</p>
          <p className="font-bold">{contactInfo.address}</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-[80%] items-center sm:justify-between">
        <p className="py-2 sm:py-8">© 2024 by FusionX</p>
        <div className="flex items-center justify-end gap-2 sm:w-[40%] sm:py-8">
          {socialIcons.icons.map((icon, index) => (
            <p key={index} className="h-[100%] m-0">
              <a href={socialIcons.links[index]} className="">
                <svg
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                  role="none"
                  width="40"
                  height="40"
                  className="hover:invert hover:bg-white rounded duration-300 p-1"
                >
                  <path d={icon}></path>
                </svg>
              </a>
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

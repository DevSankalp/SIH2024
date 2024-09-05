import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { IoDocumentTextOutline, IoLogOutOutline } from "react-icons/io5";
import { BiSolidBarChartSquare } from "react-icons/bi";
import { FaChartLine } from "react-icons/fa6";
import { BsPlayCircleFill } from "react-icons/bs";
import DashHome from "../Components/Dashboard/DashHome";
import featuredPosts from "../Components/Dashboard/featuredPosts";
import Header from "../Components/Dashboard/header";
import Forums from "../Pages/Forums";

function Dashboard() {
  const navItems = [
    {
      id: 0,
      icon: <AiFillHome className="w-5 h-5" />,
      text: "Home",
      display: <DashHome />,
    },
    {
      id: 1,
      icon: <IoDocumentTextOutline className="w-5 h-5" />,
      text: "Forum",
      display: <Forums />,
    },
    {
      id: 2,
      icon: <BiSolidBarChartSquare className="w-5 h-5" />,
      text: "Profile",
      display: "Profile",
    },
    {
      id: 3,
      icon: <FaChartLine className="w-5 h-5" />,
      text: "Trends",
      display: "Trends Content",
    },
    {
      id: 4,
      icon: <BsPlayCircleFill className="w-5 h-5" />,
      text: "Media",
      display: "Media Content",
    },
  ];

  const [activeItem, setActiveItem] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Header />
      <div className="w-screen h-screen pl-8 pr-8 pt-4 flex  items-start">
        {/* Navbar */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`relative flex flex-col items-center min-h-[80vh] rounded-3xl transition-all duration-300 ease-in-out ${
            isHovered ? "w-60" : "w-16"
          } bg-[rgb(154,91,248)]`}
        >
          <div className="flex flex-col items-center gap-8 mt-6 justify-start hover:text-[rgb(154,91,248)]">
            {navItems.map((item) => (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  setActiveItem(item.id);
                }}
                key={item.id}
                className={`flex items-center w-10 max-h-[40px] gap-4 p-2 rounded-2xl cursor-pointer text-lg transition-all duration-300 ease-in-out ${
                  activeItem === item.id
                    ? "bg-white p-[10px] shadow-xl text-[rgb(154,91,248)]"
                    : "bg-transparent hover:bg-white hover:text-[rgb(154,91,248)] text-white"
                } ${isHovered ? "w-44" : ""}`}
              >
                <a
                  href="#"
                  className={`flex items-center overflow-hidden ${
                    isHovered ? "w-44" : ""
                  }`}
                >
                  <div className="w-10">{item.icon}</div>
                  <span className="ml-2">{item.text}</span>
                </a>
              </div>
            ))}
          </div>

          <div className="absolute bottom-10 w-full flex justify-center text-white text-2xl">
            <a href="#">
              <IoLogOutOutline />
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex p-3 min-w-[50rem]  rounded-lg max-h-[80vh] ml-6 overflow-hidden  flex-col gap-10 items-center flex-wrap justify-start ">
          {navItems[activeItem].display}
        </div>
      </div>
    </>
  );
}

export default Dashboard;

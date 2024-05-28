import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPaw,
  faEarthAmericas,
  faMapLocation,
  faImages,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";


const SideBar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleLogout = () => {
    setActiveLink("Logout");
    toast.success("User logout successful");
  };
  

  const normalLink =
    "text-xl text-stone-800 p-3 mt-6 flex items-center transition-colors duration-100 pl-4 hover:text-white";
  const newActiveLink =
    "bg-[#a3a3a3] text-xl text-white p-3 mt-6 flex items-center transition-colors duration-100 pl-4";
  const nonActiveIcon = "text-xl text-stone-800 p-2 mx-2 bg-white rounded-full";
  const activeIcon = "text-xl mx-2 text-stone-800 bg-white p-2 rounded-full";

  return (
    <div className="sidebar-container flex flex-col p-3 float-left w-1/6 h-[90vh] bg-[#78716c]">
      <div className="flex flex-col w-full h-full side-link-container">
        <div className="flex flex-col mt-10 option-links">
          <Link
            to="/home"
            className={activeLink === "Home" ? newActiveLink : normalLink}
            onClick={() => handleLinkClick("Home")}
          >
            <FontAwesomeIcon
              icon={faHouse}
              className={activeLink === "Home" ? activeIcon : nonActiveIcon}
            />
            Home
          </Link>
          <Link
            to="/leopards"
            className={activeLink === "Leopards" ? newActiveLink : normalLink}
            onClick={() => handleLinkClick("Leopards")}
          >
            <FontAwesomeIcon
              icon={faPaw}
              className={activeLink === "Leopards" ? activeIcon : nonActiveIcon}
            />
            Leopards
          </Link>
          <Link
            to="/about"
            className={activeLink === "About" ? newActiveLink : normalLink}
            onClick={() => handleLinkClick("About")}
          >
            <FontAwesomeIcon
              icon={faEarthAmericas}
              className={activeLink === "About" ? activeIcon : nonActiveIcon}
            />
            Leopard World
          </Link>
          <Link
            to="/srilanka"
            className={
              activeLink === "LeopardsSrilanka" ? newActiveLink : normalLink
            }
            onClick={() => handleLinkClick("LeopardsSrilanka")}
          >
            <FontAwesomeIcon
              icon={faMapLocation}
              className={
                activeLink === "LeopardsSrilanka" ? activeIcon : nonActiveIcon
              }
            />
            Leopards of Srilanka
          </Link>
          <Link
            to="/gallery"
            className={activeLink === "Gallery" ? newActiveLink : normalLink}
            onClick={() => handleLinkClick("Gallery")}
          >
            <FontAwesomeIcon
              icon={faImages}
              className={activeLink === "Gallery" ? activeIcon : nonActiveIcon}
            />
            Gallery
          </Link>
        </div>
       
        <div className="flex flex-col justify-end mb-3 logout-section grow">
        <hr/>
          <Link
            to="/login"
            className={activeLink === "Logout" ? newActiveLink : normalLink}
            onClick={handleLogout}
          >
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              className={activeLink === "Logout" ? activeIcon : nonActiveIcon}
            />
            Logout
          </Link>
        </div>
      </div>
     
    </div>
  );
};

export default SideBar;

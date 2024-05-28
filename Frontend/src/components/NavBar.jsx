import React, {useContext} from "react";
import logo from "../assets/closeup.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../context/UserContext";

const NavBar = () => {

  const { displayname } = useContext(UserContext);
  
  return (
    <div className="flex items-center justify-between navbar-container w-full h-[104px] bg-stone-800">
      
      <div className="flex items-center nav-left-section">
      <div className="flex items-center gap-3 p-2 my-1 ml-9 logo-section">
        <img
          src={logo}
          alt=""
          className="logo w-[140px] h-[56px] opacity-98 rounded-lg"
        />
        <span className="ml-1 text-2xl text-white capitalize cursor-pointer title font-titlefont hover:text-gray-300">Leopard log SL</span>
      </div>
      </div>


      <div className="flex items-center w-auto gap-3 mr-10 nav-right-section">
        <div className="flex items-center py-1 px-2 m-1 bg-white rounded-md search-section w-[250px]">
          <input
            type="text"
            placeholder="Search Here.."
            className="w-full text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
          />
          <button
            className="flex-shrink-0 px-3 py-1 text-sm rounded text-stone-400 hover:bg-gray-300"
            type="submit"
          >
            {" "}
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <div className="ml-8 notification">
          <FontAwesomeIcon
            icon={faBell}
            className="text-2xl text-white cursor-pointer hover:text-gray-400"
          />
        </div>

        <div className="flex items-center gap-1 mx-5 ml-8 user-profile">
          <FontAwesomeIcon
            icon={faUser}
            className="text-2xl text-white cursor-pointer hover:text-gray-400"
          />
          {/* <span className="text-white profile-name hover:text-gray-400">John Steve</span> */}
          <span className="text-white cursor-pointer profile-name hover:text-gray-400">{displayname || 'Guest'}</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

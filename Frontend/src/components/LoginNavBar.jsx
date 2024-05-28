import React from 'react'
import logo from "../assets/closeup.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const LoginNavBar = () => {
  return (
    <div className="flex items-center justify-between navbar-container w-full h-[104px] bg-stone-800">
      
    <div className="flex items-center nav-left-section">
    <div className="flex items-center gap-3 p-2 my-1 ml-9 logo-section">
      <img
        src={logo}
        alt=""
        className="logo w-[140px] h-[56px] opacity-98 rounded-lg"
      />
      <span className="ml-1 text-2xl text-white capitalize title font-titlefont">Leopard log SL</span>
    </div>
    </div>


    <div className="flex items-center w-auto h-full mr-16 nav-right-section">
      
    <Link to='/signup'><div className="flex items-center gap-2 mx-5 ml-5 user-profile">
        <FontAwesomeIcon
          icon={faUser}
          className="text-2xl text-white cursor-pointer hover:text-gray-400"
        />
        <span className="text-white profile-name hover:text-gray-400">Sign Up</span>
      </div></Link>
    </div>
  </div>
    
  );
}

export default LoginNavBar
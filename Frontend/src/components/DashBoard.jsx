import React, { useState, useContext} from "react";
import wilpattuSafari from "../assets/wilpattuSafari.jpeg";
import yalaSafari from "../assets/yalaSafari.jpeg";
import hortonLeopards from "../assets/hortonLeopards.jpeg";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { LeopardContext } from "../context/LeopardContext";


const DashBoard = () => {
  
  const {
    yalaRecordedLeopards,
    wilpattuRecordedLeopards,
    hortonPlainsRecordedLeopards,
  } = useContext(LeopardContext);

  
    const yalaActiveLeopards= 122;
    const wilpattuActiveLeopards=132;
    const hortonPlainsActiveLeopards=16;
  

  return (
    <div className="flex flex-col float-right w-5/6 h-[90vh] p-4 dashboard-container">
      <span className="w-full p-1 text-xl bg-gray-200 greeting text-stone-800">
        Hello! Welcome to Leopard Log SL
      </span>

      <div className="flex flex-col items-start p-1 caption">
        <span className="text-lg font-medium font-captionfont">
          Experience the wonder of Sri Lankan leopards..
        </span>
      </div>

      <div className="flex flex-row items-center w-full h-auto gap-3 p-1 mt-1 middle-section">
        <div className="w-3/4 h-auto p-4 mt-5 option-section">
          <div className="flex flex-row items-center justify-around gap-3 buttons-container">
            <div className="flex flex-col items-center justify-center w-1/3 h-auto p-2 bg-green-100 shadow-lg link1 hover:bg-green-200">
              <Link to="/home/yala">
                <img
                  src={yalaSafari}
                  alt=""
                  className="rounded-full w-[180px] h-[180px] object-cover opacity-90"
                />
                <div className="flex items-center justify-center image-name">
                  <span className="mt-2 text-lg font-semibold uppercase text-stone-800">Yala Leopards</span>
                </div>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center w-1/3 h-auto p-2 bg-green-100 shadow-lg link2 hover:bg-green-200">
              <Link to="/home/wilpattu">
                <img
                  src={wilpattuSafari}
                  alt=""
                  className="rounded-full w-[180px] h-[180px] object-cover opacity-90"
                />
                <div className="flex items-center justify-center image-name">
                  <span className="mt-2 text-lg font-semibold uppercase text-stone-800">
                    Wilpattu Leopards
                  </span>
                </div>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center w-1/3 h-auto p-2 bg-green-100 shadow-lg link3 hover:bg-green-200">
              <Link to="/home/hortonplains">
                <img
                  src={hortonLeopards}
                  alt=""
                  className="rounded-full w-[180px] h-[180px] object-cover opacity-90"
                />
                <div className="flex flex-row items-center justify-center image-name">
                  <span className="h-auto mt-2 text-lg font-semibold uppercase text-stone-800">
                    Hor.Plains Leopards
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-1/4 h-auto p-2 mt-2 mr-1 text-sm shadow-inner calendar-section shadow-slate-400">
          <Calendar/>
        </div>
      </div>

      <div className="flex flex-row w-full h-full gap-3 p-2 mt-3 dashboard-bottom">
        <div className="flex flex-col w-3/4 h-[280px] p-2 mt-2 left-section">
          <span className="py-1 mt-2 font-semibold text-center text-md text-stone-800">Leopard Population Statistics</span>
          <hr className="my-1 h-[1px] border-gray-300" />
          <div className="flex flex-row items-center justify-around w-full h-auto p-1 mt-5 stat-section-one">
            <div className="flex flex-col items-center justify-center bg-red-400 cursor-pointer counter w-[210px] h-[65px] p-1 hover:bg-red-500">
              <p className="text-4xl font-semibold text-stone-800">{yalaRecordedLeopards}</p>
              <h3 className="text-sm text-[#78716c] font-semibold">Recorded Yala Leopards</h3>
            </div>
            <div className="flex flex-col items-center justify-center bg-yellow-400 cursor-pointer counter w-[210px] h-[65px] p-1 hover:bg-yellow-500">
              <p className="text-4xl font-semibold text-stone-800">{wilpattuRecordedLeopards}</p>
              <h3 className="text-sm text-[#78716c] font-semibold">Recorded Wilpattu Leopards</h3>
            </div>
            <div className="flex flex-col items-center justify-center bg-blue-400 cursor-pointer counter w-[210px] h-[65px] py-1 hover:bg-blue-500">
              <p className="text-4xl font-semibold text-stone-800">{hortonPlainsRecordedLeopards}</p>
              <h3 className="text-sm text-[#78716c] font-semibold">Recorded Hor.Plains Leopards</h3>
            </div>
  
            
          </div>
          <div className="flex flex-row items-center justify-around w-full h-auto p-1 mt-6 stat-section-two">
          <div className="flex flex-col items-center justify-center bg-orange-400 cursor-pointer counter w-[210px] h-[65px] p-1 hover:bg-orange-500">
              <p className="text-4xl font-semibold text-stone-800">{yalaActiveLeopards}</p>
              <h3 className="text-sm text-[#78716c] font-semibold">Active Yala Leopards</h3>
            </div>
            
            <div className="flex flex-col items-center justify-center bg-green-400 cursor-pointer counter w-[210px] h-[65px] p-1 hover:bg-green-500">
              <p className="text-4xl font-semibold text-stone-800">{wilpattuActiveLeopards}</p>
              <h3 className="text-sm text-[#78716c] font-semibold">Active Wilpattu Leopards</h3>
            </div>
            
            <div className="flex flex-col items-center justify-center bg-purple-400 cursor-pointer counter w-[210px] h-[65px] p-1 hover:bg-purple-500">
              <p className="text-4xl font-semibold text-stone-800">{hortonPlainsActiveLeopards}</p>
              <h3 className="text-sm text-[#78716c] font-semibold">Active Hor.Plains Leopards</h3>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center w-1/4 h-[280px] px-4 bg-gray-200 right-section shadow-slate-300 mt-2">
          
          <p className="font-semibold text-center text-[15px]"> Upcoming events</p>
          <hr className="my-1 h-[1px] border-white" />

          <div className="h-auto p-2 mt-2 text-sm bg-white event">
            <span>
              <FontAwesomeIcon
                icon={faCalendar}
                className="mr-2"
              ></FontAwesomeIcon>
              International Leopard Day
            </span>
            <p className="ml-5 text-gray-500">25th of February</p>
          </div>
          <div className="h-auto p-2 mt-3 text-sm bg-white event">
            <span>
              <FontAwesomeIcon
                icon={faCalendar}
                className="mr-2"
              ></FontAwesomeIcon>
              World Wildlife Day
            </span>
            <p className="ml-5 text-gray-500">3rd of March</p>
          </div>
          <div className="h-auto p-2 mt-3 text-sm bg-white event">
            <span>
              <FontAwesomeIcon
                icon={faCalendar}
                className="mr-2"
              ></FontAwesomeIcon>
              Sri Lankan Leopard Day
            </span>
            <p className="ml-5 text-gray-500">1st of Augest</p>
          </div>
          
        </div>
      </div>
     
    </div>
  );
};

export default DashBoard;

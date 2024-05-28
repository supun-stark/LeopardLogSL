import React from "react";
import wilpattumap from '../assets/wipattumap.png'
import list1 from '../assets/list1.png'
import list2 from '../assets/list2.png'
import list3 from '../assets/list3.png'
import list4 from '../assets/list4.png'
import list5 from '../assets/list5.png'


const Wilpattu = () => {
  return (
    <div className="wipattu-container w-5/6 bg-white max-h-[90vh] flex flex-col float-right p-4 items-center overflow-y-scroll">
      <div className="w-full p-2 text-center bg-gray-200 page-title">
        <span className="text-2xl">Wilpattu Leopards</span>
      </div>
      <div className="flex flex-col items-center p-5 mt-6 overview-section w-[1000px]">
        <span className="px-2 py-1 text-2xl font-bold text-stone-500">
          Overview
        </span>
        <p className="text-[17px] text-gray-500 mt-2">
        Wilpattu National Park, located in the northwest of Sri Lanka, is one of the oldest and largest national parks in the country, renowned for its diverse wildlife, including a significant population of Sri Lankan leopards (Panthera pardus kotiya). The park, spanning over 1,300 square kilometers, features a unique landscape dotted with numerous natural lakes or "villus," which provide vital water sources and contribute to the park's rich biodiversity. These leopards are the apex predators in Wilpattu, preying on a variety of animals such as spotted deer, buffalo calves, and wild boar, which helps maintain the ecological balance within the park.<br></br>
          <br></br>
          Leopard sightings in Wilpattu can be more challenging compared to other parks like Yala due to the dense forest cover and the elusive nature of these big cats. However, this adds to the allure and mystery of Wilpattu, drawing wildlife enthusiasts and researchers interested in studying leopards in their natural, undisturbed habitats. Conservation efforts in Wilpattu focus on protecting the leopards and their habitat from threats such as poaching, habitat fragmentation, and human-wildlife conflict. These efforts are supported by research initiatives aimed at monitoring leopard populations and understanding their behavior, which are crucial for the development of effective conservation strategies to ensure the long-term survival of leopards in this pristine wilderness.
        </p>
      </div>

      <div className="flex flex-col items-center p-5 mt-7 w-[1000px] population-section">
        <span className="px-2 py-1 text-2xl font-bold text-stone-500">
          Population
        </span>
        <p className="text-[17px] text-gray-500 mt-2">
        The leopard population in Wilpattu National Park, located in northwest Sri Lanka, is characterized by its elusive nature and the dense forest cover of its habitat. While exact numbers are challenging to ascertain due to the park's vast and rugged terrain, it is estimated that Wilpattu is home to around 30 to 40 leopards per 100 square kilometers, similar to other prime leopard habitats in the country.{" "}
          <br></br>
          <br></br>
          Despite the challenges of spotting leopards amidst the thick vegetation, Wilpattu's large size and varied landscape provide essential habitat for these apex predators. Conservation efforts in Wilpattu focus on safeguarding the leopard population and their habitat, with ongoing research and monitoring contributing to the protection of these iconic cats in one of Sri Lanka's oldest and largest national parks.
        </p>
      </div>

      <div className="flex flex-col items-center p-5 mt-8 w-[1000px] extent-section">
        <span className="px-2 py-1 text-2xl font-bold text-stone-500">
        Extent of the Wilpattu National park
        </span>
        <div className="flex flex-col items-center w-full h-auto p-3 mt-2 map">
          <img
            src={wilpattumap}
            alt=""
            className="w-[750px] h-[800px] opacity-90"
          />
        </div>
        <div className="flex flex-col items-center p-1 source">
          <span className="text-gray-400 text-md">
            Source :Zonal Distribution of forest reserves in Wilpattu forest complex /N.D.K. Dayawansa
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center p-5 mt-8 w-[1000px] recorded-section">
        <span className="px-2 py-1 text-2xl font-bold text-stone-500">
          Recorded Leopards in Wilpattu
        </span>
       <div className="flex flex-row gap-2 p-1 mt-4 image-section">
       <img
            src={list1}
            alt=""
            className="w-1/5 h-auto opacity-92"
          />
    
      <img
            src={list2}
            alt=""
            className="w-[180px] h-[380px] opacity-92"
          />
          <img
            src={list3}
            alt=""
            className="w-[180px] h-[380px] opacity-92"
          />
          <img
            src={list4}
            alt=""
            className="w-[180px] h-[380px]opacity-92"
          />
          <img
            src={list5}
            alt=""
            className="w-[180px] h-[230px] opacity-92"
          />
      </div>
      <div className="flex flex-col items-center p-1 source">
          <span className="text-gray-400 text-md">
            Source :https://www.wilpattu.com/wiplattu-Leopards
          </span>
        </div>

      </div>
      


    </div>
  );
};

export default Wilpattu;

import React from "react";
import yalamap from '../assets/yalamap.png';
import Lucas from "../assets/Lucas.png";
import mich from "../assets/mich.png";
import leopard17 from "../assets/leopard17.jpeg";
import arthur from "../assets/arthur.png";
import leopard20 from "../assets/leopard20.jpeg";
import leopard54 from "../assets/leopard54.jpeg";

const Yala = () => {
  return (
    <div className="yala-container w-5/6 bg-white max-h-[90vh] flex flex-col float-right p-4 items-center overflow-y-scroll">
      <div className="w-full p-2 text-center bg-gray-200 page-title">
        <span className="text-2xl">Yala Leopards</span>
      </div>

      <div className="flex flex-col items-center p-5 mt-6 overview-section w-[1000px]">
        <span className="px-2 py-1 text-2xl font-bold text-stone-500">
          Overview
        </span>
        <p className="text-[17px] text-gray-500 mt-2">
        Yala Leopards are part of the Sri Lankan leopard (Panthera pardus kotiya) population inhabiting Yala National Park, the most famous and second largest national park in Sri Lanka. Yala is renowned for having one of the highest leopard densities in the world, making it a prime location for wildlife enthusiasts and researchers alike. The park's diverse habitats, which include dry woodlands, grasslands, and lagoons, provide an ideal environment for leopards, offering abundant prey such as spotted deer, wild boar, and monkeys. The leopards here are often more visible and habituated to vehicles, making Yala a popular destination for leopard sightings.<br></br>
          <br></br>
          The leopards in Yala National Park play a critical role in maintaining the ecological balance by regulating the populations of herbivores and other prey species. They are top predators, and their presence signifies a healthy, functioning ecosystem. Conservation efforts in Yala focus on mitigating human-wildlife conflict, especially as the park is a major tourist attraction, which can lead to disturbances in leopard behavior and habitat. Efforts include anti-poaching measures, habitat restoration, and community engagement programs to ensure that these majestic creatures continue to thrive in one of Sri Lanka's most cherished natural sanctuaries.
        </p>
      </div>

      <div className="flex flex-col items-center p-5 mt-7 w-[1000px] population-section">
        <span className="px-2 py-1 text-2xl font-bold text-stone-500">
          Population
        </span>
        <p className="text-[17px] text-gray-500 mt-2">
        The leopard population in Yala National Park, Sri Lanka, is estimated to be one of the highest densities globally, with recent surveys suggesting a population of approximately 30 to 40 individuals per 100 square kilometers. This concentration of leopards makes Yala a hotspot for leopard sightings, attracting wildlife enthusiasts, researchers, and tourists alike. The park's diverse habitats and abundant prey species support this significant leopard population, highlighting the importance of Yala as a vital conservation area for these iconic big cats.
        </p>
      </div>

      <div className="flex flex-col items-center p-5 mt-8 w-[1000px] naming-section">
        <span className="px-2 py-1 text-2xl font-bold text-stone-500">
        Naming Format of Yala Leopards
        </span>
        <p className="text-[17px] text-gray-500 mt-5">
        Assigning unique IDs to Leopards for easy identification.<br></br><br></br>
        Male Leopards (Block 01) - YM## <br></br>
        Female Leopards (Block 01)- YF##<br></br> <br></br>
        Male Leopards (Block 05) - YB5M##  <br></br>
        Female Leopards (Block 05) - YB5F## <br></br><br></br>
        Also, nick names have been provided for easy reference. <br></br>
        (Ex: YM16 - Lucas | YB5F02 - Bella)<br></br><br></br>
        Additionally, some leopards are famous and highly popular, making them the most treasured and sought-after sights among visitors. Therefore, wildlife enthusiasts have given these gorgeous leopards unique identifiers in the area. <br></br>
        The king of Yala National Park - YM16 – Lucas<br></br>
        The Queen of Yala National Park - YF32 – Strawberry 
        </p>
      </div>

    
      <div className="flex flex-col items-center p-5 mt-8 w-[1000px] extent-section">
        <span className="px-2 py-1 text-2xl font-bold text-stone-500">
        Extent of the Yala National park
        </span>
        <div className="flex flex-col items-center w-full h-auto p-3 mt-2 map">
          <img
            src={yalamap}
            alt=""
            className="w-[670px] h-[500px] opacity-90"
          />
        </div>
        <div className="flex flex-col items-center p-1 source">
          <span className="text-gray-400 text-md">
            Source :Sri Lanka Wetlands Information and Database
          </span>
        </div>
      </div>

      <div className="popular flex flex-col items-center p-5 mt-9 w-[1000px]">
        <span className="px-2 py-1 text-2xl font-bold text-stone-500">
          Most Popular Leopards in Yala
        </span>
        <div className="flex flex-row items-center justify-center w-full h-auto gap-4 p-2 mt-5 pic-section">
          <div className="flex flex-col items-center w-1/3 p-1 pic-one">
            <img
              src={Lucas}
              alt=""
              className="w-[280px] h-[250px] opacity-95 object-cover"
            />
            <div className="flex flex-col items-center p-1 credits">
          <span className="text-gray-400 text-md">
            YM16 - Lucas 
          </span>
        </div>
          </div>
          <div className="flex flex-col items-center w-1/3 p-1 pic-two">
            <img
              src={leopard20}
              alt=""
              className="w-[280px] h-[250px] opacity-86 object-cover"
            />
            <div className="flex flex-col items-center p-1 credits">
          <span className="text-gray-400 text-md">
          YF32 – Strawberry
          </span>
        </div>
          </div>
          <div className="flex flex-col items-center w-1/3 p-1 pic-two">
            <img
              src={leopard54}
              alt=""
              className="w-[280px] h-[250px] opacity-97 object-cover"
            />
            <div className="flex flex-col items-center p-1 credits">
          <span className="text-gray-400 text-md">
          YM07 – Cattle Thief(Harak Hora)
          </span>
        </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center w-full h-auto gap-4 p-2 mt-2 pic-section">
          <div className="flex flex-col items-center w-1/3 p-1 pic-one">
            <img
              src={mich}
              alt=""
              className="w-[280px] h-[250px] opacity-97 object-cover"
            />
            <div className="flex flex-col items-center p-1 credits">
          <span className="text-gray-400 text-md">
          YM27 – Michael
          </span>
        </div>
          </div>
          <div className="flex flex-col items-center w-1/3 p-1 pic-two">
            <img
              src={leopard17}
              alt=""
              className="w-[280px] h-[250px] opacity-97 object-cover"
            />
            <div className="flex flex-col items-center p-1 credits">
          <span className="text-gray-400 text-md">
          YM47 – Julius
          </span>
        </div>
          </div>
          <div className="flex flex-col items-center w-1/3 p-1 pic-two">
            <img
              src={arthur}
              alt=""
              className="w-[280px] h-[250px] opacity-97 object-cover"
            />
            <div className="flex flex-col items-center p-1 credits">
          <span className="text-gray-400 text-md">
          YM20 – Arthur
          </span>
        </div>
          </div>
        </div>
        
      </div>

      <div className="flex flex-col items-end w-[900px] h-auto p-1 pic-credits">
        <span className="text-[10px] italic text-gray-400 p-1">
          Image credits: Respective Owners, www.google.com.
        </span>
      </div>

    </div>
  );
};

export default Yala;

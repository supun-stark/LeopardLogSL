import React from "react";
import hortonplainsmap from "../assets/hortonplainsmap.png";
import horton1 from "../assets/horton1.jpeg";
import horton2 from "../assets/horton2.jpeg";
import horton3 from "../assets/horton3.jpeg";
import horton4 from "../assets/horton4.jpeg";
import horton5 from "../assets/horton5.png";
import horton6 from "../assets/horton6.png";
import horton7 from "../assets/horton7.png";
import horton8 from "../assets/horton8.png";
import horton9 from "../assets/horton9.jpeg";
import horton10 from "../assets/horton10.png";
import horton11 from "../assets/horton11.jpeg";
import leopard36 from "../assets/leopard36.jpeg";

const Hortonplains = () => {
  return (
    <div className="hortonplains-container w-5/6 bg-white max-h-[90vh] flex flex-col float-right p-4 items-center overflow-y-scroll">
      <div className="w-full p-2 text-center bg-gray-200 page-title">
        <span className="text-2xl">Mysterious Mountain Leopards</span>
      </div>
      <div className="flex flex-col items-center p-5 mt-6 overview-section w-[1000px]">
        <span className="px-2 py-1 text-2xl font-bold text-stone-500">
          Overview
        </span>
        <p className="text-[17px] text-gray-500 mt-2">
          Horton Plains Leopards are a distinct population of Sri Lankan
          leopards (Panthera pardus kotiya) residing in the Horton Plains
          National Park, a UNESCO World Heritage Site located in the central
          highlands of Sri Lanka. These leopards are an apex predator within the
          park's ecosystem, which is characterized by montane grasslands and
          cloud forests at an elevation of around 2,100 to 2,300 meters. The
          Horton Plains is a crucial habitat for these leopards due to its rich
          biodiversity and relatively undisturbed environment, providing ample
          prey such as sambar deer, wild boar, and smaller mammals. The isolated
          and rugged terrain also offers ideal conditions for leopards to
          thrive, with minimal human interference compared to other regions.
          <br></br>
          <br></br>
          The leopards in Horton Plains are notable not only for their elusive
          nature but also for their unique adaptations to the cooler,
          high-altitude environment. Their presence is a key indicator of the
          health of the ecosystem, as they help maintain the balance by
          controlling prey populations. Conservation efforts in Horton Plains
          focus on protecting these majestic cats and their habitat from threats
          such as poaching, habitat destruction, and human-wildlife conflict.
          Research and monitoring programs are essential for understanding the
          behavior, population dynamics, and ecological role of these leopards,
          contributing to broader conservation strategies aimed at preserving
          Sri Lanka's wildlife heritage.
        </p>
      </div>

      <div className="flex flex-col items-center p-5 mt-7 w-[1000px] population-section">
        <span className="px-2 py-1 text-2xl font-bold text-stone-500">
          Population
        </span>
        <p className="text-[17px] text-gray-500 mt-2">
          The leopard population in Horton Plains National Park, nestled within
          the central highlands of Sri Lanka, is relatively smaller compared to
          other leopard habitats in the country. With an estimated population of
          around 15 to 20 individuals per 100 square kilometers, these leopards
          inhabit the montane grasslands and cloud forests of the park.{" "}
          <br></br>
          <br></br>
          The rugged and isolated terrain of Horton Plains provides a unique
          habitat for these elusive predators, where they prey upon species such
          as sambar deer and smaller mammals. Conservation efforts in Horton
          Plains focus on protecting this smaller leopard population and their
          fragile ecosystem from threats such as poaching and habitat
          degradation, highlighting the importance of preserving this UNESCO
          World Heritage Site as a vital refuge for Sri Lanka's wildlife.
        </p>
      </div>

      <div className="flex flex-col items-center p-5 mt-8 w-[1000px] population-section">
        <span className="px-2 py-1 text-2xl font-bold text-stone-500">
          Mountain leopards vs. Lowland leopards
        </span>
        <p className="text-[17px] text-gray-500 mt-2">
          Although all the leopards found in Sri Lanka belong to the subspecies
          Panthera pardus kotiya, those in the mountainous regions look quite
          different from those in Yala and wilpattu National Parks. The
          altitude, landscape, and cold weather likely contribute to their
          distinct physical characteristics. The leopards in Yala have slim and
          slender faces. For instance, mountain leopards have larger and broader
          facial structures compared to their lowland counterparts. <br></br>
          <br></br>
          Additionally, the mountain leopards appear larger and bulkier than
          those in Yala. This difference is due to the ample food supply
          available in the hills, leading to less competition and easier access
          to prey. The abundance of high-quality protein from Sambar in their
          diet likely contributes to these physiological changes.
        </p>
      </div>

      <div className="flex flex-col items-center p-5 mt-8 w-[1000px] naming-section">
        <span className="px-2 py-1 text-2xl font-bold text-stone-500">
          Naming Format of Horton Plains Leopards
        </span>
        <p className="text-[17px] text-gray-500 mt-5">
          Assigning unique IDs to Leopards for easy identification.<br></br>
          <br></br>
          Male Leopards - HPM## <br></br>
          Female Leopards - HPF##<br></br> <br></br>
          Additionally, some leopards are famous and highly popular, making them
          the most treasured and sought-after sights among visitors. Therefore,
          wildlife enthusiasts have given these gorgeous leopards unique
          identifiers in the area. <br></br>
          The Prince of Horton Plains - HPM08<br></br>
          The Princess of Horton Plains - HPF07
        </p>
      </div>

      <div className="flex flex-col items-center p-5 mt-8 w-[1000px] extent-section">
        <span className="px-2 py-1 text-2xl font-bold text-stone-500">
          Extent of the Horton Plains National park
        </span>
        <div className="flex flex-col items-center w-full h-auto p-3 mt-2 map">
          <img
            src={hortonplainsmap}
            alt=""
            className="w-[750px] h-[500px] opacity-90"
          />
        </div>
        <div className="flex flex-col items-center p-1 source">
          <span className="text-gray-400 text-md">
            Source :Forest types, die back areas and location of sampling sites
            at Horton Plains National Park / Kithsiri B. Ranawana.
          </span>
        </div>
      </div>

      <div className="popular flex flex-col items-center p-5 mt-9 w-[1000px]">
        <span className="px-2 py-1 text-2xl font-bold text-stone-500">
          Gorgeous Mountain Leopards
        </span>
        <div className="flex flex-row items-center justify-center w-full h-auto gap-4 p-2 mt-5 pic-section">
          <div className="flex flex-col items-center w-1/3 p-1 pic-one">
            <img
              src={leopard36}
              alt=""
              className="w-[280px] h-[250px] opacity-95 object-cover"
            />
            <div className="flex flex-col items-center p-1 credits">
              <span className="text-gray-400 text-md">
                Prince of Horton Plains - HPM08
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center w-1/3 p-1 pic-two">
            <img
              src={horton10}
              alt=""
              className="w-[280px] h-[250px] opacity-86 object-cover"
            />
            <div className="flex flex-col items-center p-1 credits">
              <span className="text-gray-400 text-md">
                Legendary leopardess- HPF04
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center w-1/3 p-1 pic-three">
            <img
              src={horton6}
              alt=""
              className="w-[280px] h-[250px] opacity-97 object-cover"
            />
            <div className="flex flex-col items-center p-1 credits">
              <span className="text-gray-400 text-md">
                Princess of Horton Plains - HPF07
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center w-full h-auto gap-4 p-2 mt-5 pic-section">
          <div className="flex flex-col items-center w-1/3 p-1 pic-one">
            <img
              src={horton1}
              alt=""
              className="w-[280px] h-[250px] opacity-95 object-cover"
            />
            <div className="flex flex-col items-center p-1 credits">
              <span className="text-gray-400 text-md">Can you spot him</span>
            </div>
          </div>

          <div className="flex flex-col items-center w-1/3 p-1 pic-two">
            <img
              src={horton2}
              alt=""
              className="w-[280px] h-[250px] opacity-86 object-cover"
            />
            <div className="flex flex-col items-center p-1 credits">
              <span className="text-gray-400 text-md">From the top</span>
            </div>
          </div>
          <div className="flex flex-col items-center w-1/3 p-1 pic-three">
            <img
              src={horton3}
              alt=""
              className="w-[280px] h-[250px] opacity-97 object-cover"
            />
            <div className="flex flex-col items-center p-1 credits">
              <span className="text-gray-400 text-md">Focus on</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center w-full h-auto gap-4 p-2 mt-2 pic-section">
          <div className="flex flex-col items-center w-1/3 p-1 pic-one">
            <img
              src={horton4}
              alt=""
              className="w-[280px] h-[250px] opacity-97 object-cover"
            />
            <div className="flex flex-col items-center p-1 credits">
              <span className="text-gray-400 text-md">
                Sisters- HPF06 and HPF07
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center w-1/3 p-1 pic-two">
            <img
              src={horton5}
              alt=""
              className="w-[280px] h-[250px] opacity-97 object-cover"
            />
            <div className="flex flex-col items-center p-1 credits">
              <span className="text-gray-400 text-md">Stalking the prey</span>
            </div>
          </div>
          <div className="flex flex-col items-center w-1/3 p-1 pic-two">
            <img
              src={horton11}
              alt=""
              className="w-[280px] h-[250px] opacity-97 object-cover"
            />
            <div className="flex flex-col items-center p-1 credits">
              <span className="text-gray-400 text-md">The Duo</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center w-full h-auto gap-4 p-2 mt-2 pic-section">
          <div className="flex flex-col items-center w-1/3 p-1 pic-one">
            <img
              src={horton7}
              alt=""
              className="w-[280px] h-[250px] opacity-97 object-cover"
            />
            <div className="flex flex-col items-center p-1 credits">
              <span className="text-gray-400 text-md">Formidable look</span>
            </div>
          </div>
          <div className="flex flex-col items-center w-1/3 p-1 pic-two">
            <img
              src={horton8}
              alt=""
              className="w-[280px] h-[250px] opacity-97 object-cover"
            />
            <div className="flex flex-col items-center p-1 credits">
              <span className="text-gray-400 text-md">Don't follow me</span>
            </div>
          </div>
          <div className="flex flex-col items-center w-1/3 p-1 pic-two">
            <img
              src={horton9}
              alt=""
              className="w-[280px] h-[250px] opacity-97 object-cover"
            />
            <div className="flex flex-col items-center p-1 credits">
              <span className="text-gray-400 text-md">Head on walk</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end w-[900px] h-auto p-1 pic-credits">
        <span className="text-[10px] italic text-gray-400 p-1">
          Image credits: Respective Owners/ www.google.com.
        </span>
      </div>
    </div>
  );
};

export default Hortonplains;

import React from "react";
import picone from "../assets/LeopardSize.png";
import pictwo from "../assets/MaleLeopard.jpeg";
import picthree from "../assets/LeopardDistribution.png";

const About = () => {
  return (
    <div className="about-container w-5/6 bg-white max-h-[90vh] flex flex-col float-right p-4 items-center overflow-y-scroll">
      <div className="w-full p-2 text-center bg-gray-200 page-title">
        <span className="text-2xl">Leopards Across The World</span>
      </div>
      
      <div className="flex flex-col items-center p-5 mt-6 overview-section w-[1000px]">
        <span className="px-2 py-1 text-2xl font-bold text-stone-500">
          Overview
        </span>
        <p className="text-[17px] text-gray-500 mt-2">
          Leopards boast the most extensive range among all the world's cats,
          spanning across Africa, Asia, and the Far East, inhabiting diverse
          habitats from the lush Congo rainforest to the arid deserts of the
          Middle East. Despite their remarkable ability to adapt, leopard
          populations are dwindling steeply across Africa and Asia.<br></br>
          <br></br>
          Within many African tribes, the leopard holds significant symbolism of
          power, with its skin often utilized for the regal cloaks worn by
          tribal leaders. Besides the Cape buffalo, the leopard is considered
          the second most perilous animal in Africa. Its name originates from
          the Greek words "leo" for lion and "pardus" for panther.
        </p>
      </div>
      <div className="flex flex-col items-center p-5 mt-7 w-[1000px] population-section">
        <span className="px-2 py-1 text-2xl font-bold text-stone-500">
          Population
        </span>
        <p className="text-[17px] text-gray-500 mt-2">
          The leopard roams across approximately 75 countries throughout Africa
          and Eurasia. Regrettably, it is one of the most targeted large cats,
          earning a "Vulnerable" status on the International Union for
          Conservation of Nature (IUCN) Red List of Threatened Species.{" "}
          <br></br>
          <br></br>
          Moreover, the leopard faces even graver threats in specific regions,
          being labeled as "Endangered" in Central Asia and Sri Lanka, and as
          "Critically Endangered" in the Middle East, Russia, and on the
          Indonesian island of Java.
        </p>
      </div>

      <div className="flex flex-col items-center p-5 mt-7 w-[1000px] taxonomy-section">
        <span className="px-2 py-1 text-2xl font-bold text-stone-500">
          Taxonomy
        </span>
        <div className="p-3 mt-2 table-section w-[500px] h-auto shadow-2xl items-center flex flex-col">
          <table className="table-fixed w-full h-full border border-collapse text-[16px]">
            <tbody>
              <tr>
                <td className="p-2 bg-gray-200 border border-slate-600">
                  Kingdom
                </td>
                <td className="p-2 text-orange-600 bg-gray-200 border border-slate-600">
                  ANIMALIA
                </td>
              </tr>
              <tr>
                <td className="p-2 bg-white border border-slate-600">Phylum</td>
                <td className="p-2 text-orange-600 bg-white border border-slate-600">
                  CHORDATA
                </td>
              </tr>
              <tr>
                <td className="p-2 bg-gray-200 border border-slate-600">
                  Super cohort
                </td>
                <td className="p-2 text-orange-600 bg-gray-200 border border-slate-600">
                  LAURASIATHERIA
                </td>
              </tr>
              <tr>
                <td className="p-2 bg-white border border-slate-600">Cohort</td>
                <td className="p-2 text-orange-600 bg-white border border-slate-600">
                  FERUNGULATA
                </td>
              </tr>
              <tr>
                <td className="p-2 bg-gray-200 border border-slate-600">
                  Superorder
                </td>
                <td className="p-2 text-orange-600 bg-gray-200 border border-slate-600">
                  FERAE
                </td>
              </tr>
              <tr>
                <td className="p-2 bg-white border border-slate-600">Order</td>
                <td className="p-2 text-orange-600 bg-white border border-slate-600">
                  CARNIVORA
                </td>
              </tr>
              <tr>
                <td className="p-2 bg-gray-200 border border-slate-600">
                  Suborder
                </td>
                <td className="p-2 text-orange-600 bg-gray-200 border border-slate-600">
                  FELIFORMIA
                </td>
              </tr>
              <tr>
                <td className="p-2 bg-white border border-slate-600">Family</td>
                <td className="p-2 text-orange-600 bg-white border border-slate-600">
                  FELIDAE
                </td>
              </tr>
              <tr>
                <td className="p-2 bg-gray-200 border border-slate-600">
                  Subfamily
                </td>
                <td className="p-2 text-orange-600 bg-gray-200 border border-slate-600">
                  PANTHERINE
                </td>
              </tr>
              <tr>
                <td className="p-2 bg-white border border-slate-600">Genus</td>
                <td className="p-2 italic text-orange-600 bg-white border border-slate-600">
                  PANTHERA
                </td>
              </tr>
              <tr>
                <td className="p-2 bg-gray-200 border border-slate-600">
                  Species
                </td>
                <td className="p-2 italic text-orange-600 bg-gray-200 border border-slate-600">
                  PARDUS
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="size-section flex flex-col items-center p-5 mt-8 w-[1000px]">
        <span className="px-2 py-1 text-2xl font-bold text-stone-500">
          Leopard Size Comparison
        </span>
        <div className="flex flex-row items-center justify-center w-full h-auto gap-4 p-2 mt-4 pic-section">
          <div className="flex flex-col items-center w-1/2 p-3 pic-one">
            <img
              src={picone}
              alt=""
              className="w-[450px] h-[350px] opacity-90"
            />
          </div>
          <div className="flex flex-col items-center w-1/2 p-3 pic-two">
            <img
              src={pictwo}
              alt=""
              className="w-[370px] h-[270px] opacity-90"
            />
          </div>
        </div>
        <div className="flex flex-col items-center p-1 source">
          <span className="text-gray-400 text-md">
            Source – Furstenburg, D, “Focus on Leopard (Panthera pardus)”, 2010,
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center p-5 mt-8 w-[1000px] species-section">
        <span className="px-2 py-1 text-2xl font-bold text-stone-500">
          Leopard Species Identified Around The World
        </span>
        <div className="p-3 mt-4 table-section w-[800px] h-auto shadow-2xl items-center flex flex-col">
          <table className="table-fixed w-full h-full border border-collapse text-[16px]">
            <thead>
              <tr>
                <th className="p-3">Leopard</th>
                <th className="p-3">Scientific Name</th>
                <th className="p-3">Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 bg-gray-200 border border-slate-600">
                  African leopard
                </td>
                <td className="p-3 italic bg-gray-200 border border-slate-600">
                  Panthera pardus pardus
                </td>
                <td className="p-3 bg-gray-200 border border-slate-600">
                  Africa
                </td>
              </tr>
              <tr>
                <td className="p-3 bg-white border border-slate-600">
                  Arabian leopard
                </td>
                <td className="p-3 italic bg-white border border-slate-600">
                  Panthera pardus nimr
                </td>
                <td className="p-3 bg-white border border-slate-600">
                  Arabia
                </td>
              </tr>
              <tr>
                <td className="p-3 bg-gray-200 border border-slate-600">
                  Persian leopard
                </td>
                <td className="p-3 italic bg-gray-200 border border-slate-600">
                  Panthera pardus saxicolor
                </td>
                <td className="p-3 bg-gray-200 border border-slate-600">
                  Turkey, Caucasus, Turkmenistan, Uzbekistan, Iran, Iraq,
                  Afghanistan and Pakistan
                </td>
              </tr>
              <tr>
                <td className="p-3 bg-white border border-slate-600">
                  Javan leopard
                </td>
                <td className="p-3 italic bg-white border border-slate-600">
                  Panthera pardus melas
                </td>
                <td className="p-3 bg-white border border-slate-600">Java</td>
              </tr>
              <tr>
                <td className="p-3 text-blue-900 bg-gray-200 border border-slate-600">
                  Sri Lankan leopard
                </td>
                <td className="p-3 italic text-blue-900 bg-gray-200 border border-slate-600">
                  Panthera pardus kotiya
                </td>
                <td className="p-3 text-blue-900 bg-gray-200 border border-slate-600">
                  Sri Lanka
                </td>
              </tr>
              <tr>
                <td className="p-3 bg-white border border-slate-600">
                  Indian leopard
                </td>
                <td className="p-3 italic bg-white border border-slate-600">
                  Panthera pardus fusca
                </td>
                <td className="p-3 bg-white border border-slate-600">
                  Indian subcontinent Myanmar
                </td>
              </tr>
              <tr>
                <td className="p-3 bg-gray-200 border border-slate-600">
                  Indochinese leopard
                </td>
                <td className="p-3 italic bg-gray-200 border border-slate-600">
                  Panthera pardus delacouri
                </td>
                <td className="p-3 bg-gray-200 border border-slate-600">
                  South-East Asia and probably southern China
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col items-center p-5 mt-8 w-[1000px] population-section">
        <span className="px-2 py-1 text-2xl font-bold text-stone-500">
          Leopard Distribution Across World
        </span>
        <div className="flex flex-col items-center w-full h-auto p-3 mt-2 distribution">
          <img
            src={picthree}
            alt=""
            className="w-[670px] h-[500px] opacity-90"
          />
        </div>
        <div className="flex flex-col items-center p-1 dis-source">
          <span className="text-gray-400 text-md">
            Source :https://www.britannica.com/animal/leopard
          </span>
        </div>
      </div>
    
    </div>
  );
};

export default About;

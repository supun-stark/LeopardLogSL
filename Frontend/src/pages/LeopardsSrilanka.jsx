import React from "react";
import leopard1 from "../assets/leopard1.jpeg";
import leopard2 from "../assets/leopard2.jpeg";
import leopard10 from "../assets/leopard10.jpeg";
import leopard4 from "../assets/leopard4.jpeg";
import leopard5 from "../assets/leopard5.jpeg";
import leopardmap from "../assets/map.jpeg";

const LeopardsSrilanka = () => {
  return (
    <div className="leopards-sl-container w-5/6 bg-white max-h-[90vh] flex flex-col float-right p-4 items-center overflow-y-scroll">
      <div className="w-full p-2 text-center bg-gray-200 page-title">
        <span className="text-2xl">Sri Lankan Leopards</span>
      </div>

      <div className="flex flex-col p-1 mt-2 picture-container">
        <div className="flex flex-row items-center p-2 pics">
          <img className="w-1/5 h-[170px] object-cover" src={leopard1} alt="" />
          <img className="w-1/5 h-[170px] object-cover" src={leopard10} alt="" />
          <img className="w-1/5 h-[170px] object-cover" src={leopard5} alt="" />
          <img className="w-1/5 h-[170px] object-cover" src={leopard4} alt="" />
          <img className="w-1/5 h-[170px] object-cover" src={leopard2} alt="" />
        </div>
      </div>

      <div className="flex flex-col items-center p-5 mt-6 overview-section w-[1000px]">
        <span className="px-2 py-1 text-2xl font-bold text-stone-500">
          Overview
        </span>
        <p className="text-[17px] text-gray-500 mt-2">
          The Sri Lankan leopard (Panthera pardus kotiya) is a subspecies
          indigenous to Sri Lanka, first documented in 1956 by the Sri Lankan
          zoologist Deraniyagala. Its conservation status took a dire turn in
          2008 when it was classified as Endangered on the IUCN Red List. As of
          2015, the wild population is estimated to be between 700 and 950
          individuals.<br></br>
          <br></br>
          Sporting a tawny or rusty yellow coat adorned with dark spots and
          closely-packed rosettes, albeit smaller than those of Indian leopards,
          the Sri Lankan leopard possesses a distinct appearance. Notably, this
          subspecies has evolved into a formidable predator, with some males
          reaching weights nearing 220 lb (100 kg), owing to its status as the
          apex predator in its habitat, unchallenged by other large wild cat
          species in the region.
        </p>
      </div>
      <div className="flex flex-col items-center p-1 source">
        <span className="text-gray-400 text-md">
          Source :Deraniyagala, P. E. P. (1956). "The Ceylon leopard, a distinct
          subspecies". Spolia Zeylanica. 28: 115–116.
        </span>
      </div>

      <div className="flex flex-col items-center p-5 mt-10 w-[1000px] classification-section">
        <span className="px-2 py-1 text-2xl font-bold text-stone-500">
          Scientific Classification
        </span>
        <div className="p-3 mt-2 table-section w-[500px] h-auto shadow-2xl items-center flex flex-col">
          <table className="table-fixed w-full h-full border border-collapse text-[16px]">
            <tbody>
              <tr>
                <td className="p-2 bg-gray-200 border border-slate-600">
                  Kingdom
                </td>
                <td className="p-2 text-orange-600 bg-gray-200 border border-slate-600">
                  Animalia
                </td>
              </tr>
              <tr>
                <td className="p-2 bg-white border border-slate-600">Phylum</td>
                <td className="p-2 text-orange-600 bg-white border border-slate-600">
                  Chordata
                </td>
              </tr>
              <tr>
                <td className="p-2 bg-gray-200 border border-slate-600">
                  Class
                </td>
                <td className="p-2 text-orange-600 bg-gray-200 border border-slate-600">
                  Mammalia
                </td>
              </tr>
              <tr>
                <td className="p-2 bg-white border border-slate-600">Order</td>
                <td className="p-2 text-orange-600 bg-white border border-slate-600">
                  Carnivora
                </td>
              </tr>
              <tr>
                <td className="p-2 bg-gray-200 border border-slate-600">
                  Suborder
                </td>
                <td className="p-2 text-orange-600 bg-gray-200 border border-slate-600">
                  Feliformia
                </td>
              </tr>
              <tr>
                <td className="p-2 bg-white border border-slate-600">Family</td>
                <td className="p-2 text-orange-600 bg-white border border-slate-600">
                  Felidae
                </td>
              </tr>
              <tr>
                <td className="p-2 bg-gray-200 border border-slate-600">
                  Subfamily
                </td>
                <td className="p-2 text-orange-600 bg-gray-200 border border-slate-600">
                  Pantherinae
                </td>
              </tr>
              <tr>
                <td className="p-2 bg-white border border-slate-600">Genus</td>
                <td className="p-2 italic text-orange-600 bg-white border border-slate-600">
                  Panthera
                </td>
              </tr>
              <tr>
                <td className="p-2 bg-gray-200 border border-slate-600">
                  Species
                </td>
                <td className="p-2 italic text-orange-600 bg-gray-200 border border-slate-600">
                  Panthera pardus
                </td>
              </tr>
              <tr>
                <td className="p-2 text-blue-900 bg-white border border-slate-600">
                  Subspecies
                </td>
                <td className="p-2 italic text-blue-900 bg-white border border-slate-600">
                  Panthera pardus kotiya
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col items-center p-5 mt-10 w-[1000px] age-section">
        <span className="px-2 py-1 text-2xl font-bold text-stone-500">
        Age Classfication
        </span>
        <div className="p-3 mt-4 table-section w-[980px] h-auto shadow-2xl items-center flex flex-col">
          <table className="table-fixed w-full h-full border border-collapse text-[16px]">
            <thead>
              <tr>
                <th className="p-3">Age category</th>
                <th className="p-3">Abbreviation used</th>
                <th className="p-3">Basis of separation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 text-center bg-gray-200 border border-slate-600">
                Cub
                </td>
                <td className="p-3 italic text-center bg-gray-200 border border-slate-600">
                  C
                </td>
                <td className="p-3 bg-gray-200 border border-slate-600">
                The period of below 12 months
                </td>
              </tr>
              <tr>
                <td className="p-3 text-center bg-white border border-slate-600">
                Sub Adult
                </td>
                <td className="p-3 italic text-center bg-white border border-slate-600">
                  SA
                </td>
                <td className="p-3 bg-white border border-slate-600">
                The period between 12 to 30 months after observing as a Cub
                </td>
              </tr>
              <tr>
                <td className="p-3 text-center bg-gray-200 border border-slate-600">
                Early adult
                </td>
                <td className="p-3 italic text-center bg-gray-200 border border-slate-600">
                  EA
                </td>
                <td className="p-3 bg-gray-200 border border-slate-600">
                The period between 31 months and 45 Months after observing as a Cub or if the estimated age is less than 4 years.
                </td>
              </tr>
              <tr>
                <td className="p-3 text-center bg-white border border-slate-600">
                Adult
                </td>
                <td className="p-3 italic text-center bg-white border border-slate-600">
                  A
                </td>
                <td className="p-3 bg-white border border-slate-600">An estimated age between 4 years and 8 years</td>
              </tr>
              <tr>
                <td className="p-3 text-center bg-gray-200 border border-slate-600">
                Aged adult
                </td>
                <td className="p-3 italic text-center bg-gray-200 border border-slate-600">
                  AA
                </td>
                <td className="p-3 bg-gray-200 border border-slate-600">
                An estimated age more than 8 year
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col items-center p-1 source">
        <span className="text-gray-400 text-md">
          Source :https://yalaleoparddiary.com
        </span>
      </div>

      <div className="flex flex-col items-center p-5 mt-10 w-[1000px] features-section">
        <span className="px-2 py-1 text-2xl font-bold text-stone-500">
          Features of Sri Lankan Leopards
        </span>
        <ul className="flex flex-col items-start w-auto p-5 mt-3 text-gray-500 list-disc">
          <li className="ml-2 leading-loose">
            Scientific Name: Panthera pardus kotiya - Sri Lankan subspecies
          </li>
          <li className="ml-2 leading-loose">
            Lifespan: Approximately 12 - 15 years in the wild
          </li>
          <li className="ml-2 leading-loose">
            Weight: Males average around 60 kg, Females average around 35 kg
          </li>
          <li className="ml-2 leading-loose">
            Number of Toes: 18 (5 in each fore leg, 4 in hind leg)
          </li>
          <li className="ml-2 leading-loose">
            Sexual Maturity: Typically reached around 2.5 - 3 years of age
          </li>
          <li className="ml-2 leading-loose">
            Gestation Period: Lasts 95 to 105 days
          </li>
          <li className="ml-2 leading-loose">
            Litter Size: Ranges from 1 to 3 cubs
          </li>
          <li className="ml-2 leading-loose">
            Parental Responsibility: The leopardess is primarily responsible for
            rearing and training the cubs
          </li>
          <li className="ml-2 leading-loose">
            Separation from Mother: Occurs around 20-30 months after birth
          </li>
          <li className="ml-2 leading-loose">
            Distribution: Found in Arid, Dry, and Wet zones
          </li>
        </ul>
      </div>


      
      



      <div className="flex flex-col items-center p-5 mt-11 w-[1000px] distribution-section">
        <span className="px-2 py-1 text-2xl font-bold text-stone-500">
        Leopard Distribution in Sri Lanka
        </span>
        <div className="w-auto h-auto p-2 m-1 map-section">
            <img className="shadow-xl" src={leopardmap} alt="" />
        </div>
      </div>

      <div className="flex flex-col items-end w-[1000px] h-auto p-1 pic-credits">
        <span className="text-[10px] italic text-gray-400 p-1">
          Image credits: Respective Owners/ www.google.com.
        </span>
      </div>
    </div>
  );
};

export default LeopardsSrilanka;

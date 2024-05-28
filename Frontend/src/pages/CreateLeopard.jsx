import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import leopard3 from "../assets/leopard3.png";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {toast} from 'react-hot-toast';
import { LeopardContext } from "../context/LeopardContext";

const CreateLeopard = () => {

  const {
    setYalaRecordedLeopards,
    setWilpattuRecordedLeopards,
    setHortonPlainsRecordedLeopards,
  } = useContext(LeopardContext);

  
  const [officialname, setOfficialName] = useState("");
  const [nickname, setNickname] = useState("");
  const [gender, setGender] = useState("");
  const [year, setYear] = useState("");
  const [park, setPark] = useState("");
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();


  const handleRadioButton = (e) => {
    setGender(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  }


  // const submitLeopardData = (e) =>{
  //   e.preventDefault();

  //   axios.post('http://localhost:8001/leopard/add',{officialname, nickname, gender, year, park, image}) 
  //   .then((result) =>{
  //     console.log(result);
  //   })
  //   .catch((err) =>{
  //     console.log(err);
  //   })
  // }

  const validateInputs = () => {
    const newErrors = {};

    if (!officialname) newErrors.officialname = "Official name is required";
    if (!nickname) newErrors.nickname = "Nickname is required";
    if (!gender) newErrors.gender = "Gender is required";
    if (!year) newErrors.year = "Recorded year is required";
    if (!park) newErrors.park = "National park is required";
    if (!image) newErrors.image = "Image is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  
  const submitLeopardData = (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }
  
    const formData = new FormData();
    formData.append("officialname", officialname);
    formData.append("nickname", nickname);
    formData.append("gender", gender);
    formData.append("year", year);
    formData.append("park", park);
    formData.append("image", image);


    axios.post("http://localhost:8001/leopard/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        console.log(result);
        toast.success('Leopard added successfully!');

        // Update the leopard count based on the selected park
        if (park === 'Yala') {
          setYalaRecordedLeopards((prev) => prev + 1);
        } else if (park === 'Wilpattu') {
          setWilpattuRecordedLeopards((prev) => prev + 1);
        } else if (park === 'Hortonplains') {
          setHortonPlainsRecordedLeopards((prev) => prev + 1);
        }
        
        navigate('/leopards')
      })
      .catch((err) => {
        console.log(err);
        toast.error('Failed to add leopard. Please try again.');
      });
  };
  



  return (
    <div className="w-5/6 bg-white h-[90vh] flex flex-col float-right p-4 items-center">
      <div className="w-full p-2 bg-gray-200 text-start page-title">
        <span className="ml-5 text-2xl">Add Leopards</span>
      </div>

      <div className="flex flex-row w-full h-auto gap-3 p-2 main-container">
        <div className="flex flex-col items-center float-left w-2/3 h-auto p-2 mx-3 mt-11 form-section">
          <form className="px-7 py-6 w-[600px] rounded-lg h-auto shadow-xl" onSubmit={submitLeopardData}>
            <div className="w-full px-3 py-1">
              <div className="flex items-center mt-1">
                <label
                  className="w-1/3 text-sm font-bold tracking-wide text-gray-700 uppercase"
                  htmlFor="offname"
                >
                  Official Name
                </label>
                <input
                  className="w-2/3 px-4 py-3 text-lg leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                  name="officialname"
                  id="offname"
                  type="text"
                  placeholder="Enter official name" onChange={(e) => setOfficialName(e.target.value)}
                />
              </div>
              <div className="h-[18px] flex flex-row items-center justify-center error-msg">
              {errors.officialname && <p className="text-xs italic text-red-500">{errors.officialname}</p>}
              </div>

              <div className="flex items-center mt-1">
                <label
                  className="w-1/3 text-sm font-bold tracking-wide text-gray-700 uppercase"
                  htmlFor="nicname"
                >
                  Nickname
                </label>
                <input
                  className="w-2/3 px-4 py-3 text-lg leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                  name="nickname"
                  id="nicname"
                  type="text"
                  placeholder="Enter nickname" onChange={(e) => setNickname(e.target.value)}
                />
              </div>
              <div className="h-[18px] flex flex-row items-center justify-center error-msg">
              {errors.nickname && <p className="text-xs italic text-red-500">{errors.nickname}</p>}
              </div>

              <div className="flex items-center mt-2">
                <label className="w-1/3 text-sm font-bold tracking-wide text-gray-700 uppercase">
                  Gender
                  </label>
                <div className="flex w-2/3">
                  <div className="mr-4 form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="Male"
                      checked={gender === "Male"}
                      onChange={handleRadioButton}
                    />
                    <label
                      className="form-check-label text-[16px] text-gray-400"
                      htmlFor="inlineRadio1"
                    >
                      {" "}
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="Female"
                      checked={gender === "Female"}
                      onChange={handleRadioButton}
                    />
                    <label
                      className="form-check-label text-[16px] text-gray-400"
                      htmlFor="inlineRadio2"
                    >
                      {" "}
                      Female
                    </label>
                  </div>
                </div>
              </div>
              <div className="h-[18px] flex flex-row items-center justify-center error-msg">
              {errors.gender && <p className="text-xs italic text-red-500">{errors.gender}</p>}
              </div>


              <div className="flex items-center mt-1">
                <label
                  className="w-1/3 text-sm font-bold tracking-wide text-gray-700 uppercase"
                  htmlFor="yr"
                >
                  Recorded year
                </label>
                <select
                  className="w-2/3 px-4 py-3 text-lg leading-tight text-gray-400 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                  name="year"
                  id="yr"
                  defaultValue=""
                  onChange={(e) => setYear(e.target.value)}
                >
                  <option value="" disabled>
                    -- Select the year --
                  </option>
                  <option value="2010">2010</option>
                  <option value="2011">2011</option>
                  <option value="2012">2012</option>
                  <option value="2013">2013</option>
                  <option value="2014">2014</option>
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                </select>
              </div>
              <div className="h-[18px] flex flex-row items-center justify-center error-msg">
              {errors.year && <p className="text-xs italic text-red-500">{errors.year}</p>}
              </div>

              <div className="flex items-center mt-1">
                <label
                  className="w-1/3 text-sm font-bold tracking-wide text-gray-700 uppercase"
                  htmlFor="npark"
                >
                  National Park
                </label>
                <select
                  className="w-2/3 px-4 py-3 text-lg leading-tight text-gray-400 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                  name="nationalpark"
                  id="npark"
                  defaultValue=""
                  onChange={(e) => setPark(e.target.value)}
                >
                  <option value="" disabled>
                    -- Choose a national park --
                  </option>
                  <option value="Yala">Yala National Park</option>
                  <option value="Wilpattu">Wilpattu National Park</option>
                  <option value="Hortonplains">
                    Horton Plains National Park
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="h-[18px] flex flex-row items-center justify-center error-msg">
                {errors.park && <p className="text-xs italic text-red-500">{errors.park}</p>}
              </div>

              <div className="flex items-center mt-1">
                <label
                  className="w-1/3 text-sm font-bold tracking-wide text-gray-700 uppercase"
                  htmlFor="pic"
                >
                  Image
                </label>
                <input
                  className="w-2/3 px-4 py-3 text-lg leading-tight text-gray-400 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                  name="image"
                  id="pic"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              <div className="h-[18px] flex flex-row items-center justify-center error-msg">
              {errors.image && <p className="text-xs italic text-red-500">{errors.image}</p>}
              </div>

              <div className="flex justify-center mt-4">
                <button
                  className="px-4 py-2 font-bold text-white bg-green-600 rounded shadow hover:bg-green-900 focus:shadow-outline focus:outline-none"
                  type="submit"
                >
                  Submit
                  <FontAwesomeIcon icon={faPaperPlane} className="mx-2" />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="flex flex-col items-end justify-end float-right w-1/3 pic-section">
          <img src={leopard3} alt="" className="object-cover mb-2" />
        </div>
      </div>
    </div>
  );
};

export default CreateLeopard;

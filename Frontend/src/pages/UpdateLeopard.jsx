import React,{useState, useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-hot-toast';

const UpdateLeopard = () => {

    const {id} = useParams();
    const [initialLeopard, setInitialLeopard] = useState({}); //Added a state for the initial leopard data
    const [officialname, setOfficialName] = useState("");
    const [nickname, setNickname] = useState("");
    const [gender, setGender] = useState("");
    const [year, setYear] = useState("");
    const [park, setPark] = useState("");
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    useEffect(() =>{
        axios.get('http://localhost:8001/getLeopard/'+id)
        .then((result) =>{
            console.log(result)
            setInitialLeopard(result.data); //Set the initial leopard data
            setOfficialName(result.data.officialname);
            setNickname(result.data.nickname);
            setGender(result.data.gender);
            setYear(result.data.year);
            setPark(result.data.park);
            setImage(result.data.image);
        })
        .catch(err =>{
            console.log(err)
        })
    },[])

    const handleRadioButton = (e) => {
        setGender(e.target.value);
      };

      const handleImageChange = (e) => {
        setImage(e.target.files[0]);
      }



      const updateLeopardData = (e) => {
        e.preventDefault();
      
        const formData = new FormData();
        formData.append("officialname", officialname);
        formData.append("nickname", nickname);
        formData.append("gender", gender);
        formData.append("year", year);
        formData.append("park", park);
        
        if (image) {
          formData.append("image", image);
      }
      
        axios.put('http://localhost:8001/leopard/update/'+id, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((result) => {
            console.log(result);
            toast.success('Leopard updated successfully!');
            navigate('/leopards')
          })
          .catch((err) => {
            console.log(err);
            toast.error('Failed to update leopard. Please try again.');
          });
      };





  return (
    <div className="w-5/6 bg-white h-[90vh] flex flex-col float-right p-4 items-center">
    <div className="w-full p-2 bg-gray-200 text-start page-title">
      <span className="ml-5 text-2xl">Update Leopards</span>
    </div>

    <div className="flex flex-row w-full h-auto gap-3 p-2 main-container">
      <div className="flex flex-col items-center float-left w-2/3 h-auto p-2 mx-3 mt-11 form-section">
        <form className="px-7 py-6 w-[600px] rounded-lg h-auto shadow-xl" onSubmit={updateLeopardData}>
          <div className="w-full px-3">
            <div className="flex items-center mt-1 mb-4">
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
                value={officialname}
                onChange={(e) => setOfficialName(e.target.value)}
              />
            </div>

            <div className="flex items-center mb-6">
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
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>

            <div className="flex items-center mb-6">
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

            <div className="flex items-center mb-4">
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
                value={year}
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

            <div className="flex items-center mb-4">
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
                value={park}
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

            <div className="flex items-center mb-4">
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

            <div className="flex justify-center mt-6">
              <button
                className="px-4 py-2 font-bold text-white rounded shadow focus:shadow-outline focus:outline-none bg-[#5D76A9] hover:bg-[#4C516D]"
                type="submit"
              >
                Update
                <FontAwesomeIcon icon={faPaperPlane} className="mx-2" />
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="flex flex-col items-center justify-center float-right w-1/3 pic-section">
       
        {initialLeopard.image && <img src={`http://localhost:8001/upload/${initialLeopard.image}`} alt={initialLeopard.nickname} className="object-cover mb-2 rounded-2xl w-[300px] h-[260px]" />}
        <span className='px-2 py-1 text-xl bg-text-stone-500'>{initialLeopard.nickname}</span>
        
      </div>
    </div>
  </div>
);
}

export default UpdateLeopard
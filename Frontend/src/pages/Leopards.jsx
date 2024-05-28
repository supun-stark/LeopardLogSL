import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {toast} from 'react-hot-toast';

const Leopards = () => {
  const [leopards, setLeopards] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8001/leopards/all")
      .then((results) => {
        setLeopards(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) =>{
    axios.delete('http://localhost:8001/leopard/delete/'+id)
    .then((result) =>{
      console.log(result)
      toast.success('Leopard deleted successfully!');

      // Delay the reload to allow the toast to be visible
      setTimeout(() =>{
        window.location.reload();
      },1500);
    
    })
    .catch(err =>{
      console.log(err)
      toast.error('Failed to delete leopard. Please try again.');
    })
  }

  return (
    <div className="leopard-container w-5/6 h-[90vh] flex flex-col float-right p-4">
      <div className="w-full p-2 text-center bg-gray-200 page-title">
        <span className="text-2xl">Recorded Leopards in Sri Lanka</span>
      </div>

      <div className="w-full max-h-full mt-3 overflow-y-scroll table-section">
        <div className="flex justify-end mt-5 mr-5 btn-section">
          <Link to="/leopards/add">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-900 px-3 py-2 rounded-lg text-[16px] text-white font-bold"
            >
              Add New +
            </button>
          </Link>
        </div>

        <div className="w-full h-auto table-content">
          <table className="w-full h-full px-2 py-3 mt-5 font-semibold border border-collapse table-fixed border-slate-500">
            <thead>
              <tr>
                <th className="w-1/6 p-2 bg-gray-300 border border-slate-500">
                  Leopard
                </th>
                <th className="w-1/6 p-2 bg-gray-300 border border-slate-500">
                  Official Name
                </th>
                <th className="w-1/6 p-2 bg-gray-300 border border-slate-500">
                  Nick Name
                </th>
                <th className="w-1/6 p-2 bg-gray-300 border border-slate-500">
                  Gender | Year
                </th>
                <th className="w-1/6 p-2 bg-gray-300 border border-slate-500">
                  National Park
                </th>
                <th className="w-1/6 p-2 bg-gray-300 border border-slate-500">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {leopards.map((leopard) => {
                return (
                  <tr key={leopard._id}>
                    <td className="px-4 py-2 text-center border border-slate-600">
                      {leopard.image && (
                        <img
                          src={`http://localhost:8001/upload/${leopard.image}`}
                          className="w-[80px] h-[80px] object-cover rounded-2xl block m-auto"
                        />
                      )}
                    </td>
                    <td className="px-5 py-2 border border-slate-600">
                      {leopard.officialname}
                    </td>
                    <td className="px-5 py-2 border border-slate-600">
                      {leopard.nickname}
                    </td>
                    {/* <td className="px-5 py-2 border border-slate-600">{leopard.gender}  |  {leopard.year}</td> */}
                    <td className="px-5 py-2 border border-slate-600">
                      <div className="half-cell">{leopard.gender}</div>
                      <div className="half-cell">{leopard.year}</div>
                    </td>
                    <td className="px-5 py-2 border border-slate-600">
                      {leopard.park}
                    </td>
                    <td className="p-1 border border-slate-600">
                      <Link to={`/leopard/update/${leopard._id}`}>
                        <button className="p-2 bg-[#5D76A9] hover:bg-[#4C516D] rounded-lg text-[15px] text-white font-bold mt-2 ml-1">
                          Update
                          <FontAwesomeIcon
                            icon={faPen}
                            className="ml-1"
                          ></FontAwesomeIcon>
                        </button>
                      </Link>
                      <button className="p-2 bg-red-400 rounded-lg hover:bg-red-900 text-[15px] text-white font-bold ml-2 mt-2" onClick={(e) =>{handleDelete(leopard._id)}}>
                        Delete
                        <FontAwesomeIcon
                          icon={faTrashCan}
                          className="ml-1"
                        ></FontAwesomeIcon>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leopards;

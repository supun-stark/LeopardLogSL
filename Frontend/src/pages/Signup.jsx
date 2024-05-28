import React, { useState } from 'react'
import LoginNavBar from '../components/LoginNavBar'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-hot-toast';

const Signup = () => {

        const [fullname, setFullname] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');
        const [errorPassword, setErrorPassword] = useState(null);
        const [errors, setErrors] = useState({ fullname: '', email: '', password:'', confirmPassword:'' });
        const navigate = useNavigate();


        const validate = () => {
            let isValid = true;
            let errors = {};
    
            if (!fullname) {
                isValid = false;
                errors.fullname = 'Full Name is required';
            } else if (fullname.length < 5) {
                isValid = false;
                errors.fullname = 'Full Name must be at least 5 characters long';
            }
    
            if (!email) {
                isValid = false;
                errors.email = 'Email is required';
            }
    
            if (!password) {
                isValid = false;
                errors.password = 'Password is required';
            } else if (password.length < 6) {
                isValid = false;
                errors.password = 'Password must be at least 6 characters long';
            }
    
            if (!confirmPassword) {
                isValid = false;
                errors.confirmPassword = 'Confirm Password is required';
            } else if (password !== confirmPassword) {
                isValid = false;
                errors.confirmPassword = 'Passwords do not match';
            }
    
            setErrors(errors);
            return isValid;
        };


        const registerData = (e) =>{
            e.preventDefault();
            // Reset password error state
            setErrorPassword(null);  
    
            if (validate()) {
            axios.post('http://localhost:8001/register',{ fullname, email, password})
            .then((result) =>{
                console.log(result);
                toast.success('User registered successfully!');
                navigate('/login')
            })
            .catch((err) =>{
                console.log(err);
                toast.error('User registration failed! Try again.');
            });  
        }

    };

  return (
    <div> 
        <LoginNavBar/>
        <div className="login-container w-full h-[90vh] bg-black">
            <div className="flex flex-row items-center justify-center object-cover w-full h-full p-4 bg-center bg-no-repeat main-section bg-leopard">
                
                <div className="container absolute flex flex-row items-center justify-center h-auto gap-4 p-3 backdrop-brightness-50 ">

               
                <div className="float-left w-1/2 h-full p-3 left-section">
                <div className="flex flex-col items-center justify-end main-title">
                        <h1 className='text-6xl font-bold tracking-widest text-center text-white hover:text-gray-300'>Leopard Log SL</h1>
                        <p className='mt-1 text-4xl text-white font-captionfont'>Explore the paradise of Sri Lankan leopards..</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center float-right w-1/2 h-[280px] p-3 backdrop-brightness-50 right-section">
                    <div className="title">
                        <h1 className='text-lg text-white uppercase'>Signup</h1>
                    </div>
                    <div className="w-[520px] h-auto px-3 py-2 ml-4 form-section">
                        <form onSubmit={registerData}>
                        <div className="flex w-full h-auto mt-2 input-one">
                        <label className='w-1/3 text-xl text-white' htmlFor='fname'>Full Name</label>
                        <input type="text" className='w-2/3 px-3 ml-3 text-xl rounded-md appearance-none focus:outline-none' id='fname' value={fullname} onChange={(e) => setFullname(e.target.value)}/><br></br>
                        </div>
                        <div className="w-full h-[19px] p-1 error-msg flex flex-row items-center justify-center">
                            {errors.fullname && <p className='text-xs italic text-red-500'>{errors.fullname}</p>}
                        </div>

                        <div className="flex w-full h-auto input-two">
                        <label className='w-1/3 text-xl text-white' htmlFor='mail'>Email</label>
                        <input type="email" className='w-2/3 px-3 ml-3 text-xl rounded-md appearance-none focus:outline-none' id='mail' value={email} onChange={(e) => setEmail(e.target.value)}/><br></br>
                        
                        </div>
                        <div className="w-full h-[19px] p-1 error-msg flex flex-row items-center justify-center">
                            {errors.email && <p className='text-xs italic text-red-500'>{errors.email}</p>}
                        </div>

                        <div className="flex w-full h-auto input-three">
                        <label className='w-1/3 text-xl text-white' htmlFor='psswrd'>Password</label>
                        <input type="password" className='w-2/3 px-3 ml-4 text-xl rounded-md appearance-none focus:outline-none' id='psswrd' value={password} onChange={(e) => setPassword(e.target.value)}/><br></br>
                       
                        </div>
                        <div className="w-full h-[19px] p-1 error-msg flex flex-row items-center justify-center">
                            {errors.password && <p className='text-xs italic text-red-500'>{errors.password}</p>}
                        </div>

                        <div className="flex w-full h-auto input-four">
                        <label className='w-1/3 text-xl text-white' htmlFor='conpass'>Confirm Password</label>
                        <input type="password" className='w-2/3 px-3 ml-4 text-xl rounded-md appearance-none focus:outline-none' id='conpass' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/><br></br>
                        
                        </div>
                        <div className="w-full h-[19px] p-1 error-msg flex flex-row items-center justify-center">
                            {errors.confirmPassword && <p className='text-xs italic text-red-500'>{errors.confirmPassword}</p>}
                        </div>

                        <div className="flex flex-col items-center justify-center mt-1 btn-one">
                          <button className='px-4 py-1 text-lg text-white bg-blue-500 rounded-md hover:bg-blue-900' type='submit'>Sign up</button>
                        </div>
                        </form>
                    </div>

                </div>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default Signup
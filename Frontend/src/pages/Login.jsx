import React, { useState, useContext } from 'react'
import LoginNavBar from '../components/LoginNavBar'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { UserContext } from '../context/UserContext';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ username: '', password: '' });
    const { setDisplayName: setContextDisplayname } = useContext(UserContext);
    const navigate = useNavigate();
    

    const validate = () => {
        let isValid = true;
        let errors = {};

        if (!username) {
            isValid = false;
            errors.username = 'Username is required';
        } else if (username.length < 5) {
            isValid = false;
            errors.username = 'Username must be at least 5 characters long';
        }

        if (!password) {
            isValid = false;
            errors.password = 'Password is required';
        } else if (password.length < 6) {
            isValid = false;
            errors.password = 'Password must be at least 6 characters long';
        }

        setErrors(errors);
        return isValid;
    };


    
    const submitUser = (e) => {
        e.preventDefault();
        if (validate()) {
            axios.post('http://localhost:8001/user', { username, password })
                .then((result) => {
                    
                    console.log(result);
                    // Set the username in the context
                    setContextDisplayname(username);
                    toast.success('User login successful!');
                     // Navigate after the toast has been triggered
                     navigate('/home');
                
                })
                .catch((err) => {
                    console.log(err);
                    toast.error('User login unsuccessful. Try again.');
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
                    <div className="py-3 title">
                        <h1 className='text-lg text-white uppercase'>Login</h1>
                    </div>
                    <div className="w-[400px] h-auto px-4 py-2 ml-3 form-section">
                      <form onSubmit={submitUser}>
                        <div className="h-auto mt-2 input-one">
                        <label className='text-xl text-white' htmlFor='username'>Username</label>
                        <input type="text" className='px-3 ml-3 text-xl rounded-md appearance-none focus:outline-none' id='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <div className="w-full h-[18px] p-1 error-msg flex flex-row items-center justify-center">
                            {errors.username && <p className='text-sm italic text-red-500'>{errors.username}</p>}
                        </div>
                        </div>

                        <div className="h-auto mt-1 input-two">
                        <label className='text-xl text-white' htmlFor='psswrd'>Password</label>
                        <input type="password" className='px-3 ml-4 text-xl rounded-md appearance-none focus:outline-none' id='psswrd' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <div className="w-full h-[18px] p-1 error-msg flex flex-row items-center justify-center">
                        {errors.password && <p className='text-sm italic text-red-500'>{errors.password}</p>}
                        </div>
                        
                        </div>

                        <div className="flex flex-col items-center justify-center mt-3 btn-one">
                          <button type='submit' className='px-4 py-1 text-lg text-white bg-blue-500 rounded-md hover:bg-blue-900'>Login</button>
                        </div>
                        <div className="flex flex-row mt-2 option-section">
                        <p className='italic text-white text-md'>Don't have an account?</p>
                        <Link to='/signup'><p className='ml-2 font-semibold text-white underline text-md hover:text-gray-300'>Sign up</p></Link>
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

export default Login
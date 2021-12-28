import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Register = () => {
    const { registerHangler } = useAuth();
    const displayName = useRef('');
    const email = useRef('');
    const pass = useRef('');

    let location = useLocation();
    let navigate = useNavigate();
    const registerHandle = (e) => {
        const user_name = displayName.current.value;
        const user_email = email.current.value;
        const user_pass = pass.current.value;
        const userInfo = {
            displayName: user_name,
            email: user_email,
            password: user_pass
        }
        registerHangler(userInfo, location, navigate);

    }
    return (
        <>
            <Navigation></Navigation>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap justify-center items-center">

                    <div className="lg:w-96 md:w-96 bg-gray-100 rounded-lg p-8 flex  flex-col md:ml-auto lg:ml-auto w-full mt-10 md:mt-0 " style={{ marginLeft: "0px" }}>
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Register</h2>
                        <div className="relative mb-4">

                            <input type="text" id="displaName" name="displaName" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Your Name' ref={displayName} />
                        </div>
                        <div className="relative mb-4">

                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Your Email' ref={email} />
                        </div>
                        <div className="relative mb-4">

                            <input type="password" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Your password' ref={pass} />
                        </div>
                        <button className="text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-orange-500  rounded text-lg" onClick={registerHandle}>Register</button>

                        <p className="text-base text-gray-500 mt-3"><Link to="/login">Your have an account? Go for Login</Link></p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;
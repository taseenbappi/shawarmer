import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {

    let location = useLocation();
    let navigate = useNavigate();

    const { googleSignInHandler, registerUserSignInHangler, isLoading } = useAuth();
    const googleSignIn = () => {
        googleSignInHandler(location, navigate);
    }

    const email = useRef('');
    const pass = useRef('');
    const registerLoginHangle = (e) => {

        const user_email = email.current.value;
        const user_pass = pass.current.value;

        const userInfo = {
            email: user_email,
            password: user_pass
        }

        registerUserSignInHangler(userInfo, location, navigate);
        console.log(userInfo);
    }

    if (isLoading) {
        return <button className="btn btn-sm btn-ghost loading">loading</button>
    }
    return (
        <>
            <Navigation></Navigation>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap justify-center items-center">

                    <div className="lg:w-96 md:w-96 bg-gray-100 rounded-lg p-8 flex  flex-col md:ml-auto lg:ml-auto w-full mt-10 md:mt-0 " style={{ marginLeft: "0px" }}>
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
                        <div className="relative mb-4">

                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Your Email' ref={email} />
                        </div>
                        <div className="relative mb-4">

                            <input type="password" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Your password' ref={pass} />
                        </div>
                        <button className="text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-orange-500  rounded text-lg" onClick={registerLoginHangle}>Login</button>

                        <button onClick={googleSignIn} className="text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-orange-500 rounded text-lg mt-2">Google Login</button>
                        <p className="text-base text-gray-500 mt-3"><Link to="/register">Your have no account? Go for register</Link></p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
import React from 'react';
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className="p-10 text-base-content  bg-gray-100">
            <div class="bg-gray-100 flex items-center">
                <div class=" px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href='/'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span class="ml-3 text-xl">Shawarmer</span>
                    </a>
                    <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">Copyright © 2021-2022
                        <a href="/" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">All right reserved by Bit Software Solutions</a>
                    </p>
                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

                        <a class="ml-3 text-gray-500" href='/'>
                            <IoLogoTwitter className='text-2xl'></IoLogoTwitter>
                        </a>
                        <a class="ml-3 text-gray-500" href='/'>
                            <IoLogoInstagram className='text-2xl'></IoLogoInstagram>
                        </a>
                        <a class="ml-3 text-gray-500" href='/'>
                            <IoLogoLinkedin className='text-2xl'></IoLogoLinkedin>
                        </a>
                        <a class="ml-3 text-gray-500" href='/'>
                            <IoLogoFacebook className='text-2xl'></IoLogoFacebook>
                        </a>
                    </span>
                </div>



            </div>

        </footer>

    );
};

export default Footer;
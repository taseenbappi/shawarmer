import React from 'react';
import { FaHome, FaClipboardList, FaUserFriends } from "react-icons/fa";

const Navigation = () => {
    return (
        <div class="navbar shadow-lg bg-neutral text-neutral-content ">
            <div class="flex-1 px-2 mx-2">
                <span class="text-lg font-bold">
                    Shawarmer
                </span>
            </div>
            <div class="flex-none hidden px-2 mx-2 lg:flex">
                <div class="flex items-stretch">
                    <a class="btn btn-ghost btn-sm rounded-btn" href='/'>
                        <FaHome className='m-1'></FaHome>
                        Home

                    </a>
                    <a class="btn btn-ghost btn-sm rounded-btn" href='/'>
                        <FaClipboardList className='m-1'></FaClipboardList>
                        Knowladge Bank

                    </a>
                    <a class="btn btn-ghost btn-sm rounded-btn" href='/'>
                        <FaUserFriends className='m-1'></FaUserFriends>
                        HR

                    </a>

                </div>

            </div>
            <div class="flex-none">
                <button class="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

        </div>

    );
};

export default Navigation;
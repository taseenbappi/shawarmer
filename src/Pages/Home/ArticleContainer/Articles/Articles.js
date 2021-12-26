import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Articles = () => {
    return (
        <section className="text-gray-600 body-font py-10">

            <h1 className='text-3xl font-bold'>Articles</h1>

            <div className="container px-5 py-24 mx-auto">

                <div className="flex flex-wrap -m-4">

                    <div className="p-4 lg:w-1/3 ">
                        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg shadow-indigo-500/40">
                            <div className='flex justify-between'>
                                <span className='border-2  bg-red-600 p-2 rounded-lg text-white'>25</span>
                                <h2 className="tracking-widest  title-font font-medium text-black mb-1">CATEGORY NAME</h2>
                            </div>
                            <ul className='py-8'>
                                <li>blog-1</li>
                                <li>blog-1</li>
                                <li>blog-1</li>
                                <li>blog-1</li>

                            </ul>
                            <button className="btn btn-outline btn-primary">More <FaArrowRight className='mx-1'></FaArrowRight></button>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/3 ">
                        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg shadow-indigo-500/40">
                            <div className='flex justify-between'>
                                <span className='border-2  bg-red-600 p-2 rounded-lg text-white'>25</span>
                                <h2 className="tracking-widest  title-font font-medium text-black mb-1">CATEGORY NAME</h2>
                            </div>
                            <ul className='py-8'>
                                <li>blog-1</li>
                                <li>blog-1</li>
                                <li>blog-1</li>
                                <li>blog-1</li>

                            </ul>
                            <button className="btn btn-outline btn-primary">More <FaArrowRight className='mx-1'></FaArrowRight></button>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/3 ">
                        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg shadow-indigo-500/40">
                            <div className='flex justify-between'>
                                <span className='border-2  bg-red-600 p-2 rounded-lg text-white'>25</span>
                                <h2 className="tracking-widest  title-font font-medium text-black mb-1">CATEGORY NAME</h2>
                            </div>
                            <ul className='py-8'>
                                <li>blog-1</li>
                                <li>blog-1</li>
                                <li>blog-1</li>
                                <li>blog-1</li>

                            </ul>
                            <button className="btn btn-outline btn-primary">More <FaArrowRight className='mx-1'></FaArrowRight></button>
                        </div>
                    </div>



                </div>
            </div>
        </section>
    );
};

export default Articles;
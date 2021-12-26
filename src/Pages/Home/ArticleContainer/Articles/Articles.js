import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Articles = () => {
    return (
        <section className="text-gray-600 body-font py-10">

            <h1 className='text-3xl font-bold'>Articles Catagories</h1>
            <div className='py-5'>

                <button class="btn btn-outline btn-primary m-2 capitalize">primary</button>
                <button class="btn btn-outline btn-primary m-2 capitalize">primary</button>
                <button class="btn btn-outline btn-primary m-2 capitalize">primary</button>
                <button class="btn btn-outline btn-primary m-2 capitalize">primary</button>

            </div>

            <div className="container px-5 py-24 mx-auto">

                <div className="flex flex-wrap -m-4 items-center justify-center">

                    <div class="card text-center shadow-2xl w-72 m-5">
                        <figure class="px-5 pt-5">
                            <span className='text-xl bg-red-500 text-white p-1 rounded-md '>25</span>
                            <h2 className='text-xl'>Catagories</h2>
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">Articles</h2>
                            <p>Article - 01</p>
                            <p>Article - 01</p>
                            <p>Article - 01</p>
                            <p>Article - 01</p>
                            <div class="justify-center card-actions">
                                <button class="btn btn-outline btn-primary capitalize">More <FaArrowRight className='m-2'></FaArrowRight></button>
                            </div>
                        </div>
                    </div>

                    <div class="card text-center shadow-2xl w-72 m-5">
                        <figure class="px-5 pt-5">
                            <span className='text-xl bg-red-500 text-white p-1 rounded-md '>25</span>
                            <h2 className='text-xl'>Catagories</h2>
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">Articles</h2>
                            <p>Article - 01</p>
                            <p>Article - 01</p>
                            <p>Article - 01</p>
                            <p>Article - 01</p>
                            <div class="justify-center card-actions">
                                <button class="btn btn-outline btn-primary capitalize">More <FaArrowRight className='m-2'></FaArrowRight></button>
                            </div>
                        </div>
                    </div>

                    <div class="card text-center shadow-2xl w-72 m-5">
                        <figure class="px-5 pt-5">
                            <span className='text-xl bg-red-500 text-white p-1 rounded-md '>25</span>
                            <h2 className='text-xl'>Catagories</h2>
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">Articles</h2>
                            <p>Article - 01</p>
                            <p>Article - 01</p>
                            <p>Article - 01</p>
                            <p>Article - 01</p>
                            <div class="justify-center card-actions">
                                <button class="btn btn-outline btn-primary capitalize">More <FaArrowRight className='m-2'></FaArrowRight></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Articles;
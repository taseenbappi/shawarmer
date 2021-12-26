import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";

const CATAGORIES = gql`
    query Catagory {
        catagories {
        id
        cat_name
        }
    }
`;

const Articles = () => {
    const { loading, error, data } = useQuery(CATAGORIES);

    return (
        <section className="text-gray-600 body-font py-10">
            {/* {loading && <p>Loading...</p>}
            {error && <p>Error :(</p>} */}
            <h1 className='text-3xl font-bold'>Articles Catagories</h1>
            <div className='py-3'>
                {data?.catagories?.map(({ cat_name, id }) => (

                    <button key={id} className="btn btn-outline btn-primary m-2 capitalize">{cat_name}</button>

                ))}


            </div>

            <div className="container px-5 py-10 mx-auto">

                <div className="flex flex-wrap -m-4 items-center justify-center">

                    <div className="card text-center shadow-2xl w-72 m-5">
                        <figure className="px-5 pt-5">
                            <span className='text-xl bg-red-500 text-white p-1 rounded-md '>25</span>
                            <h2 className='text-xl'>Catagories</h2>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Articles</h2>
                            <p>Article - 01</p>
                            <p>Article - 01</p>
                            <p>Article - 01</p>
                            <p>Article - 01</p>
                            <div className="justify-center card-actions">
                                <button className="btn btn-outline btn-primary capitalize">More <FaArrowRight className='m-2'></FaArrowRight></button>
                            </div>
                        </div>
                    </div>

                    <div className="card text-center shadow-2xl w-72 m-5">
                        <figure className="px-5 pt-5">
                            <span className='text-xl bg-red-500 text-white p-1 rounded-md '>25</span>
                            <h2 className='text-xl'>Catagories</h2>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Articles</h2>
                            <p>Article - 01</p>
                            <p>Article - 01</p>
                            <p>Article - 01</p>
                            <p>Article - 01</p>
                            <div className="justify-center card-actions">
                                <button className="btn btn-outline btn-primary capitalize">More <FaArrowRight className='m-2'></FaArrowRight></button>
                            </div>
                        </div>
                    </div>

                    <div className="card text-center shadow-2xl w-72 m-5">
                        <figure className="px-5 pt-5">
                            <span className='text-xl bg-red-500 text-white p-1 rounded-md '>25</span>
                            <h2 className='text-xl'>Catagories</h2>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Articles</h2>
                            <p>Article - 01</p>
                            <p>Article - 01</p>
                            <p>Article - 01</p>
                            <p>Article - 01</p>
                            <div className="justify-center card-actions">
                                <button className="btn btn-outline btn-primary capitalize">More <FaArrowRight className='m-2'></FaArrowRight></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Articles;
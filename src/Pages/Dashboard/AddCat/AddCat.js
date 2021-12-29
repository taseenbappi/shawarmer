import { gql, useMutation } from '@apollo/client';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';


import Menu from '../Menu/Menu';
import CatTable from './CatTable';

const ADD_CATAGORY = gql`
mutation AddCatagory($cat_name: String!) {
    insert_catagories(objects: { cat_name: $cat_name}) {
    returning {
        cat_name
        id
    }
    }
}
`;


// `;
const AddCat = () => {

    const cat_name = useRef('');
    const [addCat, { data, loading, error }] = useMutation(ADD_CATAGORY);


    const catagoryHandler = () => {
        const catagory_name = cat_name.current.value;
        const cat_info = {
            cat_name: catagory_name
        }
        addCat({ variables: cat_info });
    }



    if (loading) return 'Submitting...';

    if (error) {

        return <>

            `Submission error!  `
            <h1>Go to </h1>
            <Link className="mr-5 hover:text-orange-500" to='/dashboard'>
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" >Dashboard
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </Link>
        </>;
    };

    return (
        <>
            <Menu></Menu>
            <div className='flex mx-auto py-5'>
                <section className="text-gray-600 body-font ">
                    <div className="container px-5 py-5 mx-auto flex flex-wrap justify-center items-center">

                        <div className="lg:w-96 md:w-96 bg-gray-100 rounded-lg p-8 flex  flex-col md:ml-auto lg:ml-auto w-full mt-10 md:mt-0  shadow-md" style={{ marginLeft: "0px" }}>
                            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Add Article Catagory</h2>

                            <div className="relative mb-4">

                                <input type="text" id="cat_name" name="cat_name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='catagory name' ref={cat_name} />
                            </div>

                            <button className="text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-orange-500  rounded text-lg" onClick={catagoryHandler}>Add</button>
                            {error && <p className='text-red-600'>Duplicate catagory, type unique name</p>}
                            {data?.insert_catagories.returning.length > 0 && <p className='text-green-600'>Catagory added successfully</p>}

                        </div>
                    </div>
                </section>
                <CatTable></CatTable>

            </div>

        </>
    );
};

export default AddCat;
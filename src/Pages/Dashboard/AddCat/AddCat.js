
import React from 'react';
import Menu from '../Menu/Menu';
const AddCat = () => {

    return (

        <>
            <Menu></Menu>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto flex flex-wrap justify-center items-center">

                    <div className="lg:w-96 md:w-96 bg-gray-100 rounded-lg p-8 flex  flex-col md:ml-auto lg:ml-auto w-full mt-10 md:mt-0 " style={{ marginLeft: "0px" }}>
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Add Article Catagory</h2>
                        <div className="relative mb-4">

                            <input type="text" id="cat_name" name="cat_name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='catagory name' />
                        </div>

                        <button className="text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-orange-500  rounded text-lg">Add</button>


                    </div>
                </div>
            </section>
        </>
    );
};

export default AddCat;
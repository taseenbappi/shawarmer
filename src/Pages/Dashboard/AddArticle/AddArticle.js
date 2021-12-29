import React from 'react';
import Menu from '../Menu/Menu';
import useCatagory from '../../../Hooks/useCatagory';
import useSubCatagory from '../../../Hooks/useSubCatagory';



const AddArticle = () => {

    const date = new Date();
    const { catagories } = useCatagory();
    const { sub_catagories } = useSubCatagory();

    return (
        <>
            <Menu></Menu>
            <section className="text-gray-600 body-font shadow-sm">
                <div className="container px-5 py-5 mx-auto flex flex-wrap justify-center items-center">

                    <div className="lg:w-96 md:w-96 bg-gray-100 rounded-lg p-8 flex  flex-col md:ml-auto lg:ml-auto w-full mt-10 md:mt-0 " style={{ marginLeft: "0px" }}>
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Add Article</h2>
                        <div className="relative mb-4">

                            <select className="select select-bordered select-warning w-full max-w-xs">
                                <option disabled="disabled" >Choose Catagory</option>
                                {
                                    catagories?.map(cat => <option
                                        key={cat.id}
                                    >{cat.cat_name}</option>)
                                }

                            </select>
                        </div>
                        <div className="relative mb-4">

                            <select className="select select-bordered select-warning w-full max-w-xs">
                                <option disabled="disabled" >Choose Sub Catagory</option>
                                {
                                    sub_catagories?.map(subCat => <option
                                        key={subCat.id}
                                    >{subCat.sub_cat_name}</option>)
                                }


                            </select>
                        </div>
                        <div className="relative mb-4">

                            <input type="text" id="title" name="title" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='article title' />
                        </div>
                        <div className="relative mb-4">

                            <input type="content" id="content" name="content" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='article content' />
                        </div>
                        <div className="relative mb-4">

                            <input type="text" id="time" name="time" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='date' defaultValue={date.toDateString()} />
                        </div>

                        <button className="text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-orange-500  rounded text-lg">Add</button>


                    </div>
                </div>
            </section>
        </>
    );
};

export default AddArticle;
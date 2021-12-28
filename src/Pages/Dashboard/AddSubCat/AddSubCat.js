import React, { useRef } from 'react';
import { gql, useMutation } from '@apollo/client';
import Menu from '../Menu/Menu';
import { useState } from 'react/cjs/react.development';
import useCatagory from '../../../Hooks/useCatagory';



const ADD_SUB_CATAGORIES = gql`
        mutation subCat($sub_cat_name: String!, $cat_name: String!) {
            insert_sub_catagories(objects: {sub_cat_name: $sub_cat_name, cat_name: $cat_name}) {
            returning {
                sub_cat_name
                id
                catagory {
                cat_name
                id
                }
            }
            }
        }
  
`;

const AddSubCat = (props) => {
    //load all catagories using custom hook
    const { catagories } = useCatagory();

    // const [addSubCat, { data, loading, error }] = useMutation(ADD_SUB_CATAGORIES);
    const [statusValue, setStatusValue] = useState('');

    const handleStatusChange = e => {
        setStatusValue(e.target.value);
    }


    const sub_cat_name = useRef('');

    const subCatagoryHandler = () => {
        const sub_catagory_name = sub_cat_name.current.value;

        const sub_cat_info = {
            sub_cat_name: sub_catagory_name,
            cat_name: statusValue,
        }
        // addSubCat({ variables: sub_cat_info });
    }

    // if (loading) return 'Submitting...';
    // if (error) return `Submission error! ${error.message}`;
    // if (data?.insert_catagories.returning.length > 0) {
    //     alert("sub catagory added!!")
    // }
    return (
        <>
            <Menu></Menu>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto flex flex-wrap justify-center items-center">

                    <div className="lg:w-96 md:w-96 bg-gray-100 rounded-lg p-8 flex  flex-col md:ml-auto lg:ml-auto w-full mt-10 md:mt-0 " style={{ marginLeft: "0px" }}>
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Add Article Sub Catagory</h2>
                        <div className="relative mb-4">

                            <select className="select select-bordered select-warning w-full max-w-xs" onChange={handleStatusChange} >
                                <option disabled="disabled"  >Choose Catagory</option>
                                {
                                    catagories?.map(cat => <option
                                        key={cat.id}

                                    >{cat.cat_name}</option>)
                                }


                            </select>
                        </div>
                        <div className="relative mb-4">

                            <input type="text" id="sub_cat_name" name="sub_cat_name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Sub catagory name' ref={sub_cat_name} />
                        </div>

                        <button className="text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-orange-500  rounded text-lg" onClick={subCatagoryHandler}>Add</button>


                    </div>
                </div>
            </section>
        </>
    );
};

export default AddSubCat;
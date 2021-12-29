import { gql, useMutation } from '@apollo/client';
import React, { useRef } from 'react';
import useCatagory from '../../../Hooks/useCatagory';
import Menu from '../Menu/Menu';

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
// const DELETE_CATAGORY = gql`
// mutation MyMutation($_eq: Int = 19) {
//     delete_catagories(where: {id: {_eq: $_eq}}) {
//       affected_rows
//       returning {
//         id
//         cat_name
//       }
//     }
//   }

// `;
const AddCat = () => {
    const { catagories } = useCatagory();
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
    if (error) return `Submission error! ${error.message}`;
    if (data?.insert_catagories.returning.length > 0) {
        alert("catagory added!!")
    }
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
                            {error && <p>Duplicate catagory, type unique name</p>}

                        </div>
                    </div>
                </section>

                <div className="overflow-x-auto container mx-auto ">
                    <table className="table-auto w-6/12  whitespace-no-wrap mx-auto text-center shadow-md ">
                        <thead>
                            <tr>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">ID</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Catagory Name</th>

                                <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                catagories?.map(cat => <tr
                                    key={cat.id}
                                    className='border-b-2'>
                                    <td className="border-t-2 border-gray-200 px-4 py-3 text-center">{cat.id}</td>
                                    <td className="border-t-2 border-gray-200 px-4 py-3 text-centertext-center">{cat.cat_name}</td>

                                    <td className="border-t-2 border-gray-200 w-10 text-center">
                                        <button className='btn btn-square bg-red-600 border-0 p-1'>X</button>
                                    </td>
                                </tr>)
                            }



                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
};

export default AddCat;
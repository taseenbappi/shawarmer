import { gql, useMutation } from '@apollo/client';
import React from 'react';
import useCatagory from '../../../Hooks/useCatagory';

const DELETE_CAT_DATA = gql`
mutation DelSubCat($_eq: String = "abc") {
    delete_catagories(where: {cat_name: {_eq: $_eq}}) {
      returning {
        cat_name
      }
    }
  }
  
`;

const CatTable = () => {

    const { catagories } = useCatagory();
    const [deleteTodo, { loading: deleting, error: deleteError }] = useMutation(DELETE_CAT_DATA);

    return (
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
    );
};

export default CatTable;
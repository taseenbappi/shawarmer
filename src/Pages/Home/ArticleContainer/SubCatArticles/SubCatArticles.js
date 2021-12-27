import { gql, useQuery } from '@apollo/client';
import React from 'react';
import SubCatCard from '../SubCatCard/SubCatCard';



const SUB_CATAGORIES = gql`
        query SubCatagories {
            sub_catagories {
            id
            sub_cat_name
            cat_id
            }
        }
`;

const SubCatArticles = () => {

    const { loading, error, data } = useQuery(SUB_CATAGORIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const { sub_catagories } = data;


    return (
        <div className=" px-5 py-5 mx-auto bg-gray-50">

            <div className="flex flex-wrap -m-4 items-center justify-center">
                {
                    sub_catagories.map(subCat => <SubCatCard
                        key={subCat.id}
                        subCat={subCat}

                    ></SubCatCard>)
                }


            </div>
        </div>
    );
};

export default SubCatArticles;
import { gql, useQuery } from '@apollo/client';
import React from 'react';


const CATAGORIES = gql`
        query Catagory {
            catagories {
            id
            cat_name
            }
        }
`;

const SUB_CATAGORIES = gql`
        query SubCatagories {
            sub_catagories {
            id
            sub_cat_name
            cat_id
            }
        }
`;


const CatArticles = () => {
    const { loading, error, data } = useQuery(CATAGORIES, SUB_CATAGORIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <section className="text-gray-600 body-font py-10">

            <h1 className='text-3xl font-bold'>Articles Catagories</h1>
            <div className='py-3'>

                {data?.catagories?.map(({ cat_name, id }) => (

                    <button key={id} className="btn btn-outline btn-primary m-2 capitalize">{cat_name}</button>

                ))}

            </div>


        </section>
    );
};

export default CatArticles;
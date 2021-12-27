import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const SubCatCard = (props) => {
    const { sub_cat_name } = props.subCat;

    return (
        <div className="card text-center shadow-2xl w-72 m-5">
            <figure className="px-5 pt-5">
                <span className='text-xl bg-red-500 text-white p-1 rounded-md '>15</span>
                <h2 className='text-xl'>{sub_cat_name}</h2>
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
    );
};

export default SubCatCard;
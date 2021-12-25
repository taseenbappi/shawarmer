import React from 'react';

const Banner = () => {
    return (

        <div className="hero h-96 w-full  " style={{
            backgroundImage: "url(https://picsum.photos/id/1005/1600/1400)"
        }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="text-center hero-content text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">
                        Shawarmer
                    </h1>
                    <p className="mb-3">
                        Shawarmer Knowladge base
                    </p>
                    <div className="flex space-x-2">
                        <input type="text" placeholder="Search" className=" text-black w-full input input-primary input-bordered" />
                        <button className="btn btn-primary">Search</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;
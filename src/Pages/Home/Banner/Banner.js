import React from 'react';

const Banner = () => {
    return (

        <div class="hero min-h-screen" style={{
            backgroundImage: "url(https://picsum.photos/id/1005/1600/1400)"
        }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="text-center hero-content text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">
                        Shawarmer
                    </h1>
                    <p class="mb-3">
                        Shawarmer Knowladge base
                    </p>
                    <div class="flex space-x-2">
                        <input type="text" placeholder="Search" class="w-full input input-primary input-bordered" />
                        <button class="btn btn-primary">Search</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;
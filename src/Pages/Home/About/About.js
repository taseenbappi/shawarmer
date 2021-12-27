import React from 'react';
import about from '../../../images/about.jpg';

const About = () => {
    return (
        <>
            <section className="text-gray-600 body-font " id='about'>
                <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src={about} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About
                            <br className="hidden lg:inline-block " /> <span className='text-orange-600'>Shawarmer</span>
                        </h1>
                        <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus suscipit quas voluptatem, voluptatum repudiandae tempore quisquam dolore accusantium aliquid repellendus.</p>

                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
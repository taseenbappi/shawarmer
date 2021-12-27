import React from 'react';

const Article = (props) => {
    const { title, content, create_time } = props.article;
    const date = new Date(create_time);

    console.log(props.article.sub_catagory)

    return (
        <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font text-gray-700">{props.article.sub_catagory.catagory.cat_name}</span>
                    <span className="mt-1 text-gray-500 text-sm">{date.toDateString()}</span>
                </div>
                <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{title}</h2>
                    <p className="leading-relaxed">{content}</p>
                    <a className="text-indigo-500 inline-flex items-center mt-4" href='/'>Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Article;
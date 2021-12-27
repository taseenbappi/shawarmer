import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import CatArticles from '../ArticleContainer/CatArticles/CatArticles';
import SubCatArticles from '../ArticleContainer/SubCatArticles/SubCatArticles';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <CatArticles></CatArticles>
            <SubCatArticles></SubCatArticles>
            <Footer></Footer>
        </div>
    );
};

export default Home;
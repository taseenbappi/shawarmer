import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Articles from '../ArticleContainer/Articles/Articles';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Articles></Articles>
            <Footer></Footer>
        </div>
    );
};

export default Home;
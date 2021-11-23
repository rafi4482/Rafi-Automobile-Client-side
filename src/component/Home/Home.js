import React from 'react';
import HomeReview from '../HomeReview/HomeReview';

import Brand from './Brand/Brand';
import Extra from './Extra/Extra';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
             {/* <Navigation></Navigation> */}
             <TopBanner></TopBanner>
             <Brand></Brand>
             <Extra></Extra>
             <HomeReview></HomeReview>
        </div>
    );
};

export default Home;
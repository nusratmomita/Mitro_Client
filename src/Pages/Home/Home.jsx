import React from 'react';
import Banner from '../../Components/Banner';
import HowItWorks from '../../Components/HowItWorks';
import FAQ from '../../Components/FAQ';
import CTA from '../../Components/CTA';
import BlogTips from '../../Components/Blog&Tips';
import Contact from '../../Components/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <BlogTips></BlogTips>
            <FAQ></FAQ>
            <CTA></CTA>
            <Contact></Contact>
        </div>
    );
};

export default Home;
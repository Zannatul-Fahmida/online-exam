import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../../Shared/Contact/Contact';
import FeatureShort from '../FeatureShort/FeatureShort';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner />
			<FeatureShort />
			<Testimonial />
			<Contact />
        </div>
    );
};

export default Home;
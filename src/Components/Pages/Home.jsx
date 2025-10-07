import React from 'react';
import Banner from '../Banner/Banner';
import State from '../State/State';
import Apps from './Apps/Apps';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <State></State>
            <Apps></Apps>
        </div>
    );
};

export default Home;
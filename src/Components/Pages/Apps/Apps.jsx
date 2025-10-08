import React from 'react';
import { Link } from 'react-router';
import AppCard from '../AppCard/AppCard';
import useApps from '../../Hooks/useApps';

const Apps = () => {
    const [apps, loading, error]=useApps()
    const appData= apps.slice(0,8)
    return (
        <div className='max-w-[1200px] mx-auto mt-10 text-center space-y-5 border-2'>
            <h1 className='text-4xl font-bold'>Trending Apps</h1>
            <p className='text-[#627382]'>Explore all trending apps on the market developed by us</p>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {
                    appData.map(card => <AppCard key={card.id} card={card}></AppCard>)
                }
            </div>
            <Link to='/allCards' className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white mt-5">Show All</Link>
        </div>
    );
};

export default Apps;
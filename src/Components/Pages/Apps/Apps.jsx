import React from 'react';
import { Link } from 'react-router';
import AppCard from '../AppCard/AppCard';
import useApps from '../../Hooks/useApps';

const Apps = () => {
    const { apps, loading } = useApps()
    const appData = apps.slice(0, 8)

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[80vh]">
                <h1 className='text-9xl'>L</h1>
                <img className="w-28 h-28 animate-spin" src="/src/assets/logo.png" alt="Loading" />
                <h1 className='text-9xl'>ADING</h1>
            </div>
        );
    }
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
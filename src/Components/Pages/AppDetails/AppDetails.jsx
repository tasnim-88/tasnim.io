import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../../Hooks/useApps';
import load from '../../../assets/logo.png'
import download from '../../../assets/icon-downloads.png'
import rating from '../../../assets/icon-ratings.png'
import review from '../../../assets/icon-review.png'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

import AppNotFound from '../AppNotFound/AppNotFound';
import { toast } from 'react-toastify';

const AppDetails = () => {
    const { appId } = useParams();
    const { apps, loading } = useApps();
    const [installed, setInstalled] = useState(false);

    const app = apps.find(a => String(a.id) === appId);

    useEffect(() => {
        if (!app) return;
        const existingApps = JSON.parse(localStorage.getItem('apps')) || [];
        const isInstalled = existingApps.some(p => p.id === app.id);
        setInstalled(isInstalled);
    }, [app]);

    // if (loading) return <p>Loading...</p>;
    if (loading) {
        return (
            <div className="flex items-center justify-center h-[80vh]">
                <h1 className='text-9xl'>L</h1>
                <img className="w-28 h-28 animate-spin" src={load} alt="Loading" />
                <h1 className='text-9xl'>ADING</h1>
            </div>
        );
    }
    if (!app) return <AppNotFound></AppNotFound>

    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = app;

    const handleInstalled = () => {
        const existingApp = JSON.parse(localStorage.getItem('apps')) || [];
        const isDuplicate = existingApp.some(p => p.id === app.id);
        if (isDuplicate) {
            toast.info('App already installed', { position: 'top-center', autoClose: 2000 });
            return;
        }

        const updatedList = [...existingApp, app];
        localStorage.setItem('apps', JSON.stringify(updatedList));
        setInstalled(true);
        toast.success('App Installed Successfully', { position: 'top-center', autoClose: 2000 });
    };

    return (
        <div className='max-w-[1200px] mx-auto mt-10 space-y-5'>
            <div className='flex gap-10'>
                <div><img className='rounded-lg w-[256px] h-[256px]' src={image} alt={title} /></div>
                <div>
                    <div>
                        <h1 className='text-4xl font-bold'>{title}</h1>
                        <p className='text-[#627382]'>
                            Developed By: <span className='text-[#632EE3] font-bold'>{companyName}</span>
                        </p>
                    </div>
                    <div className="divider"></div>
                    <div className='flex justify-between gap-10'>
                        <div>
                            <img src={download} alt="download" />
                            <p className='text-[#627382]'>Downloads</p>
                            <p className='text-3xl font-bold'>{downloads}</p>
                        </div>
                        <div>
                            <img src={rating} alt="rating" />
                            <p className='text-[#627382]'>Average Ratings</p>
                            <p className='text-3xl font-bold'>{ratingAvg}</p>
                        </div>
                        <div>
                            <img src={review} alt="review" />
                            <p className='text-[#627382]'>Total Reviews</p>
                            <p className='text-3xl font-bold'>{reviews}</p>
                        </div>
                    </div>
                    <button
                        onClick={handleInstalled}
                        disabled={installed}
                        className='btn bg-[#00D390] text-white'
                    >
                        {installed ? 'Installed' : `Install Now (${size}MB)`}
                    </button>
                </div>
            </div>

            <div className="divider"></div>
            <div>
                <h1 className='text-2xl font-bold mb-4'>Ratings</h1>
                <div className='w-full h-[300px] bg-gray-50 p-4 rounded-lg shadow-sm'>
                    <ResponsiveContainer width='100%' height='100%'>
                        <BarChart layout='vertical' data={ratings} margin={{ top: 10, right: 30, left: 40, bottom: 0 }}>
                            <CartesianGrid strokeDasharray='3 3' vertical={false} />
                            <XAxis type='number' />
                            <YAxis dataKey='name' type='category' width={70} />
                            <Tooltip />
                            <Bar dataKey='count' fill='#FF8800' barSize={25} radius={[4, 4, 4, 4]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="divider"></div>
            <div>
                <h1 className='text-2xl font-bold'>Description</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;

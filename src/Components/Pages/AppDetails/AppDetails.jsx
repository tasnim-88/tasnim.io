import React from 'react';
import { useParams } from 'react-router';
import useApps from '../../Hooks/useApps';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const AppDetails = () => {
    const { appId } = useParams()
    const [apps, loading, error] = useApps()
    const app = apps.find(a => String(a.id) === appId)
    // console.log(app);
    if (loading) return <p>Loading.....</p>
    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = app


    const handleInstalled = () => {
        const existingApp = JSON.parse(localStorage.getItem('apps'))
        let updatedList = []
        if (existingApp) {
            const isDuplicate = existingApp.some(p => p.id === app.id)
            if (isDuplicate) return alert('Sorry vai')
            updatedList = [...existingApp, app]
        } else {
            updatedList.push(app)
        }
        localStorage.setItem('apps', JSON.stringify(updatedList))
    }

    return (
        <div className='max-w-[1200px] mx-auto mt-10 space-y-5'>
            <div className='flex gap-10'>
                <div><img src={image} alt="" /></div>
                <div>
                    <div>
                        <h1 className='text-4xl font-bold'>{title}</h1>
                        <p className='text-[#627382]'>Developed By: <span className='text-[#632EE3] font-bold'>{companyName}</span></p>
                    </div>
                    <div className="divider"></div>
                    <div className='flex justify-between gap-10'>
                        <div>
                            <img src="/src/assets/icon-downloads.png" alt="" />
                            <p className='text-[#627382]'>Downloads</p>
                            <p className='text-3xl font-bold'>{downloads}</p>
                        </div>
                        <div>
                            <img src="/src/assets/icon-ratings.png" alt="" />
                            <p className='text-[#627382]'>Average Ratings</p>
                            <p className='text-3xl font-bold'>{ratingAvg}</p>
                        </div>
                        <div>
                            <img src="/src/assets/icon-review.png" alt="" />
                            <p className='text-[#627382]'>Total Reviews</p>
                            <p className='text-3xl font-bold'>{reviews}</p>
                        </div>
                    </div>
                    <button onClick={handleInstalled} className='btn bg-[#00D390] text-white'>Install Now ({size}MB)</button>

                </div>
            </div>
            <div className="divider"></div>
            <div>
                <h1 className='text-2xl font-bold mb-4'>Ratings</h1>
                <div className='w-full h-[300px] bg-gray-50 p-4 rounded-lg shadow-sm'>
                    <ResponsiveContainer width='100%' height='100%'>
                        <BarChart
                            layout='vertical'
                            data={ratings}
                            margin={{ top: 10, right: 30, left: 40, bottom: 0 }}
                        >
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
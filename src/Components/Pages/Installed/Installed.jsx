import React, { useEffect, useState } from 'react';
import { PiDownloadSimpleBold } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { toast } from 'react-toastify';


const Installed = () => {

    const [appList, setAppList] = useState([])
    const [sortOrder, setSortOrder] = useState('none')
    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem('apps'))
        if (savedList) setAppList(savedList)
    }, [])


    const sortedItem = (() => {
        if (sortOrder === 'app-asc') {
            return [...appList].sort((a, b) => {
                const aVal = parseFloat(a.downloads) || 0;
                const bVal = parseFloat(b.downloads) || 0;
                return aVal - bVal;
            });
        } else if (sortOrder === 'app-desc') {
            return [...appList].sort((a, b) => {
                const aVal = parseFloat(a.downloads) || 0;
                const bVal = parseFloat(b.downloads) || 0;
                return bVal - aVal;
            });
        } else {
            return appList;
        }
    })();

    const handleRemove = id => {
        // remove from localstorage
        const existingApp = JSON.parse(localStorage.getItem('apps'))
        let updatedList=existingApp.filter(p=> p.id !== id)
        // removeFromWishlist(id)
        // for ui instant update
        setAppList(updatedList)
        // setAppList(prev => prev.filter(p => p.id !== id))
        localStorage.setItem('apps', JSON.stringify(updatedList))
        toast.success('Uninstalled Successfully!')
    }


    return (
        <div className='max-w-[1200px] mx-auto mt-10 space-y-5'>

            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Your Installed Apps</h1>
                <p className='text-[#627382]'>Explore all trending apps on the market developed by us</p>
            </div>

            <div className='flex justify-between items-center mt-10 mb-10'>
                <h1 className='text-xl font-bold'>{appList.length} apps found</h1>
                <label className='form-control w-full max-w-xs'>
                    <select
                        className='select select-bordered'
                        value={sortOrder}
                        onChange={e => setSortOrder(e.target.value)}
                    >
                        <option value='none'>Sort by price</option>
                        <option value='app-asc'>Low-&gt;High</option>
                        <option value='app-desc'>High-&gt;Low</option>
                    </select>
                </label>
            </div>

            {sortedItem.map(p =>
                <div className='flex justify-between items-center shadow-sm p-4 rounded-lg bg-gray-50'>
                    <div className='flex items-center gap-4'>
                        <div><img className='h-[80px] w-[80px] rounded-lg' src={p.image} alt="" /></div>
                        <div>
                            <h1>{p.title}</h1>
                            <div className="flex gap-5">
                                <div className="text-[#00D390] flex items-center gap-2"><PiDownloadSimpleBold />{p.downloads}</div>
                                <div className="text-[#FF8811] flex items-center gap-2"><FaStar />{p.ratingAvg}</div>
                                <div>{p.size} MB</div>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => handleRemove(p.id)} className='btn btn-accent'>Uninstall</button>
                </div>
            )}

        </div>
    );
};

export default Installed;
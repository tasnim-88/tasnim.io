import React, { useState, useEffect, useRef } from 'react';
import { CiSearch } from "react-icons/ci";
import useApps from '../../Hooks/useApps';
import { Link } from 'react-router';
import AppCard from '../AppCard/AppCard';

const AllCards = () => {
    const { apps, loading } = useApps();
    const [search, setSearch] = useState('');
    const [searchLoading, setSearchLoading] = useState(false);
    const [filteredApps, setFilteredApps] = useState([]);
    const searchInputRef = useRef(null); // ✅ keep focus

    useEffect(() => {
        setFilteredApps(apps);
    }, [apps]);

    useEffect(() => {
        const term = search.trim().toLowerCase();

        if (term === '') {
            setFilteredApps(apps);
            setSearchLoading(false);
            return;
        }

        setSearchLoading(true);

        const timer = setTimeout(() => {
            const result = apps.filter(app =>
                app.title.toLowerCase().includes(term)
            );
            setFilteredApps(result);
            setSearchLoading(false);

            // ✅ restore focus after re-render
            if (searchInputRef.current) {
                searchInputRef.current.focus();
                searchInputRef.current.setSelectionRange(search.length, search.length);
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [search, apps]);

    if (loading || searchLoading) {
        return (
            <div className="flex items-center justify-center h-[80vh]">
                <h1 className='text-9xl'>L</h1>
                <img
                    className="w-28 h-28 animate-spin"
                    src="/src/assets/logo.png"
                    alt="Loading"
                />
                <h1 className='text-9xl'>ADING</h1>
            </div>
        );
    }

    return (
        <>
            <div className='max-w-[1200px] mx-auto mt-10 text-center space-y-5'>
                <h1 className='text-4xl font-bold'>Our All Applications</h1>
                <p className='text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions.</p>

                <div className='flex justify-between items-center'>
                    <h1 className='text-2xl font-bold'>
                        <span>({filteredApps.length})</span> Apps Found
                    </h1>

                    <div className="relative w-full max-w-sm">
                        <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
                        <input
                            ref={searchInputRef} // ✅ attach ref
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search Apps"
                            autoComplete="off"
                            className="w-full rounded-sm bg-gray-50 p-2 pl-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                </div>
            </div>

            <div className='max-w-[1200px] mx-auto mt-10 text-center space-y-5'>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {filteredApps.length > 0 ? (
                        filteredApps.map(card => <AppCard key={card.id} card={card} />)
                    ) : (
                        <div className="col-span-full text-center py-10">
                            <img
                                src="/src/assets/App-Error.png"
                                alt="No Apps Found"
                                className="mx-auto w-[150px] mb-4"
                            />
                            <h2 className="text-2xl font-bold text-gray-700">No Apps Found</h2>
                            <p className="text-gray-500">
                                Try adjusting your search or explore other categories.
                            </p>
                            <Link
                                to={'/'}
                                className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white"
                            >
                                Go Back!
                            </Link>
                        </div>
                    )}
                </div>
            </div>

        </>
    );
};

export default AllCards;

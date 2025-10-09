import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { Link, useNavigation } from 'react-router';
import useApps from '../../Hooks/useApps';
import AppCard from '../AppCard/AppCard';
import load from '../../../assets/logo.png';
import apperror from '../../../assets/App-Error.png';

const AllCards = () => {
    const { apps, loading } = useApps();
    const [search, setSearch] = useState('');
    const [searching, setSearching] = useState(false);
    const [filteredApps, setFilteredApps] = useState(apps);
    const navigation = useNavigation(); 

    
    useEffect(() => {
        if (!apps.length) return;
        setSearching(true);

        const timer = setTimeout(() => {
            const term = search.trim().toLowerCase();
            const results = term
                ? apps.filter(app => app.title.toLowerCase().includes(term))
                : apps;
            setFilteredApps(results);
            setSearching(false);
        }, 500); 

        return () => clearTimeout(timer);
    }, [search, apps]);

    
    if (loading) {
        return (
            <div className="flex items-center justify-center h-[80vh]">
                <h1 className="text-9xl">L</h1>
                <img className="w-28 h-28 animate-spin" src={load} alt="Loading" />
                <h1 className="text-9xl">ADING</h1>
            </div>
        );
    }

    
    if (navigation.state === "loading") {
        return (
            <div className="flex flex-col items-center justify-center h-[80vh] space-y-4">
                <div className="w-16 h-16 border-4 border-[#9F62F2] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-lg font-medium text-gray-600">Navigating...</p>
            </div>
        );
    }

    return (
        <div className="max-w-[1200px] mx-auto mt-10 text-center space-y-5">
            <h1 className="text-4xl font-bold">Our All Applications</h1>
            <p className="text-[#627382]">Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">
                    <span>({filteredApps.length})</span> Apps Found
                </h1>

                <div className="relative w-full max-w-sm">
                    <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="search"
                        placeholder="Search Apps"
                        className="w-full rounded-sm bg-gray-50 p-2 pl-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>
            </div>

            
            {searching ? (
                <div className="flex flex-col items-center justify-center py-20 space-y-4">
                    <div className="w-14 h-14 border-4 border-[#632EE3] border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-gray-600">Searching apps...</p>
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {filteredApps.length > 0 ? (
                        filteredApps.map((card) => <AppCard key={card.id} card={card} />)
                    ) : (
                        <div className="col-span-full text-center py-10">
                            <img
                                src={apperror}
                                alt="No Apps Found"
                                className="mx-auto w-[150px] mb-4"
                            />
                            <h2 className="text-2xl font-bold text-gray-700">No Apps Found</h2>
                            <p className="text-gray-500">
                                Try adjusting your search or explore other categories.
                            </p>
                            <Link
                                to="/"
                                className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white"
                            >
                                Go Back!
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default AllCards;

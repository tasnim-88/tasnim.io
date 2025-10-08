import React from 'react';
import { PiDownloadSimpleBold } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';


const AppCard = ({ card }) => {
    // console.log(card);

    return (
        <Link to={`/appDetails/${card.id}`} className="card bg-base-100 shadow-sm hover:scale-105 transition ease-in-out">
            <figure className='p-4'>
                <img className='rounded-lg w-[256px] h-[256px]'
                    src={card.image}
                    alt="App" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {card.title}
                </h2>
                <div className="flex justify-between">
                    <div className="badge bg-[#F1F5E8] text-[#00D390]"><PiDownloadSimpleBold />{card.downloads}</div>
                    <div className="badge bg-[#FFF0E1] text-[#FF8811]"><FaStar />{card.ratingAvg}</div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;
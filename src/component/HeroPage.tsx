import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../data/dataHomePage.json';

const ITEMS_PER_PAGE = 4;

const HeroPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const handleMoreClick = (titleforRouting: string) => {
    navigate(`/details/${titleforRouting}`);
  };

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const paginatedData = data.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="flex flex-col items-center">
      {/* Card Container */}
      <div className="flex flex-wrap justify-center">
        {paginatedData.map((item, index) => (
          <div key={index} className="w-[300px] h-[5/12] flex flex-col items-center justify-center m-5 hover:bg-gray-200 border-2 border-gray-700 shadow-lg rounded-md p-2">
            <img src={item.imageSrc} alt={item.title} className="w-[230px] h-[120px] rounded-md" />
            <div>
              <h1 className={"text-center font-bold tracking-wide text-XL mx-2 text-orange-600"}>{item.title}</h1>
              <p>{item.Introduction}</p>
            </div>
            <a onClick={() => handleMoreClick(item.titleforRouting)} className="text-center text-blue-600 hover:text-blue-800 cursor-pointer">More</a>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 border ${currentPage === index + 1 ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroPage;

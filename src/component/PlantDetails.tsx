import React from 'react';
import { useParams } from 'react-router-dom';
import fullData from '../data/data.json';

const PlantDetails = () => {
  const { titleforRouting } = useParams<{ titleforRouting: string }>();
  const plantDetails = fullData.find((item) => item?.titleforRouting === titleforRouting);

  if (!plantDetails) {
    return <div>Plant details not found.</div>;
  }

  return (
    <div className="p-5 mt-10 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 text-center">{plantDetails.title}</h1>
      <img src={plantDetails.imageSrc} alt={plantDetails.title} className="w-full max-w-md h-auto rounded-md mb-6" />
      <p className="mb-2 text-center"><strong className={"text-lg font-bold text-lime-700   mb-2"}>INTRODUCTION</strong> <br /> {plantDetails.Introduction}</p>
      <br /> 
      <p className="mb-2 text-center"><strong className={"text-lg font-bold text-lime-700 text-center mb-2"}>USES</strong> <br />{plantDetails.Uses}</p>
      <br /> 
      <p className="mb-2 text-center"><strong className={"text-lg font-bold text-lime-700 text-center mb-2"}>CULTIVATION</strong> <br />{plantDetails.Cultivation}</p>
      <br /> 
      <p className="mb-2 text-center"><strong className={"text-lg font-bold text-lime-700 text-center mb-2"}>PREPARATION</strong > <br />{plantDetails.Preparation}</p>
    </div>
  );
};

export default PlantDetails;

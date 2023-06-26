import React from 'react';


const Cards = ({ title, text }) => {
  return (
    <div className="bg-main p-6 w-60 h-auto rounded-lg shadow-md text-center">
     <h3 className=" text-emerald-400 text-3xl mb-2">{title}</h3>
      <p className="text-black text-lg">{text}</p>
    </div>
  );
};

export default Cards;

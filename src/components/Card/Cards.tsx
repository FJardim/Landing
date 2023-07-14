import React from "react";

const Cards = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="bg-main p-6 w-60 h-40 rounded-lg shadow-md text-center">
      <div className="p-4">
        <h3 className=" text-emerald-600 font-bold text-4xl mb-2">{title}</h3>
        <p className="text-black text-base">{text}</p>
      </div>
    </div>
  );
};

export default Cards;

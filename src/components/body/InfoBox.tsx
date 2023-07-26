import React from "react";

interface InfoBoxProps {
  title: string;
  content: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, content }) => {
  return (
    <div className="text-center p-3 border border-gray-100 rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <p className="text-base font-light">{content}</p>
    </div>
  );
};

export default InfoBox;

import React from "react";
import { SlDocs } from "react-icons/sl";

export default function Gestion({
  title,
  parraph,
}: {
  title: string;
  parraph: string;
}) {
  return (
    <div className="w-full h-auto p-20 flex justify-center items-center">
      <div className="max-w-md text-justify">
        <p className="text-5xl font-regular mb-10">{title}</p>
        <p className="text-4xl font-regular">{parraph}</p>
      </div>
      <div className="ml-40">
        <SlDocs size={120} className="text-main" />
      </div>
    </div>
  );
}

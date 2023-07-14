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
    <div className="w-full h-auto flex justify-center items-center p-4 ">
      <div className="max-w-md text-justify lg:p-0 p-6">
        <p className="lg:text-5xl text-2xl text-center font-semibold lg:mb-10">
          {title}
        </p>
        <p className="lg:text-4xl text-lg">{parraph}</p>
      </div>
      <div className="ml-40 hidden lg:block">
        <SlDocs size={240} className="text-main" />
      </div>
    </div>
  );
}

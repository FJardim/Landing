import React from "react";
import Maps from "./Maps";
export default function MapContainer() {
  return (
    <div className="">
      <p className="justify-center flex text-5xl font-semibold mb-6 mt-6">
        Nuestas Oficinas
      </p>
      <div className="Container w-full flex justify-center">
        <div className="w-full p-20">
          <Maps />
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import GoogleMapReact from 'google-map-react';

export default function Maps() {
  const defaultCenter = {
    lat: -34.6037,
    lng: -58.3816
  };

  return (
    <div style={{ height: '100vh', width: '100%' }} className=''>
      <GoogleMapReact
        defaultCenter={defaultCenter}
        defaultZoom={10}
      >
        </GoogleMapReact>
    </div>
  );
}

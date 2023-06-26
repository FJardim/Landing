import React from 'react';
import GoogleMapReact from 'google-map-react';

export default function Maps() {
  const defaultCenter = {
    lat: -34.6037,
    lng: -58.3816
  };

  const apiKey = 'AIzaSyDkAJA-uOdmLgb0WSrMePZp4pvA4s6fT7w';

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        defaultCenter={defaultCenter}
        defaultZoom={10}
        bootstrapURLKeys={{ key: 'AIzaSyDkAJA-uOdmLgb0WSrMePZp4pvA4s6fT7w' }}
      >
      </GoogleMapReact>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import Map, { Marker } from 'react-map-gl';
import { Navigation } from 'lucide-react';
import 'mapbox-gl/dist/mapbox-gl.css';

const LiveTracking = () => {
  const [currentPosition, setCurrentPosition] = useState({
    lat: -3.745,
    lng: -38.523
  });
  const [viewState, setViewState] = useState({
    longitude: -38.523,
    latitude: -3.745,
    zoom: 15
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      // Get initial position
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition({
            lat: latitude,
            lng: longitude
          });
          setViewState(prev => ({
            ...prev,
            latitude,
            longitude
          }));
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );

      // Watch for position changes
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition({
            lat: latitude,
            lng: longitude
          });
          setViewState(prev => ({
            ...prev,
            latitude,
            longitude
          }));
        },
        (error) => {
          console.error("Error watching location:", error);
        }
      );

      return () => navigator.geolocation.clearWatch(watchId);
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_API_KEY}
      >
        <Marker 
          longitude={currentPosition.lng} 
          latitude={currentPosition.lat}
        >
          <Navigation className="text-blue-600" size={24} />
        </Marker>
      </Map>
    </div>
  );
};

export default LiveTracking;
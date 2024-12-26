import React, { useState, useEffect } from 'react';
import Map, { Marker } from 'react-map-gl';

const containerStyle = {
    width: '100%',
    height: '100%',
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const LiveTracking = () => {
    const [currentPosition, setCurrentPosition] = useState(center);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setCurrentPosition({
                lat: latitude,
                lng: longitude
            });
        });

        const watchId = navigator.geolocation.watchPosition((position) => {
            const { latitude, longitude } = position.coords;
            setCurrentPosition({
                lat: latitude,
                lng: longitude
            });
        });

        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    useEffect(() => {
        const updatePosition = () => {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;

                console.log('Position updated:', latitude, longitude);
                setCurrentPosition({
                    lat: latitude,
                    lng: longitude
                });
            });
        };

        updatePosition(); // Initial position update

        const intervalId = setInterval(updatePosition, 1000); // Update every 10 seconds

    }, []);

    return (
        <Map
            initialViewState={{
                longitude: currentPosition.lng,
                latitude: currentPosition.lat,
                zoom: 15
            }}
            style={containerStyle}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken={import.meta.env.VITE_MAPBOX_API_KEY}
        >
            <Marker longitude={currentPosition.lng} latitude={currentPosition.lat} />
        </Map>
    );
};

export default LiveTracking;
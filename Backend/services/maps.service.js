const axios = require('axios');
const captainModel = require('../models/captain.model');

module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.MAPBOX_API_KEY;
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.features && response.data.features.length > 0) {
            const location = response.data.features[0].center;
            return {
                lng: location[0],
                ltd: location[1]
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports.getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('Origin and destination are required');
    }

    const apiKey = process.env.MAPBOX_API_KEY;

    const originCoordinates = await this.getAddressCoordinate(origin);
    const destinationCoordinates = await this.getAddressCoordinate(destination);

    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${originCoordinates.lng},${originCoordinates.ltd};${destinationCoordinates.lng},${destinationCoordinates.ltd}?access_token=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.routes && response.data.routes.length > 0) {
            const route = response.data.routes[0];
            return {
                distance: {
                    text: `${(route.distance / 1000).toFixed(2)} km`,
                    value: route.distance
                },
                duration: {
                    text: `${Math.round(route.duration / 60)} mins`,
                    value: route.duration
                }
            };
        } else {
            throw new Error('Unable to fetch distance and time');
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports.getAutoCompleteSuggestions = async (input) => {
    if (!input) {
        throw new Error('query is required');
    }

    const apiKey = process.env.MAPBOX_API_KEY;
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(input)}.json?access_token=${apiKey}&autocomplete=true`;

    try {
        const response = await axios.get(url);
        if (response.data.features && response.data.features.length > 0) {
            return response.data.features.map(feature => feature.place_name).filter(value => value);
        } else {
            throw new Error('Unable to fetch suggestions');
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {
    // radius in km
    const captains = await captainModel.find({
        location: {
            $geoWithin: {
                $centerSphere: [[lng, ltd], radius / 6371]
            }
        }
    });

    return captains;
}
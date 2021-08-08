import React from 'react';
import axios from "axios";

const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const placeData = async(bounds)=> {
    try {
        console.log("bound ", bounds);
        const data = await axios.get(url, {
            params: {
              bl_latitude: bounds.sw.lat,
              tr_latitude: bounds.ne.lat,
              bl_longitude: bounds.sw.lng,
              tr_longitude: bounds.ne.lat,
            },
            headers: {
              'x-rapidapi-key': 'c00e277ab0msh2649c631c4bf8bdp10e22bjsn8163e2fc56c8',
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
            }
          });
        return data;
    }catch(error) {
        console.log("Error ", error);
    }
}

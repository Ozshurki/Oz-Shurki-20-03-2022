import axios from "axios";

const API_KEY = "38zL5JJBzB8fxXNTGy04i2HibhNw6E0i";


export const getAutoCompleteResults = async (input: string) => {
    const res = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${input}`);
    return res.data;
};

export const getLocationKeyByCoordinates = async (coords: any) => {
    const res = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${coords.latitude}%2C${coords.longitude}`);
    return res.data;
};

export const getCurrentConditionsResults = async (locationKey: number) => {
    const res = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}`);
    return res.data;
};

export const getForeCastResults = async (locationKey: number) => {
    const res = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/locationKey=${locationKey}_PC?apikey=38zL5JJBzB8fxXNTGy04i2HibhNw6E0i`);
    return res.data;
};
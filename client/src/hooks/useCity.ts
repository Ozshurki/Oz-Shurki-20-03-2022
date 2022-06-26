import {useState} from "react";

const useCity = () => {
    const [locationKey, setLocationKey] = useState<number>(261342);
    const [cityName, setCityName] = useState<string>("Sur Baher");
    const [countryName, setCountryName] = useState<string>("Palestine");

    const setCity = (key: number, cityName: string, countryName: string) => {
        setLocationKey(key);
        setCityName(cityName);
        setCountryName(countryName);
    };

    return {locationKey, cityName, countryName, setCity};
};

export default useCity;
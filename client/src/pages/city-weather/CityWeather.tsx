import React, {useEffect, useState} from "react";
import "./CityWeather.css"
import {useParams} from "react-router-dom";
import SearchField from "../../components/search-field/SearchField";
import WeatherContent from "../../components/weather-content/WeatherContent";
import {motion} from "framer-motion";
import {CityDetails} from "../../shared/types/city-details";
import {homeVariants} from "../weather/Weather";
import {RootStateOrAny, useSelector} from "react-redux";
import {CityType} from "../../shared/types/city";


const CityWeather:React.FC = () => {

    const {id} = useParams<{id:string}>();
    const [locationKey, setLocationKey] = useState<number>(215854);
    const [city, setCityName] = useState<string>('Tel Aviv');
    const [country, setCountry] = useState<string>('Israel');
    const savedCities = useSelector((state: RootStateOrAny) => state.favorites.cities);


    const setCity = (key: number, cityName: string, countryName: string) => {
        setLocationKey(key);
        setCityName(cityName);
        setCountry(countryName);
    };

    useEffect(() => {
        savedCities.forEach((city:CityType) => {
            if(city.key.toString() === id){
                setCity(city.key, city.cityName, city.countryName);
                return;
            }
        })
    },[id])

    return(
        <motion.div className="weather-page"
                    variants={homeVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit">
            <SearchField setCity={setCity}/>
            <WeatherContent locationKey={locationKey}
                            city={city}
                            country={country}/>
        </motion.div>
    )
}

export default CityWeather;
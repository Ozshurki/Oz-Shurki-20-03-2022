import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {useDispatch} from "react-redux";


import SearchField from "../../components/search-field/SearchField";
import WeatherContent from "../../components/weather-content/WeatherContent";
import {getLocationKeyByCoordinates} from "../../apis/ApiServices";
import {modalActions} from "../../store/slices/modal";
import "./Weather.css";


export const homeVariants = {
    hidden: {
        opacity: 0,
        x: "100vw"
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {duration: 0.8, ease: "easeInOut"}
    },
    exit: {
        x: '-100vw',
        transition: {
            ease: 'easeInOut'
        }
    }
};


const Weather: React.FC = () => {

    const [locationKey, setLocationKey] = useState<number>(261342);
    const [cityName, setCityName] = useState<string>("Sur Baher");
    const [countryName, setCountryName] = useState<string>("Palestine");
    const dispatch = useDispatch();


    const get = (async (coords: any) => {
        try {

            const results = await getLocationKeyByCoordinates(coords);
            setCity(results.Key, results.LocalizedName, results.Country.L)

        } catch (err) {
            dispatch(modalActions.toggleModal());
        }
    })

    const getCoor = () => {
        navigator.geolocation.getCurrentPosition((position => {
            get(position.coords);
        }));
    }

    useEffect(() => {
        getCoor();
    }, []);


    const setCity = (key: number, cityName: string, countryName: string) => {
        setLocationKey(key);
        setCityName(cityName);
        setCountryName(countryName);
    };

    return (
        <motion.div className="weather-page"
                    variants={homeVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit">
            <SearchField setCity={setCity}/>
            <WeatherContent locationKey={locationKey}
                            city={cityName}
                            country={countryName}/>
        </motion.div>
    );
};

export default Weather;
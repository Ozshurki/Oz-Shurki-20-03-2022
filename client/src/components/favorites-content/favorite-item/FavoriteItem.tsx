import React from "react";
import "./FavoriteItem.css";
import {CityType} from "../../../shared/types/city";
import {WiDegrees} from "react-icons/wi";
import useLocalStorage from "use-local-storage";


interface FavoriteItemInt {
    city: CityType;
}

const FavoriteItem: React.FC<FavoriteItemInt> = ({city}) => {

    const [theme] = useLocalStorage<string>('theme' ? 'dark' : 'light', '');


    return (
        <div className="favorite-item">
            <div className="city-name">{city.cityName}</div>
            <div className="city-temperature">{city.temperature}
                <span>
                    <WiDegrees color={theme ? "dark" : "white"} size="1.5rem"/>
                </span></div>
            <div className="city-weather-type">{city.weatherType}</div>
        </div>
    );
};

export default FavoriteItem;
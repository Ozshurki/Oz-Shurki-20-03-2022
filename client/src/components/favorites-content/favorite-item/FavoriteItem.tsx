import React from "react";
import "./FavoriteItem.css";
import {CityType} from "../../../shared/types/city";


interface FavoriteItemInt {
    city: CityType;
}

const FavoriteItem: React.FC<FavoriteItemInt> = ({city}) => {

    console.log(city)
    return (
        <div className="favorite-item">
            <div className="city-name">{city.cityName}</div>
            <div className="city-temperature">{city.temperature}</div>
            <div className="city-weather-type">{city.weatherType}</div>
        </div>
    );
};

export default FavoriteItem;
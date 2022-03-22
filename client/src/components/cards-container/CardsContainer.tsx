import React from "react";

import "./CardsContainer.css";
import DailyForeCast from "../daily-forecast/DailyForeCast";

const city = [
    {
        "Version": 1,
        "Key": "215854",
        "Type": "City",
        "Rank": 31,
        "LocalizedName": "Tel Aviv",
        "Country": {
            "ID": "IL",
            "LocalizedName": "Israel"
        },
        "AdministrativeArea": {
            "ID": "TA",
            "LocalizedName": "Tel Aviv"
        }
    }
];

interface dayForeCastInt {
    date: string;
    temperature: number;
    weatherType: string;
}

interface CardsContainerInt {
    foreCast: dayForeCastInt[];
}


const CardsContainer: React.FC<CardsContainerInt> = (props) => {
    return (
        <div className="cards-container">
            {props.foreCast.map((day, i: number) => {
                return (
                    <DailyForeCast key={i}
                                   date={day.date}
                                   minTemperature={parseInt(String(day.temperature))}
                                   maxTemperature={parseInt(String(day.temperature))}
                                   weatherType={day.weatherType}
                                   animationDelay={i}
                                   weatherIcon={""}/>
                );
            })}
        </div>
    );
};

export default CardsContainer;
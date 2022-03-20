import React, {useEffect, useState} from "react";
import "./Card.css";
import {WiDegrees} from "react-icons/wi";
import classNames from "classnames";

interface CardInt {
    date: string,
    temperature: number,
    weatherType: string
}

const Card: React.FC<CardInt> = ({date, temperature, weatherType}) => {

    const [imageType, setImageType] = useState<string>();

    const extractWeatherType = () => {
        const tempArr = weatherType.split(" ");
        let type = "";
        tempArr.forEach((text: string) => type += (text + "-"));

        type = type.slice(0, type.length - 1);
        setImageType(type);
    };

    useEffect(() => {

        //Extract the weather type for the background image
        extractWeatherType();
    }, []);

    return (
        <div className={classNames("card", imageType?.toLowerCase())}>
            <div className="date">{new Date(date).toString().slice(0, 3)}</div>
            <div className="temperature">{temperature}
                <span>
                    <WiDegrees color="black" size="1.5rem"/>
                </span>
            </div>
            <div className="weather-type">{weatherType}</div>
        </div>
    );
};

export default Card;
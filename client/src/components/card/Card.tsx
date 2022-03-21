import React, {useEffect, useState} from "react";
import "./Card.css";
import {WiDegrees} from "react-icons/wi";
import classNames from "classnames";
import {motion} from "framer-motion";

interface CardInt {
    date: string,
    temperature: number,
    weatherType: string,
    animationDelay: number
}

const Card: React.FC<CardInt> = ({date, temperature, weatherType, animationDelay}) => {

    const [imageType, setImageType] = useState<string>();

    const cardVariants={
        hidden:{
            opacity: 0,
            x: 40
        },
        visible:{opacity: 1,
            x: 0,
            transition:{delay: 0.8 + animationDelay * 0.2, type: "spring"}
        }
    }

    //Extract the weather type for the background image
    const extractWeatherType = () => {
        const tempArr = weatherType.split(" ");
        let type = "";
        tempArr.forEach((text: string) => type += (text + "-"));

        type = type.slice(0, type.length - 1);
        setImageType(type);
    };

    useEffect(() => {
        extractWeatherType();
    }, []);

    return (
        <motion.div className="card"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible">
            <motion.div className={classNames("card-content",imageType?.toLowerCase())}
                        whileHover={{scale:1.1}}>
                <div className="date">{new Date(date).toString().slice(0, 3)}</div>
                <div className="temperature">{temperature}
                    <span>
                    <WiDegrees color="black" size="1.5rem"/>
                </span>
                </div>
                <div className="weather-type">{weatherType}</div>
            </motion.div>
        </motion.div>
    );
};

export default Card;
import React from "react";
import {WiDegrees} from "react-icons/wi";
import {BsFillSuitHeartFill} from "react-icons/bs";

import CardsContainer from "../cards-container/CardsContainer";
import "./HomeContent.css";

const HomeContent: React.FC = () => {
    return (
        <div className="home-content">
            <div className="row">
                <div className="current-city">
                    <img
                        src="https://images.unsplash.com/photo-1544971587-b842c27f8e14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVsJTIwYXZpdnxlbnwwfHwwfHw%3D&w=1000&q=80"
                        alt=""/>
                    <div className="city-content">
                        <div className="city-name">Tel-Aviv</div>
                        <div className="city-degree">25
                            <span>
                                <WiDegrees color="black" size="1.5rem"/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="save-city-container">
                    <BsFillSuitHeartFill color="red" size="1.5rem"/>
                    <div className="save-city-btn">Add to favorite</div>
                </div>
            </div>
            <div className="row">
                <div className="clouds-type">
                    Scattered Clouds
                </div>
            </div>
            <div className="row">
                <CardsContainer/>
            </div>
        </div>
    );
};

export default HomeContent;
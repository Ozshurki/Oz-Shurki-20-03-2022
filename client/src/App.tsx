import React from 'react';
import {Routes, Route, useLocation} from "react-router-dom";
import useLocalStorage from "use-local-storage";
import {AnimatePresence} from "framer-motion";

import Weather from "./pages/weather/Weather";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/header/Header";
import Favorites from "./pages/favorites/Favorites";
import CityWeather from "./pages/city-weather/CityWeather";
import Modal from "./components/modal/Modal";
import Error from "./components/modal/error/Error";
import {RootStateOrAny, useSelector} from "react-redux";


function App() {

    const location = useLocation();

    // Used local storage to save theme color
    const [theme, setTheme] = useLocalStorage<string>('theme' ? 'dark' : 'light', '');
    const showModal = useSelector((state: RootStateOrAny) => state.modal.showModal);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    return (
        <div className="App" data-theme={theme}>
            <Header toggleTheme={toggleTheme}/>
            <ScrollToTop/>
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.key}>
                    <Route path="/" element={<Weather/>}/>
                    <Route path="/favorites" element={<Favorites/>}/>
                    <Route path="/weather/:id" element={<CityWeather/>}/>
                    <Route path="*" element={<Weather/>}/>
                </Routes>
                {showModal &&
                <Modal>
                    <Error/>
                </Modal>
                }
            </AnimatePresence>
        </div>
    );
}

export default App;

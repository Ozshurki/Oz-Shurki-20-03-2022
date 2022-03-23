import React, {useEffect, useRef, useState} from "react";
import {FaSearchLocation} from "react-icons/fa";
import useLocalStorage from "use-local-storage";
import {AiOutlineClose} from "react-icons/ai";
import classNames from "classnames";
import axios from "axios";

import "./SearchField.css";
import {API_KEY} from "../../utils/api_key";
import {getAutoCompleteResults} from "../../apis/ApiServices";
import {useDispatch} from "react-redux";
import {modalActions} from "../../store/slices/modal";




type OptionType = {
    LocalizedName: string,
    Country: {
        id: string,
        LocalizedName: string
    },
}


const results1 = [
    {
        "Version": 1,
        "Key": "321626",
        "Type": "City",
        "Rank": 30,
        "LocalizedName": "Abu Dhabi",
        "Country": {
            "ID": "AE",
            "LocalizedName": "United Arab Emirates"
        },
        "AdministrativeArea": {
            "ID": "AZ",
            "LocalizedName": "Abu Dhabi"
        }
    },
    {
        "Version": 1,
        "Key": "221960",
        "Type": "City",
        "Rank": 35,
        "LocalizedName": "Abu Halifa",
        "Country": {
            "ID": "KW",
            "LocalizedName": "Kuwait"
        },
        "AdministrativeArea": {
            "ID": "AH",
            "LocalizedName": "Ahmadi"
        }
    },
    {
        "Version": 1,
        "Key": "254085",
        "Type": "City",
        "Rank": 40,
        "LocalizedName": "Abuja",
        "Country": {
            "ID": "NG",
            "LocalizedName": "Nigeria"
        },
        "AdministrativeArea": {
            "ID": "FC",
            "LocalizedName": "Abuja Federal Capital Territory"
        }
    },
    {
        "Version": 1,
        "Key": "127336",
        "Type": "City",
        "Rank": 45,
        "LocalizedName": "Abu Kabir",
        "Country": {
            "ID": "EG",
            "LocalizedName": "Egypt"
        },
        "AdministrativeArea": {
            "ID": "SHR",
            "LocalizedName": "Al Sharqia"
        }
    },
    {
        "Version": 1,
        "Key": "127378",
        "Type": "City",
        "Rank": 55,
        "LocalizedName": "Abu Tig",
        "Country": {
            "ID": "EG",
            "LocalizedName": "Egypt"
        },
        "AdministrativeArea": {
            "ID": "AST",
            "LocalizedName": "Asyut"
        }
    },
    {
        "Version": 1,
        "Key": "127069",
        "Type": "City",
        "Rank": 55,
        "LocalizedName": "Abu Qurqas",
        "Country": {
            "ID": "EG",
            "LocalizedName": "Egypt"
        },
        "AdministrativeArea": {
            "ID": "MN",
            "LocalizedName": "Minya"
        }
    },
    {
        "Version": 1,
        "Key": "190362",
        "Type": "City",
        "Rank": 55,
        "LocalizedName": "Abu Road",
        "Country": {
            "ID": "IN",
            "LocalizedName": "India"
        },
        "AdministrativeArea": {
            "ID": "RJ",
            "LocalizedName": "Rajasthan"
        }
    },
    {
        "Version": 1,
        "Key": "206787",
        "Type": "City",
        "Rank": 55,
        "LocalizedName": "Abu al Khasib",
        "Country": {
            "ID": "IQ",
            "LocalizedName": "Iraq"
        },
        "AdministrativeArea": {
            "ID": "BA",
            "LocalizedName": "Basra"
        }
    },
    {
        "Version": 1,
        "Key": "298360",
        "Type": "City",
        "Rank": 55,
        "LocalizedName": "Abu Arish",
        "Country": {
            "ID": "SA",
            "LocalizedName": "Saudi Arabia"
        },
        "AdministrativeArea": {
            "ID": "09",
            "LocalizedName": "Jizan"
        }
    },
    {
        "Version": 1,
        "Key": "312699",
        "Type": "City",
        "Rank": 55,
        "LocalizedName": "Abu Kamal",
        "Country": {
            "ID": "SY",
            "LocalizedName": "Syria"
        },
        "AdministrativeArea": {
            "ID": "DY",
            "LocalizedName": "Deir ez-Zor"
        }
    }
];

const results2 = [
    {
        "Version": 1,
        "Key": "2333525",
        "Type": "City",
        "Rank": 13,
        "LocalizedName": "New Territories",
        "Country": {
            "ID": "HK",
            "LocalizedName": "Hong Kong"
        },
        "AdministrativeArea": {
            "ID": "TW",
            "LocalizedName": "Tsuen Wan"
        }
    },
    {
        "Version": 1,
        "Key": "349727",
        "Type": "City",
        "Rank": 15,
        "LocalizedName": "New York",
        "Country": {
            "ID": "US",
            "LocalizedName": "United States"
        },
        "AdministrativeArea": {
            "ID": "NY",
            "LocalizedName": "New York"
        }
    }
];

interface SearchFieldInt {
    setCity: (key: number, cityName: string, country: string) => void;
}

const SearchField: React.FC<SearchFieldInt> = ({setCity}) => {

    const [theme] = useLocalStorage<string>('theme' ? 'dark' : 'light', '');
    const [results, setResults] = useState<any[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();


    const clearText = () => {
        if (inputRef.current === null) return;

        inputRef.current.value = '';
        setResults([]);
    }

    const getInputResults = async () => {

        if (inputRef.current === null) return;

        // Hide results if user delete
        if(inputRef.current.value === ''){
            setResults([]);
            return;
        }


        const inputText = inputRef.current?.value;

        try {
            const results = await getAutoCompleteResults(inputText);
            setResults(results);
        } catch (err) {
            dispatch(modalActions.toggleModal());
        }
    };

    const handleClick = (cityDetails: any) => {

        if (inputRef.current === null) return;

        inputRef.current.value = cityDetails.LocalizedName;
        setCity(cityDetails.Key, cityDetails.LocalizedName, cityDetails.Country.LocalizedName);
        setResults([]);
    };

    return (
        <div className="search-field">
            <FaSearchLocation color={theme ? "dark" : "white"} size="1.5rem"/>
            <input type="text"
                   ref={inputRef}
                   placeholder="Enter city..."
                   onChange={getInputResults}/>
            <AiOutlineClose color="black"
                            size="1.5rem"
                            className="clear-text"
                            onClick={clearText}/>
            <div className={classNames("results-container", results.length > 0 && "results")}>
                {results?.map(city => {

                    return (
                        <div className="search-result"
                             key={city?.Key}
                             onClick={() => handleClick(city)}>
                            <div className="city-result">{city?.LocalizedName}</div>
                            <div className="county-result">{city?.Country.LocalizedName}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SearchField;
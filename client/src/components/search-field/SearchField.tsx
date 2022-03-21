import React, {useEffect, useState} from "react";
import {FaSearchLocation} from "react-icons/fa";
import useLocalStorage from "use-local-storage";
import {AutoCompleteComponent} from "@syncfusion/ej2-react-dropdowns";

import "./SearchField.css";
import {CityType} from "../../shared/types/city";

type OptionType = {
    LocalizedName: string,
    Country: {
        id: string,
        LocalizedName: string
    },
}
const results = [
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

const results1 = [
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
    },
    {
        "Version": 1,
        "Key": "187745",
        "Type": "City",
        "Rank": 21,
        "LocalizedName": "New Delhi",
        "Country": {
            "ID": "IN",
            "LocalizedName": "India"
        },
        "AdministrativeArea": {
            "ID": "DL",
            "LocalizedName": "Delhi"
        }
    },
    {
        "Version": 1,
        "Key": "2515397",
        "Type": "City",
        "Rank": 21,
        "LocalizedName": "New Taipei City",
        "Country": {
            "ID": "TW",
            "LocalizedName": "Taiwan"
        },
        "AdministrativeArea": {
            "ID": "NWT",
            "LocalizedName": "New Taipei City"
        }
    },
    {
        "Version": 1,
        "Key": "298885",
        "Type": "City",
        "Rank": 32,
        "LocalizedName": "Newcastle",
        "Country": {
            "ID": "ZA",
            "LocalizedName": "South Africa"
        },
        "AdministrativeArea": {
            "ID": "KZN",
            "LocalizedName": "Kwazulu-Natal"
        }
    },
    {
        "Version": 1,
        "Key": "12777",
        "Type": "City",
        "Rank": 35,
        "LocalizedName": "Newcastle",
        "Country": {
            "ID": "AU",
            "LocalizedName": "Australia"
        },
        "AdministrativeArea": {
            "ID": "NSW",
            "LocalizedName": "New South Wales"
        }
    },
    {
        "Version": 1,
        "Key": "3588491",
        "Type": "City",
        "Rank": 35,
        "LocalizedName": "New Cairo",
        "Country": {
            "ID": "EG",
            "LocalizedName": "Egypt"
        },
        "AdministrativeArea": {
            "ID": "C",
            "LocalizedName": "Cairo"
        }
    },
    {
        "Version": 1,
        "Key": "348585",
        "Type": "City",
        "Rank": 35,
        "LocalizedName": "New Orleans",
        "Country": {
            "ID": "US",
            "LocalizedName": "United States"
        },
        "AdministrativeArea": {
            "ID": "LA",
            "LocalizedName": "Louisiana"
        }
    },
    {
        "Version": 1,
        "Key": "349530",
        "Type": "City",
        "Rank": 35,
        "LocalizedName": "Newark",
        "Country": {
            "ID": "US",
            "LocalizedName": "United States"
        },
        "AdministrativeArea": {
            "ID": "NJ",
            "LocalizedName": "New Jersey"
        }
    },
    {
        "Version": 1,
        "Key": "329683",
        "Type": "City",
        "Rank": 41,
        "LocalizedName": "Newcastle upon Tyne",
        "Country": {
            "ID": "GB",
            "LocalizedName": "United Kingdom"
        },
        "AdministrativeArea": {
            "ID": "NET",
            "LocalizedName": "Newcastle upon Tyne"
        }
    }
];

const SearchField: React.FC = () => {

    const [theme] = useLocalStorage<string>('theme' ? 'dark' : 'light', '');

    return (
        <div className="search-field">
            <FaSearchLocation color={theme ? "dark" : "white"} size="1.5rem"/>
            <input type="text" placeholder="Enter city..."/>
            <div className="results">
                {results.map(city =>{
                    return(
                        <div className="search-result">
                            <div className="city-result">{city.LocalizedName}</div>
                            <div className="county-result">{city.Country.LocalizedName}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default SearchField;
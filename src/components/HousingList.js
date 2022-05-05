import React, {useEffect, useState} from 'react';
import HousingSingle from "./HousingSingle";
import SearchPage from "./SearchPage";
import axios from "axios";

const HousingList = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('https://api.jsonbin.io/b/6273d3dd38be296761fcc963')
            .then(res => {
                setData(res.data)
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                console.log(error)
            })
    }, []);

    if (error) return `We are sorry, we can't load information for the moment, try again later!`;
    if (loading) return `Loading, please wait...`;

    return(
        <div>
            <SearchPage/>
            <p>Liste</p>
            {data.map((element) => {
                return(
                    <div>
                        <h4>{element.name}</h4>
                    </div>
                )
            } )}

        </div>
    )
}

export default HousingList;
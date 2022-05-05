import React from 'react';
import HousingSingle from "./HousingSingle";
import SearchPage from "./SearchPage";

const HousingList = () =>{
    return(
        <div>
            <SearchPage/>
            <p>Liste</p>
            <HousingSingle/>
        </div>
    )
}

export default HousingList;
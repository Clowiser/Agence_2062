import React from 'react';


const Search = (props) =>{
    const {data, setFiltered} = props;

    function blockSearch() {
        let element = document.getElementById("searchbarre").value;
        let result = [];
        result = data.filter((data) => {
            return data.name.toLowerCase().search(element) !== -1;
        });
        setFiltered(result);
    }

    return(
        <>
            <label>
                Localisation
                <input type="text" name="localisation" placeholder="Ecrire en minuscules" id="searchbarre" />
            </label>
            <input type="submit" value="Rechercher" onClick={blockSearch} />
        <hr/>
        </>
    )
}

export default Search;
import React from 'react';

const Search = () =>{
    return(
        <form>
            <label>
                Localisation
                <input type="text" name="localisation" />
            </label>
            <label>
                Budget maximum
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Rechercher" />
        </form>
    )
}

export default Search;
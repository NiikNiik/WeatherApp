import { useState } from "react"
import {AsyncPaginate} from "react-select-async-paginate";
import { url, options } from "../../api";

const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null)

    //used to load the cities
    const loadOptions = async (inputValue) => {
        
        try {
            const response = await fetch( `${url}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
             options
             );
            const result = await response.text();
            console.log(result);
            return result
        } catch (error) {
            console.error(error);
            return null
        }       
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData)
        onSearchChange(searchData)
    }

    return (

        <AsyncPaginate
            placeholder = "Search for city"
            debounceTimeout = {600}
            value = {search}
            onChange = {handleOnChange}
            loadOptions = {loadOptions}
        />
    )
}

export default Search
import React, {useState} from 'react'
import search from './search.png'
import searchDark from './searchDarkMode.png'
interface propsType{
    handleSearchFilter: (value:string)=>void;
    toggleMode:boolean
}
const Search:React.FC<propsType>=(props)=>{
    const handleSearchFilter = props.handleSearchFilter
    const toggleMode = props.toggleMode

    const [searchVal, setSearchVal] = useState('')
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setSearchVal(e.target.value)
        handleSearchFilter(searchVal)
    }
    return  <input type='search' id='search' className={toggleMode?'srch light': 'srch-dark'} 
    placeholder='Search for country...' value={searchVal} onChange={handleChange} 
    style={toggleMode?{backgroundImage: `url(${search})`}:{backgroundImage:`url(${searchDark})`}}/>
}
export default Search
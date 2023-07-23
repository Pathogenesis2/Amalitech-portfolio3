import React from 'react'
import Countries from './Countries'

interface User {
  flags:{
    png: string
  }
  name:{
    common: string
  };
  population: number;
  region: string;
  capital:string[];
  continents: string[];
}

interface propsType{
  countries: User[];
  toggleMode: boolean;
  handleSelectFilter: (value:string)=> void;
  handleSearchFilter: (value:string)=> void
}


const CountriesContainer:React.FC<propsType>=(props)=>{
  const countries=props.countries
  const toggleMode=props.toggleMode
  const handleSearchFilter = props.handleSearchFilter
  const handleSelectFilter = props.handleSelectFilter

  return <Countries handleSelectFilter={handleSelectFilter} handleSearchFilter={handleSearchFilter}
   countries={countries} toggleMode={toggleMode}/>
} 

export default CountriesContainer
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
  toggleMode: boolean
}


const CountriesContainer:React.FC<propsType>=(props)=>{
  const countries=props.countries
  const toggleMode=props.toggleMode
  return <Countries countries={countries} toggleMode={toggleMode}/>
} 

export default CountriesContainer
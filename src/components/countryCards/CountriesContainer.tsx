import React from 'react'
import Countries from './Countries'

interface User {
  flags:{
    svg: string
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
  countries: User[] | string;
  toggleMode: boolean;
  setClickMonintor:React.Dispatch<React.SetStateAction<boolean | undefined>>
}


const CountriesContainer:React.FC<propsType>=(props)=>{
  const countries=props.countries
  const toggleMode=props.toggleMode
  const setClickMonintor=props.setClickMonintor

  return <Countries setClickMonitor={setClickMonintor} countries={countries} toggleMode={toggleMode}/>
} 

export default CountriesContainer
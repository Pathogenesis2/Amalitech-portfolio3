import React, {useState, useEffect} from 'react'
import Header from './header/Header';
import CountriesContainer from './countryCards/CountriesContainer';
import axios from 'axios'
import { Route, Routes } from 'react-router-dom';
import GetCountryInfo from './countriesInfo/CountryInfo';


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

/**
 * This is a functional component holds all other components except the App.tsx
 * it holds the API call for the list of countries and also possesses the functions 
 * for filtering and searching through the list.
 * 
 * @returns - This function returns a react JSX to the parent component 
 */
function Container(){
  const [toggleMode, setToggleMode]=useState(true)
  const [countries, setCountries]=useState<User[]>([])
  const [filteredCountries, setFilteredCountries] = useState<User[]>([])
  const [display, setDisplay] = useState(false);

    useEffect(() => {
    const getCountries= async ()=>{

      //This function calls the API and stores in {Countries} and {filteredCountry}
      axios.get('https://restcountries.com/v3.1/all')
      .then((res) => {
        setCountries(res.data)
        setFilteredCountries(res.data)
      }).catch((err) => console.log(err));
    }
    getCountries()
  },[])  

  window.addEventListener('scroll',(()=>setDisplay(false))) 
 
  // This function takes a parameter and filters through {filteredCountry} based on country name with the parameter
  const handleSearchFilter=(value:string)=>{
    if(value!== ''){
      setFilteredCountries(countries.filter((country)=> country.name.common.toLowerCase().includes(value.toLowerCase())))
    }
    else{
      setFilteredCountries(countries)
    }
  }

  // This function takes a parameter and filters through {filteredCountry} based on continent with the parameter
  const handleSelectFilter=(value:string)=>{
    if(value!=='Filter by Region'){
      setFilteredCountries(countries.filter((country)=> country.region.includes(value)))
    }
    else{
      setFilteredCountries(countries)
    }
  }


  return (
    <div className={toggleMode?'body-light':'body-dark'}>
      <Routes>
        <Route path='/CountryName/:CountryInfo'  Component={()=> <GetCountryInfo toggleMode={toggleMode} countries={countries}/>}/>
        <Route path='/' Component={()=><CountriesContainer countries={filteredCountries} toggleMode={toggleMode}/>}/>
      </Routes>
        <Header setToggleMode={setToggleMode} toggleMode={toggleMode} handleSelectFilter={handleSelectFilter}
        handleSearchFilter={handleSearchFilter} display={display} setDisplay= {setDisplay}/>
    </div>
  )
}
export default Container
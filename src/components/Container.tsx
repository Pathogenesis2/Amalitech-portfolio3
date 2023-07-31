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
  const [name,setName] = useState<string>('')
  const [continent, setContinent] = useState<string>('All Countries')
  const [display, setDisplay] = useState(false);

    useEffect(() => {
    const getCountries= async ()=>{

      //This function calls the API and stores in {Countries} and {filteredCountry}
      axios.get('https://restcountries.com/v3.1/all')
      .then((res) => {
        setCountries(res.data)
      }).catch((err) => console.log(err));
    }
    getCountries()
  },[])  

useEffect(()=>{
  if((name.trim()).length>1){
    if(continent!== 'Filter by Region' && continent!=='All Countries'){
      if(countries.filter(country=>((country.name.common).toLowerCase()).includes(name.trim().toLowerCase()))){
        setFilteredCountries(countries.filter(country=>(country.region).includes(continent) && 
      ((country.name.common).toLowerCase()).includes(name.trim().toLowerCase())))
      }
      else{
        setFilteredCountries(countries.filter(country=>((country.region).includes(continent))))
      }
    }
    else{
      if(countries.filter(country=>((country.name.common).toLowerCase()).includes(name.trim().toLowerCase()))){
        setFilteredCountries(countries.filter(country=>((country.name.common).toLowerCase()).includes(name.trim().toLowerCase())))
      }
      else{
        setFilteredCountries(countries.filter(country=>((country.region))))
      }
    }
  }
  else{
    if(continent!== 'Filter by Region' && continent!=='All Countries'){
      setFilteredCountries(countries.filter(country=>((country.region).includes(continent))))
    }
    else{
      setFilteredCountries(countries.filter(country=>((country.region))))
    }
  }


  window.scrollTo(0,0)
},[continent, name,countries])

  window.addEventListener('scroll',(()=>setDisplay(false))) 
 
  // This function takes a parameter and filters through {filteredCountry} based on country name with the parameter
  const handleSearchFilter=(value:string)=>{
    setName(value)
  }

  // This function takes a parameter and filters through {filteredCountry} based on continent with the parameter
  const handleSelectFilter=(value:string)=>{
    setContinent(value)
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
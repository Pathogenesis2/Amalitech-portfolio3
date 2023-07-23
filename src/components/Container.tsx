import React, {useState, useEffect} from 'react'
import Header from './header/Header';
import CountriesContainer from './countryCards/CountriesContainer';
import axios from 'axios'
import { Route, Routes } from 'react-router-dom';
import GetCountryInfo from './countriesInfo/CountryInfo';


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

function Container(){
  const [toggleMode, setToggleMode]=useState(true)


  const [countries, setCountries]=useState<User[]>([])
  const [filteredCountries, setFilteredCountries] = useState<User[]>([])
    useEffect(() => {
    const getCountries= async ()=>{
      axios.get('https://restcountries.com/v3.1/all')
      .then((res) => {
        setCountries(res.data)
        setFilteredCountries(res.data)
      }).catch((err) => console.log(err));
    }
    getCountries()
  },[])  
  const handleSearchFilter=(value:string)=>{
    if(value!== ''){
      setFilteredCountries(countries.filter((country)=> country.name.common.toLowerCase().includes(value.toLowerCase())))
    }
    else{
      setFilteredCountries(countries)
    }
  }
console.log(countries)
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
        <Route path='/CountryName/:CountryInfo' element={<GetCountryInfo toggleMode={toggleMode}/>}/>
      </Routes>
      <Routes>
        <Route path='/' Component={()=><CountriesContainer countries={filteredCountries} toggleMode={toggleMode} handleSelectFilter={handleSelectFilter}
        handleSearchFilter={handleSearchFilter}/>}/>
      </Routes>
      <Header setToggleMode={setToggleMode} toggleMode={toggleMode}/>
    </div>
  )
}
export default Container
import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import Countries from './Countries'
import {GlobalContext, GlobalContextType} from '../store/helper';

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


const CountriesContainer=()=>{
  
  const [countries, setCountries]=useState<User[]>([])
    useEffect(() => {
    const getCountries= async ()=>{
      axios.get('https://restcountries.com/v3.1/all')
      .then((res) => {
        setCountries(res.data)
      }).catch((err) => console.log(err));
    }
    getCountries()
  },[])  
  return <Countries countries={countries}/>
} 

export default CountriesContainer
import React, {useEffect, useState} from 'react'
import './App.css';
import Header from './components/header/Header';
import CountriesContainer from './components/countryCards/CountriesContainer';
import Axios from 'axios'


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

function App(){
  return (
    <div className='App body-light'>
        <CountriesContainer/>
        <Header />        
    </div>
  )
}
export default App;

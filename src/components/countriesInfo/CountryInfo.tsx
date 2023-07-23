import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import directionLight from './directionLight.png'
import directionDark from './directionDark.png'

interface User {
    fifa: string,
    flags: {
        png: string
    }
    name:{
      common: string,
      nativeName: {
        [key:string]:any
      }
    };
    population: number;
    region: string;
    subregion: string;
    capital:string[];
    continents: string[];
    tld: string[];
    currencies: {
        [key:string]: any
    }
    languages:{
        [key:string]: any
    }
  }

  interface propsType{
    toggleMode: boolean
  }
const GetCountryInfo: React.FC<propsType>=(props)=>{
    const toggleMode= props.toggleMode
    const {CountryInfo} = useParams()
    const [country, setCountry] = useState<User[]>([])
    useEffect(()=>{
        const getCountryByName =()=>{
            axios.get(`https://restcountries.com/v3.1/name/${CountryInfo}`).then(res=>setCountry(res.data))
            .catch(err=>console.log(err))
        }
        getCountryByName()
    },[CountryInfo])
    const keyList:string[]=[]
    const languageObject = country.forEach(item=>{
        Object.keys(item.languages).forEach(item=> keyList.push(item))
    })
    const languageList = country.map(item=>item.languages.languageObject)
    console.log(keyList)
    //const unknownObject = Object.keys(country.languages)
    //console.log(unknownObject)
    return( 
        <div className='data'>
            <div>
                <img src={toggleMode?directionLight:directionDark}/>
                <p>Back</p>
            </div>
            {
                country.map(item=>{
                    return(
                        <div>
                            <img src={item.flags.png}/>
                            <div>
                                <p>{item.name.common}</p>
                                <div>
                                    <div>
                                        <div><span>Native Name:&nbsp;</span>{/*item.name.nativeName[0].common*/}</div>
                                        <div><span>Population:&nbsp;</span>{item.population}</div>
                                        <div><span>Region:&nbsp;</span>{item.region}</div>     
                                        <div><span>Sub Region:&nbsp;</span>{item.subregion}</div>
                                        <div><span>Capital:&nbsp;</span>{item.capital}</div>
                                        <div><span>Top Level Domain:&nbsp;</span>{item.tld[0]}</div>
                                        <div><span>Currencies:&nbsp;</span>{/*item.currencies.JOD.name*/}</div>
                                        <ul>
                                        </ul>
                                    </div>
                                    <div>

                                    </div>
                                </div>                             
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default GetCountryInfo
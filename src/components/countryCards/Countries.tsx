import React from 'react'
import { Link } from 'react-router-dom';
import BottomHeader from '../header/bottomHeader/BottomHeaderContainer'

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

const Countries:React.FC<propsType> =(props)=>{
  const countries=props.countries
  const toggleMode=props.toggleMode
  const handleSearchFilter = props.handleSearchFilter
  const handleSelectFilter = props.handleSelectFilter
  return(
    <>
      <div id='countries' >
        {
          countries.map((item:any,index:number)=>{
            return (
              <Link to={`/CountryName/${item.name.common}`} key={item.name.common}>
                <div key={item} className={`card ${toggleMode?'child-light ':'child-dark'}`} style={{cursor: 'pointer'}}>
                    <img src={item.flags.png} alt="flag" className='flag' />
                    <p className='cardItem countryName'>{item.name.common}</p>
                    <div className='description'>
                      <div className='cardItem desc-item population'>
                        <p className='bold'>Population : &nbsp;</p> 
                        {item.population}</div>
                      <div className='cardItem desc-item region'>
                        <p className='bold'>Region : &nbsp;</p> 
                      {item.region}</div>
                      <div className='cardItem desc-item capital'>
                        <p className='bold'>Capital : &nbsp;</p> 
                      {item.capital}</div>
                    </div>
                </div>
              </Link>
            )
          })
        }
      </div>
      <div className='countries-wrapper' >
        <div className={`${toggleMode? 'concealor-light': 'concealor-dark'} concealor`}></div>
        <BottomHeader handleSelectFilter={handleSelectFilter} handleSearchFilter={handleSearchFilter} 
        toggleMode={toggleMode}/>
      </div>
    </>
    
  )
}
      
export default Countries
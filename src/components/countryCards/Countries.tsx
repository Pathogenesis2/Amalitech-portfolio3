import React from 'react'
import { Link } from 'react-router-dom';

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
  countries: User[];
  toggleMode: boolean;
}

const Countries:React.FC<propsType> =(props)=>{
  const countries=props.countries
  const toggleMode=props.toggleMode
  return(
    <>
      <div id='countries' >
        {
          countries.map((item:any,index:number)=>{
            return (
              <Link to={`/CountryName/${item.name.common}`} key={item.name.common}>
                <div key={item} className={`card ${toggleMode?'child-light ':'child-dark'}`} style={{cursor: 'pointer'}}
                onClick={()=>window.scrollTo(0,0)}>
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
    </>
    
  )
}
      
export default Countries
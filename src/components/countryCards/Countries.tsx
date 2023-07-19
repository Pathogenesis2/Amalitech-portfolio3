import React from 'react'

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

const Countries:React.FC<propsType> =(props)=>{
  const countries=props.countries
  const toggleMode=props.toggleMode
  return(
    <div id='countries' >
      {
        countries.map((item:any,index:number)=>{
          return (
              <div id='card' key={`${item}-${index}`} className={toggleMode?'child-light':'child-dark'} style={{cursor: 'pointer'}}>
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
          )
        })
      }
    </div>
  )
}
      
export default Countries
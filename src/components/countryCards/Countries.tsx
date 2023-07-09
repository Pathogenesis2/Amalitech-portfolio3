import React from 'react'
const Countries:React.FC<any> =({countries})=>{
  return(
    <div id='countries'>
      {
        countries.map((item:any,index:number)=>{
          return (
              <div id='card' key={`${item}-${index}`} className='child-light'>
                  <img src={item.flags.png} alt="flag" className='flag' />
                  <p className='cardItem countryName'>{item.name.common}</p>
                  <div className='description'>
                    <div className='cardItem desc-item population'><p className='bold'>Population:</p> {item.population}</div>
                    <div className='cardItem desc-item region'><p className='bold'>Region:</p> {item.region}</div>
                    <div className='cardItem desc-item capital'><p className='bold'>Capital:</p> {item.capital}</div>
                  </div>
              </div>
          )
        })
      }
    </div>
  )
}
      
export default Countries
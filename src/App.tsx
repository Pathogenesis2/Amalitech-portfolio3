import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import lightmode from './lightmode.png' 

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
  continents: string[]
}

function App() {
  const list: string[]= ['Africa','America','Asia','Europe','Oceania']
  const [country, setCountry] = useState<User[]>([]);
  const [countryClone, setCountryClone] = useState<User[]>([])

  const [opacity, setOpacity] = useState(1) //set opacity for a search and select boxes on scroll

  //set continent states for building options in the select
  const [continent, setContinent]= useState(true)
  const [africa, setAfrica] = useState('');
  const [america, setAmerica] = useState('');
  const [asia, setAsia] = useState('');
  const [europe, setEurope] = useState('')
  const [oceania, setOceania] = useState('')
  const [divStyle, setDivStyle] = useState(false)
  const [search, setSearch] = useState('')
  const [optVal, setOptVal] = useState('')
  const [val, setVal] = useState('')
  const [searchVal, setSearchVal] = useState('')

  /**
   * function useEffect:- changes the opacity of the search and select button when window is scrolled
   * returns:- returns a function 
   */
  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY){
        setOpacity(0.2)
      }
    }
    const handleOver=()=>{
      setOpacity(1)
    }
    window.removeEventListener('mouseover', handleOver)
    window.addEventListener('scroll',handleScroll)
    return ()=>{
      window.removeEventListener('scroll',handleScroll)
      window.addEventListener('mouseover', handleOver)
    }
  }
  )
  useEffect(() => {
    const getCountries= async ()=>{
      axios.get('https://restcountries.com/v3.1/all')
      .then((res) => {
        setCountry(res.data)
        setCountryClone(res.data)
        console.log(res)
      })
      .catch((err) => console.log(err));
    }
    getCountries()
  },[]);
  useEffect(()=>{
    setCountry(countryClone)
    setVal(optVal)
    setSearchVal(search)
  },[optVal,search])
  const handleOptions=()=>{
    setContinent((current)=>{
      return !current
    })
    setDivStyle((current)=>{
      return !current
    })
      list.map(item=>{
        switch (item){
          case 'Africa':
            continent?setAfrica(item):setAfrica('')
            break;
          case 'America':
            continent?setAmerica(item):setAmerica('')
            break;
          case 'Asia':
            continent?setAsia(item):setAsia('')
            break;
          case 'Europe':
            continent?setEurope(item):setEurope('')
            break;
          case 'Oceania':
            continent?setOceania(item):setOceania('')
            break;
          }
      
        /*item==='Africa'? setAfrica(item): item==='America'? setAmerica(item): item==='Asia'? setAsia(item):
        item==='Europe'? setEurope(item): item==='Oceania'? setOceania(item):null*/
      })
      
      console.log(divStyle)
      
  }

  useEffect(()=>{
    let filtered:User[]=[]
    setCountry(countryClone)
    console.log('search empt and val')
    if(val!==''){
      filtered = country.filter(item=>{
        return item.continents[0].toLowerCase().includes(val.toLowerCase())
      })
      console.log('optval')
      setCountry(filtered)
    }
    if(searchVal.trim()!==''){
      filtered = country.filter(item=>{
        return item.name.common.toLowerCase().includes(searchVal.toLowerCase())
      })
      setCountry(filtered)
  }
    console.log(optVal)
    console.log(country)
    console.log(countryClone)
    console.log(filtered)
    console.log(search)
  },[val,searchVal])
  const handleSearch=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setSearch(e.currentTarget.value)
  }
  const handleOptValue=(e: React.MouseEvent<HTMLDivElement>)=>{
    const val = e.currentTarget.id
    setOptVal(val)
    setDivStyle((current)=>{
      return !current
    })
    setContinent(current=>{
      return !current
    })
    
    setAfrica('')
    setAmerica('')
    setAsia('')
    setEurope('')
    setOceania('')
  }
 
  let stylingOpDiv = {
    marginBottom: ''
  }
  let stylingOp = {
    paddingTop: '',
    paddingBottom: ''
  }
  if(divStyle){
    stylingOpDiv.marginBottom='0.5vw';
    stylingOp.paddingTop='1vw'
    stylingOp.paddingBottom='0.5vw'
  }
  return (
    <div className="App">
      <div id='header'>
            <div id='top-h-cnt'>
                <div id='top-header'>
                    <p id='intro' className='top-header'>Where in the world?</p>
                    <div id='modes' className='top-header'>
                        <img src={lightmode} id='modeimg' className='modes' alt='dark/light'/>
                        <p id='mode-text' className='modes'>Dark Mode</p>
                    </div>
                </div>
            </div>
            <div id='bottom-h-cnt' style={{opacity}}>
                <div id='bottom-header'>
                    <input type='search' id='search' placeholder='Search for country...' onChange={handleSearch}/>
                    <div id='container'>
                      <input className='select' onClick={handleOptions} value='Filter by Region'/>
                        <div id='options' style={stylingOp}>
                          <div className='opt-div-cnt' id='africa' style={stylingOpDiv} onClick={handleOptValue}><p className='opt-div'>{africa}</p></div>
                          <div className='opt-div-cnt' id='america' style={stylingOpDiv} onClick={handleOptValue}><p className='opt-div'>{america}</p></div>
                          <div className='opt-div-cnt' id='asia' style={stylingOpDiv} onClick={handleOptValue}><p className='opt-div'>{asia}</p></div>
                          <div className='opt-div-cnt' id='europe' style={stylingOpDiv} onClick={handleOptValue}><p className='opt-div'>{europe}</p></div>
                          <div className='opt-div-cnt' id='oceania' style={stylingOpDiv} onClick={handleOptValue}><p className='opt-div'>{oceania}</p></div>
                        </div>
                    </div> 
                </div>
            </div> 
        </div>
        <div id='countries'>
          {
            country.map((item,index)=>{
              return (
                <div key={index} className='card'>
                  <img src={item.flags.png} alt="flag" className='flag' />
                  <p className='cardItem countryName'>{item.name.common}</p>
                  <div className='description'>
                    <p className='cardItem desc-item population'><p className='bold'>Population:</p> {item.population}</p>
                    <p className='cardItem desc-item region'><p className='bold'>Region:</p> {item.region}</p>
                    <p className='cardItem desc-item capital'><p className='bold'>Capital:</p> {item.capital}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  );
}

export default App;

import React,{useEffect, useState} from 'react'
import Search from './search/Search'
import Select from './select/Select'
import { Route, Routes } from 'react-router-dom';

interface User{
  handleSearchFilter: (value:string)=>void;
  handleSelectFilter: (value:string)=>void;
  toggleMode:any
}

const BottomHeader=(props:User)=>{
   const handleSearchFilter= props.handleSearchFilter
   const handleSelectFilter = props.handleSelectFilter
   const toggleMode= props.toggleMode
    const [opacity, setOpacity] = useState(1)
    useEffect(()=>{
      const handleScroll=()=>{
        if(window.scrollY){
          setOpacity(0)
        }
      }
      const handleOver=()=>{
        setOpacity(1)
      }
      window.addEventListener('mouseover', handleOver)
      window.addEventListener('scroll',handleScroll)
      return ()=>{   
        window.removeEventListener('scroll',handleScroll)
        window.removeEventListener('mouseover', handleOver)
      }
    },[])
    
  
    return(
      <div id='bottom-h-cnt'>
        <div id='bottom-header' >
          <Search handleSearchFilter={handleSearchFilter} toggleMode={toggleMode}/>
          <div id='container'>
            <Select handleSelectFilter={handleSelectFilter} toggleMode={toggleMode}/>
          </div> 
        </div>
      </div>
    )
               
}
export default BottomHeader
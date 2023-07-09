import React,{useEffect, useState} from 'react'
import Search from './search/Search'
import Select from './select/Select'

interface User{
  modeToggle: boolean;
}

const BottomHeader:React.FC=()=>{
   
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
                    <Search/>
                    <div id='container'>
                        <Select/>
                    </div> 
                </div>
        </div> 
    )
}
export default BottomHeader
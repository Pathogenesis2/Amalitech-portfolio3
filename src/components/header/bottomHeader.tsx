import React,{useEffect, useState} from 'react'
import HandleSelect from './select-options';
import search from './search.png';
import searchDarkMode from './searchDarkMode.png'

interface User{
  modeToggle: boolean;
}

const BottomHeader:React.FC<User>=({modeToggle})=>{
   
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
    
    const [searchVal, setSearchVal] = useState('')
    /*scroll effect for the bottom header*/
    

    const handleSearchChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        setSearchVal(e.currentTarget.value)
    }
    const style={
      opacity: opacity,
      backgroundImage:'',
    }
    const styling=()=>{
      modeToggle? style.backgroundImage=`url(${search})`: style.backgroundImage=`url(${searchDarkMode})`
    }
    
    styling()
  
    return(
        <div id='bottom-h-cnt'>
                <div id='bottom-header' >
                    <input type='search' id='search' style={style} className={`${modeToggle?'child-light ':'child-dark srch-black'}`} placeholder='Search for country...' onChange={handleSearchChange} />
                    <div id='container'>
                    <HandleSelect modeToggle={modeToggle} opacity={opacity}/>
                    </div> 
                </div>
        </div> 
    )
}
export default BottomHeader
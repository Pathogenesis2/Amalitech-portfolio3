import React from 'react'
import Search from './search/Search'
import Select from './select/Select'

interface User{
  handleSearchFilter: (value:string)=>void;
  handleSelectFilter: (value:string)=>void;
  toggleMode:any;
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>
}

const BottomHeader=(props:User)=>{
  const display= props.display
  const setDisplay = props.setDisplay
   const handleSearchFilter= props.handleSearchFilter
   const handleSelectFilter = props.handleSelectFilter
   const toggleMode= props.toggleMode
    
  
    return(
      <div id='bottom-h-cnt'>
        <div id='bottom-header' >
          <Search handleSearchFilter={handleSearchFilter} toggleMode={toggleMode} setDisplay={setDisplay}/>
          <div id='container'>
            <Select handleSelectFilter={handleSelectFilter} toggleMode={toggleMode} display={display} setDisplay={setDisplay}/>
          </div> 
        </div>
      </div>
    )
               
}
export default BottomHeader
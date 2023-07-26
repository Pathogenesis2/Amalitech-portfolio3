import React from 'react'
import Search from './search/Search'
import Select from './select/Select'

interface User{
  handleSearchFilter: (value:string)=>void;
  handleSelectFilter: (value:string)=>void;
  toggleMode:any
}

const BottomHeader=(props:User)=>{
   const handleSearchFilter= props.handleSearchFilter
   const handleSelectFilter = props.handleSelectFilter
   const toggleMode= props.toggleMode
    
  
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
import React from 'react'
import TopHeader from './topHeader/TopHeader'
import BottomHeader from './bottomHeader/BottomHeaderContainer';
import { useLocation } from 'react-router-dom';

interface MyProps{
    toggleMode: boolean
    setToggleMode:  React.Dispatch<React.SetStateAction<boolean>>
    handleSelectFilter: (value:string)=> void;
    handleSearchFilter: (value:string)=> void
}

const Header: React.FC<MyProps>=(props)=>{
    const setToggleMode = props.setToggleMode
    const toggleMode = props.toggleMode
    const handleSearchFilter = props.handleSearchFilter
  const handleSelectFilter = props.handleSelectFilter

const  location = useLocation();

    return(
        <div id='header'>
            <TopHeader setToggleMode={setToggleMode} toggleMode={toggleMode}/>
            {location.pathname==='/'? <div className={`${toggleMode? 'concealor-light': 'concealor-dark'} concealor`}></div>: null}
            {location.pathname==='/'?<BottomHeader handleSelectFilter={handleSelectFilter} handleSearchFilter={handleSearchFilter}
            toggleMode={toggleMode}/>:null}
        </div>
    )
} 
export default Header
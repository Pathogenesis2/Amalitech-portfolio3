import React from 'react'
import TopHeaderContainer from './topHeader/TopHeaderContainer'
import BottomHeaderContainer from './bottomHeader/BottomHeaderContainer'

interface MyProps{
    handleSearchFilter: (value:string)=>void;
    handleSelectFilter: (value:string)=>void;
    toggleMode: boolean
    setToggleMode:  React.Dispatch<React.SetStateAction<boolean>>

}

const Header: React.FC<MyProps>=(props)=>{
    const handleSearchFilter = props.handleSearchFilter
    const handleSelectFilter = props.handleSelectFilter
    const setToggleMode = props.setToggleMode
    const toggleMode = props.toggleMode
    return(
        <div id='header'>
            <TopHeaderContainer setToggleMode={setToggleMode} toggleMode={toggleMode}/>
            <BottomHeaderContainer handleSelectFilter={handleSelectFilter} handleSearchFilter={handleSearchFilter} toggleMode={toggleMode}/>
            <div className={`${toggleMode? 'concealor-light': 'concealor-dark'} concealor`}></div>
        </div>
    )
} 
export default Header
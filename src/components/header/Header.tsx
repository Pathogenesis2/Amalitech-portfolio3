import React from 'react'
import TopHeader from './topHeader/TopHeader'
import BottomHeader from './bottomHeader/BottomHeaderContainer';
import { useLocation } from 'react-router-dom';

interface MyProps{
    toggleMode: boolean
    setToggleMode:  React.Dispatch<React.SetStateAction<boolean>>
    handleSelectFilter: (value:string)=> void;
    handleSearchFilter: (value:string)=> void;
    display: boolean;
    setDisplay: React.Dispatch<React.SetStateAction<boolean>>
}

/**
 * This is a functional component which contains two child components for display of header
 * It takes props of type MyProps.
 * @param props - The property for Header function. 
 * @returns {JSX.Element} - The JSX elements that are being rendered
 */
const Header: React.FC<MyProps>=(props)=>{
    const display = props.display
    const setDisplay = props.setDisplay
    const setToggleMode = props.setToggleMode
    const toggleMode = props.toggleMode
    const handleSearchFilter = props.handleSearchFilter
    const handleSelectFilter = props.handleSelectFilter
    const  location = useLocation();

//Function is meant to render the content of the return function to the parent component.
    return(
        <div id='header'>
            <TopHeader setToggleMode={setToggleMode} toggleMode={toggleMode}/>
            {location.pathname==='/'? <div className={`${toggleMode? 'concealor-light': 'concealor-dark'} concealor`}></div>: null}
            {location.pathname==='/'?<BottomHeader handleSelectFilter={handleSelectFilter} 
            display={display} setDisplay={setDisplay} handleSearchFilter={handleSearchFilter}
            toggleMode={toggleMode}/>:null}
        </div>
    )
} 
export default Header
import React from 'react'
import TopHeaderContainer from './topHeader/TopHeaderContainer'
import BottomHeaderContainer from './bottomHeader/BottomHeaderContainer'

interface MyProps{
    onclick: any,
    modeToggle :any
}

const Header: React.FC=()=>{
    return(
        <div id='header'>
            <TopHeaderContainer/>
            <BottomHeaderContainer />
        </div>
    )
} 
export default Header
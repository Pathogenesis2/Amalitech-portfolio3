import React from 'react'
import TopHeader from './topHeader/TopHeader'

interface MyProps{
    toggleMode: boolean
    setToggleMode:  React.Dispatch<React.SetStateAction<boolean>>

}

const Header: React.FC<MyProps>=(props)=>{
    const setToggleMode = props.setToggleMode
    const toggleMode = props.toggleMode
    return(
        <div id='header'>
            <TopHeader setToggleMode={setToggleMode} toggleMode={toggleMode}/>
        </div>
    )
} 
export default Header
import React from 'react'
import lightmode from './lightmode.png'
import darkmode from './darkmode.png'
interface propsType{
    toggleMode: boolean;
    setToggleMode:  React.Dispatch<React.SetStateAction<boolean>>
}
const Mode:React.FC<propsType>=(props)=>{
    const toggleMode= props.toggleMode
    const setToggleMode= props.setToggleMode
    const handleClick=(e: React.MouseEvent<HTMLDivElement>)=>{
        setToggleMode((current)=>!current)
    }
    return(
        <>
            <div id='modes' className='top-header' onClick={handleClick}>
                <img src={toggleMode?lightmode:darkmode} id='modeimg' className='modes' alt='dark/light' />
                <p id='mode-text' className='modes'>{toggleMode? 'Light Mode': 'Dark Mode'}</p>
            </div>
        </>
    )
}
export default Mode





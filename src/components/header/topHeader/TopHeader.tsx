import React from 'react'
import Mode from './Mode'


interface propsType{
    toggleMode: boolean;
    setToggleMode:  React.Dispatch<React.SetStateAction<boolean>>
}
const TopHeader:React.FC<propsType>=(props)=>{
    const toggleMode= props.toggleMode
    const setToggleMode= props.setToggleMode
    return(
        <div id='top-h-cnt' className={toggleMode?'child-light':'child-dark'}>
            <div id='top-header' >
                <p id='intro' className='top-header'>Where in the world?</p>   
                <Mode setToggleMode={setToggleMode} toggleMode={toggleMode}/>
            </div>
        </div>            
    )
}
export default TopHeader
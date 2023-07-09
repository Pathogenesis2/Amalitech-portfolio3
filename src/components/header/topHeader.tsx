import React from 'react'
import lightmode from './lightmode.png'
import darkmode from './darkmode.png'
interface Myprops{
    onclick:any
    modeToggle: any
} 
const TopHeader:React.FC<Myprops>=({onclick,modeToggle})=>{
    return(
        <div id='top-h-cnt' className={`${!modeToggle? 'child-dark':'child-light'}`}>
            <div id='top-header' >
                <p id='intro' className='top-header'>Where in the world?</p>
                <div id='modes' className='top-header' onClick={onclick}>
                    <img src={!modeToggle?darkmode:lightmode} id='modeimg' className='modes' alt='dark/light' />
                    <p id='mode-text' className='modes'>{modeToggle?'Light Mode':'Dark Mode'}</p>
                </div>
            </div>
        </div>
    )
}
export default TopHeader
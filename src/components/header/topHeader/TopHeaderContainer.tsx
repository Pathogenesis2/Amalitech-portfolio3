import React from 'react'
import Mode from './Mode'

//the container of the the top header elements
const TopHeaderContainer:React.FC=()=>{
    return(
        <div id='top-h-cnt' className='child-light'>
            <div id='top-header' >
                <p id='intro' className='top-header'>Where in the world?</p>   
                <Mode/>
            </div>
        </div>
    )
}
export default TopHeaderContainer
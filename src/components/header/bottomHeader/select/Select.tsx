import React, {useState, useEffect} from 'react'
import arrowdown from './arrowdown.svg'
import pointerWhite from './pointerWhite.png'

let countryList: string[]= ['Africa','America','Asia','Europe','Oceania']
interface User{
    handleSelectFilter: (value:string)=>void,
    toggleMode: boolean
}
const Select:React.FC<User> =(props)=>{
    const toggleMode = props.toggleMode
    const handleSelectFilter= props.handleSelectFilter
    const [list, setList]= useState<string[]>([])
    const [display, setDisplay] = useState(false);
    useEffect(()=>{
        if(countryList.includes(selectedValue)){
            display && setList(countryList.filter((item)=>selectedValue!==item))
        }
        else{
            display && setList(countryList)
        }
        return (()=>setList([]))
    },[display])

    const handleButClick=()=>{
        setDisplay(display=>!display)
    }
    const [selectedValue, setSelectedValue] = useState('Filter by Region')
   
    const handleOptClick=(e: React.MouseEvent<HTMLDivElement>)=>{
        setSelectedValue(e.currentTarget.id)
        handleButClick()
    }
    useEffect(()=>{
        handleSelectFilter(selectedValue)
    },[selectedValue])


    return(
        <div id='parentDiv'>
           <button className={`select ${toggleMode?'child-light': 'child-dark'}`} onClick={handleButClick} 
           style={toggleMode?{backgroundImage: `url(${arrowdown})`}:{backgroundImage:`url(${pointerWhite})`}}>
                <p>{selectedValue}</p>
           </button>
           {display?
            <div id='options' className={`${toggleMode?'child-light': 'child-dark'} styleParent`}>
                {list.map(item=>{
                    return (<div  key={item} id={item} className='opt-div-cnt styleChild ' onClick={handleOptClick}>
                        <p className='opt-div'>{item}</p>
                    </div>)
                })}
            </div>:null }
        </div>
    )
}
export default Select 
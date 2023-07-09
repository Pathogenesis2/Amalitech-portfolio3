import React, {useState, useEffect} from 'react'

let countryList: string[]= ['Africa','America','Asia','Europe','Oceania']
interface User{
    modeToggle: any;
    opacity: number
}
const Select:React.FC =()=>{
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
        console.log(display)
    }
   
    const [selectedValue, setSelectedValue] = useState('Filter by Region')
    const handleOptClick=({currentTarget}: React.MouseEvent<HTMLDivElement>)=>{
        setSelectedValue(currentTarget.id)
        handleButClick()
    }

    return(
        <div id='parentDiv'>
           <button className='select child-light' onClick={handleButClick}>
                {selectedValue}
           </button>
           {display?
            <div id='options' className='child-light styleParent'>
                <div className='styleChild'>
                    <p className='opt-div'>Filter by Region</p>
                </div>
                {list.map(item=>{
                    return (<div  key={item} id={item} className='opt-div-cnt styleChild' onClick={handleOptClick}>
                        <p className='opt-div'>{item}</p>
                    </div>)
                })}
            </div>:null }
        </div>
    )
}
export default Select 
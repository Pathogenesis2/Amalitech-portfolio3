import React, {useState, useEffect} from 'react'
import pointerWhite from './pointerWhite.png'
import arrowdown  from './arrowdown.svg'


let countryList: string[]= ['Africa','America','Asia','Europe','Oceania']
interface User{
    modeToggle: any;
    opacity: number
}
const HandleSelect:React.FC<User> =({modeToggle,opacity})=>{
    
    
    const [display, setDisplay] = useState(false);
    const handleClick=()=>{
        setDisplay((prev)=>!prev)
        console.log(display)
    }

    let stylingOpDivUpdate={
        marginBottom:''
    }
    let stylingOpUpdate={
        marginTop: '',
        paddingTop:'',
        paddingBottom:''
    }
    const styling=()=>{
        if(display){
            stylingOpUpdate={
                marginTop: '0.3vw',
                paddingTop:'1vw',
                paddingBottom:'0.5vw',
            }
            stylingOpDivUpdate={
                marginBottom:'0.5vw'
            }
        }
    }
    styling()
    const handleOptClick=(e:React.MouseEvent<HTMLDivElement>)=>{
        setSelectId(e.currentTarget.innerText);
        setDisplay(false)
    }
    

    const [list, setList]= useState<string[]>([])
    useEffect(()=>{
        /*stylingOpUpdate: stylingOpDiv
        stylingOpDivUpdate: stylingOpDiv*/
        if(display){
            setList(countryList)
            
        }else{
            setList([])
        }
        
        document.getElementById(`{}`)
        const handleStartScroll=()=>{
            return display? setDisplay(false): null
        }
        window.addEventListener('scroll',handleStartScroll)
        
        return (()=>{    
            window.removeEventListener('scroll',handleStartScroll)
            
        })
    },[display])

    const [selectId, setSelectId] = useState('')

    const [selectVal, setSelectVal] = useState('')
    
    useEffect(()=>{
        setSelectVal(current=> selectId ===''? current='Filter by Region':current=selectId)
    },[selectId])

    

    let ButStyle ={
        backgroundImage: ''
    }

    const parentDivStyle ={
        opacity:0
    }
    
    const divStyleFunction=()=>{
        if(opacity){
            parentDivStyle.opacity=1
        }
        else{
            parentDivStyle.opacity=0
        }
    }
    divStyleFunction()
    
    function ButtonStyle(){
        if(!modeToggle){
            ButStyle.backgroundImage= `url(${pointerWhite})`
        }
        else{
            ButStyle.backgroundImage= `url(${arrowdown})`
        }
    }
    ButtonStyle()
    
    
    return(
        <div id='parentDiv' style={{...parentDivStyle,transition:'2s'}}>
           <button className={`select ${!modeToggle?'child-dark':'child-light'}`} onClick={handleClick} style={ButStyle}>
                {selectVal}
           </button>
           <div id='options' style={stylingOpUpdate} className={`${!modeToggle?'child-dark':'child-light'}`}>
                {list.map(item=>{
                    return  <div  key={item} id={item} style={stylingOpDivUpdate} onClick={handleOptClick}>
                        <p className='opt-div' >{item}</p>
                        </div>
                })}
                {/*
                <div className='opt-div-cnt' id='Africa' style={display? stylingOpDivUpdate: stylingOpDiv} onClick={handleOptClick}><p className='opt-div' >{africa}</p></div>
                <div className='opt-div-cnt' id='America' style={display? stylingOpDivUpdate: stylingOpDiv} onClick={handleOptClick}><p className='opt-div'>{america}</p></div>
                <div className='opt-div-cnt' id='Asia' style={display? stylingOpDivUpdate: stylingOpDiv} onClick={handleOptClick}><p className='opt-div'>{asia}</p></div>
                <div className='opt-div-cnt' id='Europe' style={display? stylingOpDivUpdate: stylingOpDiv} onClick={handleOptClick}><p className='opt-div'>{europe}</p></div>
                <div className='opt-div-cnt' id='Oceania' style={display? stylingOpDivUpdate: stylingOpDiv} onClick={handleOptClick}><p className='opt-div'>{oceania}</p></div>
            */}</div>   
        </div>
    )
}
export default HandleSelect
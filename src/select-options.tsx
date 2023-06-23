import React, {useState, useEffect} from 'react'
const list: string[]= ['Africa','America','Asia','Europe','Oceania']
export default function HandleSelect(){
    const [display, setDisplay] = useState(false);
    const [africa, setAfrica] = useState('');
    const [america, setAmerica] = useState('');
    const [asia, setAsia] = useState('');
    const [europe, setEurope] = useState('')
    useEffect(()=>{
        setDisplay((prev)=>!prev)
    },[])

    const handleClick=()=>{
        return (
            <div>
                <div id='list'>
                    {
                        display? list.map((item)=>{
                            return(
                                <div className='listItem'>{item}</div>
                            )
                        }):null
                    }
                </div>
            </div>    
        )
    }
    return(
        <div>
            <button onClick={handleClick}>
                Filter by Region
            </button>
            <div id='list'>

            </div>
            
        </div>
    )
}
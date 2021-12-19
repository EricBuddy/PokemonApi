import React, {useState} from 'react'
import './Shiny.css'
import Axios from 'axios'
function Shiny() {
    
    const[shiny,setShiny]=useState('')


    const search=()=>{
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${shiny}`) .then(
            (res)=>{
               console.log(res) 
            }
        );
    }


    return (
        <div className='shiny'>
            <div className='text'>
                Please Enter A Pokemon Name<br/>
                <input type='text' onChange={e => setShiny(e.target.value)}value={shiny} placeholder='Ex: pikachu'></input>
                <button onClick={search}>Search</button>
            </div>
        </div>
    )
}

export default Shiny

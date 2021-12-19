import React, {useState} from 'react'
import './Shiny.css'
import Axios from 'axios'
function Shiny({bColor}) {
    
    const[shiny,setShiny]=useState('')

    const [shinyAttribute,setShinyAttribute]=useState({
        name: '',
        img:'',
        type:'',
        hp : '',
        attack: '',
        defense: '',
        specialAtk: '',
        specialDef: '',
        speed: ''
    })
    const search=()=>{
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${shiny}`) .then(
            (res)=>{
               console.log(res) 
               setShinyAttribute({
                   name: shiny, 
                   img: res.data.sprites.front_shiny,
                   type: res.data.types[0].type.name,
                   hp: res.data.stats[0].base_stat,
                   attack: res.data.stats[1].base_stat,
                   defense: res.data.stats[2].base_stat,
                   specialAtk: res.data.stats[3].base_stat,
                   specialDef: res.data.stats[4].base_stat,
                   speed: res.data.stats[5].base_stat




                }
                )
            }
        );
    }


    return (
        <div className='shiny' style={{backgroundColor: bColor}}>
            <div className='text'>
                Please Enter A Pokemon Name<br/>
                <input type='text' onChange={e => setShiny(e.target.value)}value={shiny} placeholder='Ex: pikachu'></input>
                <button onClick={search}>Search</button>
            </div>
            <div className='result'>
                Name: {shinyAttribute.name}<br/>
                <img src={shinyAttribute.img}/><br/>
                Type: {shinyAttribute.type}<br/>
                Hp: {shinyAttribute.hp}<br/>
                Attack: {shinyAttribute.attack}<br/>
                Defense: {shinyAttribute.defense}<br/>
                Special Attack: {shinyAttribute.specialAtk}<br/>
                Special Defense: {shinyAttribute.specialDef}<br/>
                Speed: {shinyAttribute.speed}<br/>

            </div>
        </div>
    )
}

export default Shiny

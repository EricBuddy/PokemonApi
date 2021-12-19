import React, {useState} from 'react'
import './NonShiny.css'
import Axios from 'axios'
function Shiny({bColor}) {
    
    const[nonShiny,setNonShiny]=useState('')

    const [nonShinyAttribute,setNonShinyAttribute]=useState({
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
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${nonShiny}`) .then(
            (res)=>{
               console.log(res) 
               setNonShinyAttribute({
                   name: nonShiny, 
                   img: res.data.sprites.front_default,
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
        <div className='nonShiny' style={{backgroundColor: bColor}}>
            <div className='text'>
                Please Enter A Pokemon Name<br/>
                <input type='text' onChange={e => setNonShiny(e.target.value)}value={nonShiny} placeholder='Ex: pikachu'></input>
                <button className='button' onClick={search}>Search</button>
            </div>
            <div className='result'>
                Name: {nonShinyAttribute.name}<br/>
                <img src={nonShinyAttribute.img}/><br/>
                Type: {nonShinyAttribute.type}<br/>
                Hp: {nonShinyAttribute.hp}<br/>
                Attack: {nonShinyAttribute.attack}<br/>
                Defense: {nonShinyAttribute.defense}<br/>
                Special Attack: {nonShinyAttribute.specialAtk}<br/>
                Special Defense: {nonShinyAttribute.specialDef}<br/>
                Speed: {nonShinyAttribute.speed}<br/>

            </div>
        </div>
    )
}

export default Shiny

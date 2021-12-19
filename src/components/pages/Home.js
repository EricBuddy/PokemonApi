import React from 'react'
import './Home.css'
import {Link } from 'react-router-dom'
function Home() {
    return (
        <div className='home'>
           <div className='title'>
              <h1> Welcome to pokemon api.</h1>
           </div>

            <div className='button'>
                <Link to ='/non-shiny'><button><span>Non Shiny Pokemons</span></button></Link>
                <Link to ='/shiny'><button><span>Shiny Pokemons</span></button></Link>
                </div>



        </div>
    )
}

export default Home

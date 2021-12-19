import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css';
function NavBar() {
    return (
        <div className='container'>
           
            <div className='link'>
                <Link to ='/'>Home</Link>
                <Link to ='/non-shiny'>Non Shiny Pokemons</Link>
                <Link to ='/shiny'>Shiny Pokemons</Link>
                
            </div>

        </div>
    )
}

export default NavBar

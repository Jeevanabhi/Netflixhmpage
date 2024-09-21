import React from "react";
import './navbar.css';
import BellIcon from "./assets/notification";
import api from "./assets/axios";

import SearchIcon from "./assets/search";

function Navbar(){
    
    return(
       <> <nav>
        <div className="header">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix Logo" />
            <img className="avatar"src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725321600&semt=ais_hybrid" alt="Avatar" />
            
            <ul className="pages">
                <li><a href="./Home">Home</a></li>
                <li><a href="./Home">TV Shows</a></li>
                <li><a href="./Home">Movies</a></li>
                <li><a href="./Home">New & Popular</a></li>
                <li><a href="./Home">My List</a></li>
                <li><a href="./Home">Browse by language</a></li>
            </ul>
        </div></nav>
        <div className="icon-container">
    <ul>
        <li>
            <SearchIcon className="icon search-icon" />
        </li>
        <li className="child">Children</li>
        <li>
            <BellIcon className="icon bell-icon" />
        </li>
    </ul>
    
</div>

</>
    );
}
export default Navbar
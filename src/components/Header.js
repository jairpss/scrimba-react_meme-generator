import React from "react"
import troll from '../images/troll.png'

function Header() {
    return(
        <div className="header">
            <img src={troll} alt="icon" className="header--icon"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--text">React Course - Project 3</h4>
        </div>
    )
}

export default Header
import React from "react"
import MenuCards from './menuCards.js'
import faceLogo from './face.png';
import foodLogo from './food1.jpg'
import color from './color.jpg'
import './Pages.css'
const Menu = ({ onRouteChange }) => {

    return (
        <div className="Menu">
            <MenuCards onRouteChange={onRouteChange} picture={faceLogo} text={"Facial Recognition"} marginTop='2rem' link="https://github.com/BenasPalivonas" />
            <MenuCards onRouteChange={onRouteChange} picture={foodLogo} text={"Food Recognition"} marginTop='2rem' link="https://github.com/BenasPalivonas" />
            <MenuCards onRouteChange={onRouteChange} picture={color} text={"Color Detection"} marginTop='2rem' link="https://github.com/BenasPalivonas" />
        </div>
    )
}
export default Menu;
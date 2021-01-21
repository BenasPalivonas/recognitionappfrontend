import React from "react"
import MenuCards from './menuCards.js'
import faceLogo from './face.png';
import foodLogo from './food1.jpg'
import color from './color.jpg'
import './Pages.css'
const Menu = ({ onRouteChange }) => {

    return (
        <div className="Menu">
            <MenuCards picture={faceLogo} text={"Facial Recognition"} page={"faceReco"} />
            <MenuCards picture={foodLogo} text={"Food Recognition"} page={"foodReco"} />
            <MenuCards picture={color} text={"Color Detection"} page={"colorReco"} />
        </div>
    )
}
export default Menu;
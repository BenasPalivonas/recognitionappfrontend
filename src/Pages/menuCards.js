import React from 'react'
import { useDispatch } from 'react-redux'
import Tilt from 'react-tilt'
import './menuCards.css'

import './Pages.css'
import { setPage } from '../actions/index'
const MenuCards = ({ picture, text, page }) => {
    const dispatch = useDispatch()
    return (
        <div className="cbl" style={{ justifyContent: 'center', alignContent: 'center', marginLeft: '2rem', marginTop: '1rem', marginBottom: '1rem', display: 'inline-block', verticalAlign: 'top' }}>
            <Tilt className="TiltMenu shadow-2 pointer" options={{ max: 70 }}>

                <div className="Tilt-inner">
                    <p className="menuText"><strong>{text}</strong></p>
                    <div onClick={() => dispatch(setPage(page))}><img src={picture} alt="logo" style={{ marginTop: '0.5rem', alignSelf: 'center' }} />
                    </div>
                </div>
            </Tilt>

        </div >
    );

}
export default MenuCards;
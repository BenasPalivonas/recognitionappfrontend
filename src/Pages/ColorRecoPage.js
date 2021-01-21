import React from 'react'
import '../App.css'
import '../FaceReco/FaceReco.css'
import Form from '../Form/Form.js'
import DisplayImage from '../FaceReco/DisplayImage.js'
import ColorValues from './ColorValues.js'
const ColorRecoPage = ({ url, onClickColor, colorValues }) => {
    return (
        <div>
            <div className='result' >
                <div className='parentDiv'>
                    <DisplayImage link={url} />
                </div>
            </div>
            <div className="form">
                <Form onClick={onClickColor} />
            </div>
            <div className="foodText">
                <br></br>

                <ColorValues colorValues={colorValues} />
            </div>
        </div>
    )
}
export default ColorRecoPage;
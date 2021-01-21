import React from 'react'
import '../App.css'
import '../FaceReco/FaceReco.css'
import Form from '../Form/Form.js'
import DisplayImage from '../FaceReco/DisplayImage.js'
import FoodRecoText from './FoodRecoText'
const FoodRecoPage = ({ url, onClickFood, foodText }) => {
    return (
        <div>
            <div className='result' >
                <div className='parentDiv'>
                    <DisplayImage link={url} />
                </div>
            </div>
            <div className="form">
                <Form onClick={onClickFood} />
            </div>
            <div className="foodText">
                <FoodRecoText foodText={foodText} />
            </div>
        </div>
    )
}
export default FoodRecoPage;
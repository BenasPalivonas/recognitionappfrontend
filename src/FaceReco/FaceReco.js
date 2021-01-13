import React from 'react'
import './FaceReco.css'
import Box from './Box.js'
const FaceReco = ({ link, top, bottom, left, right }) => {

    return (
        <div >
            <img alt="" src={link} height='330px' width='auto' id='facePic' />
        </div>

    );
}
export default FaceReco
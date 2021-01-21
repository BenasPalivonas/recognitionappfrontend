import React from 'react'
import './FaceReco.css'
const DisplayImage = ({ link }) => {

    return (
        <div >
            <img alt="" src={link} height='305px' width='auto' id='facePic' style={{ marginRight: "5px" }} />
        </div>

    );
}
export default DisplayImage
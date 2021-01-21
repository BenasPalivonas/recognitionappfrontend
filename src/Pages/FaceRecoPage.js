import React from 'react'
import Form from '../Form/Form.js'
import DisplayImage from '../FaceReco/DisplayImage.js'
import Box from '../FaceReco/Box.js'

const FaceRecoPage = ({ url, boxParms, count, onClickFace }) => {
    return (
        <div>
            <div className='result' >
                <div className='parentDiv'>
                    <DisplayImage link={url} />
                    <Box box={boxParms} />
                </div>
            </div>
            <div className="form">
                <Form onClick={onClickFace} count={count} />
            </div>
        </div>
    )
}
export default FaceRecoPage
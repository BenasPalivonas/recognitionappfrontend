import React from 'react'
import Form from '../Form/Form.js'
import FaceReco from '../FaceReco/FaceReco.js'
import Box from '../FaceReco/Box.js'
const FaceRecoPage = ({ url, boxParms, count, onClick }) => {
    return (
        <div>
            <div className='result' >
                <div className='parentDiv'>
                    <FaceReco link={url} />
                    <Box box={boxParms} />
                </div>
            </div>
            <div className="form">
                <Form onClick={onClick} count={count} />
            </div>
        </div>
    )
}
export default FaceRecoPage
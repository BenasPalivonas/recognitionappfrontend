import React from 'react'
import './FaceReco.css'
import { useSelector } from 'react-redux'
const Box = ({ box }) => {
    const page = useSelector(state => state.page)
    console.log(box)
    const lenght = Object.keys(box).length;
    if (lenght > 0 && page === "faceReco") {
        return (
            <div>
                {
                    box.map((index) => {
                        return <div className="box" style={{ top: index.top_row, bottom: index.bottom_row, left: index.left_col, right: index.right_col }}>
                        </div>
                    })
                }
            </div>
        )
    }

    else {
        return (<div></div>);
    }
}
export default Box;
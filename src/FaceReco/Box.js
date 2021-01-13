import React from 'react'
import './FaceReco.css'
const Box = ({ box }) => {
    const lenght = Object.keys(box).length;
    if (lenght > 0) {
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
import { useSelector } from "react-redux";
const ColorValues = ({ colorValues }) => {
    console.log(colorValues);
    const page = useSelector(state => state.page)
    if (colorValues.length > 0 && page === "colorReco") {
        return (
            <div >
                Color Values:
                {
                    colorValues.map(index => {
                        console.log(index)
                        return <p style={{
                            background: index.raw_hex, textShadow: "2px 2px #423525", textAlign: "left"
                        }}>  {index.raw_hex} {index.w3c.name} {(index.value * 100).toFixed(0)}%  </p>
                    })
                }
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}
export default ColorValues;
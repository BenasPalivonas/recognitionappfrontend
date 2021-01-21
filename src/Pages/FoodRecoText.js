import { useSelector } from 'react-redux'
const FoodRecoText = ({ foodText }) => {
    const page = useSelector(state => state.page)
    console.log(foodText)
    if (foodText.length && page === "foodReco") {
        return (
            <div>
                <p>probabilities:</p>
                {
                    foodText.map(food => {
                        return <p><bold>{food}</bold></p>
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
export default FoodRecoText;
const FoodRecoText = ({ foodText }) => {
    console.log(foodText)
    if (foodText.length) {
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
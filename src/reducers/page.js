const page = (state = "", action) => {
    switch (action.type) {
        case "SET_PAGE":
            return action.payload
    }
}
export default page
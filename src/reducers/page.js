const page = (state = "signIn", action) => {
    switch (action.type) {
        case "SET_PAGE":
            return action.payload
        default:
            return state
    }
}
export default page
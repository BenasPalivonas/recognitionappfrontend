const user = (state = {}, action) => {
    switch (action.type) {
        case "SET_USER":
            return action.payload
        case "SET_ENTRIES":
            return Object.assign(state, { entries: action.payload })
        default:
            return state

    }
}
export default user;
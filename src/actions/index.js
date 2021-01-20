export const setUser = (data) => {
    return {
        type: "SET_USER",
        payload: data
    }
}
export const setEntries = (entries) => {
    return {
        type: "SET_ENTRIES",
        payload: entries
    }
}
export const setPage = (entries) => {
    return {
        type: "SET_PAGE",
        payload: entries
    }
}

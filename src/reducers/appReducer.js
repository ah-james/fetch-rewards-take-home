const appReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_DATA':
            return action.payload
        case 'ADD_DATA':
            return state
        default:
            return state
    }
}

export default appReducer
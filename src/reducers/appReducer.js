const appReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_DATA':
            return action.payload
        case 'ADD_DATA':
            return [...state, action.payload]
        default:
            return state
    }
}

export default appReducer
const initState = {

}

const resultReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_RESULT':
            console.log('added result', action)
            return {
                ...state,
                result: action.result
            }

        case 'ADD_RESULT_ERROR':
            console.log('added result error', action.err)
            return state;
        default:
            return state;
    }
}

export default resultReducer
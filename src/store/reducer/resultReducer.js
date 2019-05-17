const initState = {

}

const resultReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_RESULT':
            return {
                ...state,
                result: action.result
            }

        case 'ADD_RESULT_ERROR':
            return state;
        default:
            return state;
    }
}

export default resultReducer
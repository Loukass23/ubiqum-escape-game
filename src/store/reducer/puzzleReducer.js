const initState = {

}

const teamReducer = (state = initState, action) => {
    switch (action.type) {
        case 'NEXT_STEP':
            return {
                ...state,
                id: action.payload,
                startTime: new Date()
            }
        default:
            return state;
    }
}
export default teamReducer
const initState = {

}

const teamReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TEAM':
            return {
                ...state,
                team: action.payload,
                startTime: new Date()
            }
        default:
            return state;
    }
}
export default teamReducer
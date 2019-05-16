const initState = {

}

const teamReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TEAM':
            console.log('added team', action.payload)
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
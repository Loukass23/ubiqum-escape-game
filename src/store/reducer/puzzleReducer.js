const initState = {

}

const teamReducer = (state = initState, action) => {
    switch (action.type) {
        case 'NEXT_STEP':
            console.log('validated enigma', action.payload)
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
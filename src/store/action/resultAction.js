import { ADD_RESULT, ADD_RESULT_ERROR } from './actionsTypes'

export const addResult = (result) => {

    return (dispatch, getState, {
        getFirestore
    }) => {

        const firestore = getFirestore();
        firestore.collection('result').add({
            time: result.time,
            team: result.team,

        }).then(() => {
            dispatch({
                type: ADD_RESULT,
                result: result
            });
        }).catch((err) => {
            dispatch({
                type: ADD_RESULT_ERROR,
                err
            })
        })

    }
}
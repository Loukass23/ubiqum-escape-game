import { ADD_RESULT, ADD_RESULT_ERROR } from './actionsTypes'

export const addResult = (result) => {
    //WHITHOUT THUNK
    // return {
    //     type: 'ADD_PROJECT',
    //     project: project
    // }

    return (dispatch, getState, {
        getFirebase,
        getFirestore
    }) => {
        const profile = getState().firebase.profile
        const authorId = getState().firebase.auth.uid
        const firestore = getFirestore();
        console.log(result)
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
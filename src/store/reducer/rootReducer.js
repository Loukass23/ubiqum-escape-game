import authReducer from './authReducer'

import teamReducer from './teamReducer'
import puzzleReducer from './puzzleReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    team: teamReducer,
    puzzle: puzzleReducer,
    auth: authReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});


export default rootReducer

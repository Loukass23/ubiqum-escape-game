import authReducer from './authReducer'
import resultReducer from './resultReducer'
import teamReducer from './teamReducer'
import puzzleReducer from './puzzleReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    team: teamReducer,
    results: resultReducer,
    puzzle: puzzleReducer,
    auth: authReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});


export default rootReducer

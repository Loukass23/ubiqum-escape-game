
export const signIn = (credentials) => {
    return (dispatch, getState, {
        getFirebase
    }) => {
        const firebase = getFirebase()

        firebase.auth().signInWithEmailAndPassword(
            credentials.email, credentials.password
        ).then(() => {
            dispatch({
                type: 'LOGIN_SUCCESS'
            })
        }).catch((err) => {
            dispatch({
                type: 'LOGIN_ERROR',
                err
            })
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, {
        getFirebase
    }) => {
        const firebase = getFirebase()

        firebase.auth().signOut().then(() => {
            dispatch({
                type: 'SIGNOUT_SUCCESSS'
            })
        })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {
        getFirebase,
        getFirestore
    }) => {
        const firebase = getFirebase()
        const firestore = getFirestore()

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })

        }).then(() => {
            dispatch({
                type: 'SIGNUP_SUCCESS'
            })
        }).catch(err => {
            dispatch({
                type: 'SIGNUP_ERROR'
            })
        })
    }
}

export const googleSignIn = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase()
        const firestore = getFirestore()
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((resp) => {
                return firestore.collection('users').doc(resp.user.uid).set({
                    firstName: resp.user.displayName,
                    lastName: '',
                    initials: resp.user.displayName[0] + resp.user.displayName[1],
                    avatar: resp.user.photoURL

                })
            })
            .then(() => {
                dispatch({
                    type: 'LOGIN_SUCCESS'
                })
            })
            .catch((err) => {
                dispatch({
                    type: 'LOGIN_ERROR',
                    err
                })
            })
    }
}
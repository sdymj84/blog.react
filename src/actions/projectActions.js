export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const db = getFirestore()
    const uid = getState().firebase.auth.uid
    const profile = getState().firebase.profile

    db.collection('projects').add({
      ...project,
      firstName: profile.firstName,
      lastName: profile.lastName,
      authorId: uid,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project })
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err })
    })
  }
}
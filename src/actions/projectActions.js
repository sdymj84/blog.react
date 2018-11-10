export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const db = getFirestore()
    db.collection('projects').add({
      ...project,
      firstName: "Minjun",
      lastName: "Youn",
      authorId: "123",
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project })
    }).catch((error) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', error })
    })
  }
}
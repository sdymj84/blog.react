const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

exports.helloWorld = functions.https.onRequest((req, res) => {
  res.send("Hello Minjun!")
})

const createNotification = (notification) => {
  admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => {
      doc.get().then(doc => {
        console.log("New notification created : ", doc.data())
      })
    })
}

exports.projectCreated = functions.firestore
  .document('/projects/{projectId}')
  .onCreate(doc => {
    const project = doc.data()
    const notification = {
      content: "New Post : " + project.title,
      user: project.firstName + ' ' + project.lastName,
      time: project.createdAt
    }
    createNotification(notification)
  })

exports.userJoined = functions.auth.user()
  .onCreate(user => {
    admin.firestore().collection('users').doc(user.uid)
      .get().then(doc => {
        const user = doc.data()
        const notification = {
          content: "New User Joined",
          user: user.firstName + ' ' + user.lastName,
          time: admin.firestore.FieldValue.serverTimestamp()
        }
        createNotification(notification)
      })
  })
import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId:  process.env.FIREBASE_PROJECT_ID,
    storageBucket:  process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId:  process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: "1:389112559848:web:3ff0b5e52e5bb70d1d715d",
    measurementId: "G-EQ4T75B0L9"
  };

  firebase.initializeApp(config)
  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {firebase, googleAuthProvider, database as default };

//   database.ref().set({
//       name: 'Amit Bhandari',
//       age: 25,
//       stressLevel: 6,
//       job: {
//         title: 'Software Developer'  ,
//         company: 'Google'  
//       },
//       isSingle: false,
//       location: {
//           city: 'Kathmandu',
//           country:'Nepal'
//       }
//   })


// database.ref('attributes').set({
//     height: 73,
//     weight: 23
// }).then(() => {
//     console.log('this is running')
// }).catch((error) => {
//    console.log('there is some error')
// })

// database.ref('isSingle').remove().then(() => {
//     console.log('removed')
// }).catch(() => {
//     console.log('ERROR ')
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company':'Amazon',
//     'location/city':"Seattle"
// })

// database.ref().once('value').
// then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val)

// }).catch ((e) => {
//   console.log('Error', e)
// })

// database.ref().on('value',(snapshot) => {
//    const val = snapshot.val();
//    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })

// database.ref('expenses').push({
//     description: "amit",
//     note: "it is shit",
//     amount: 500,
//     createdAt: "05/02/2020"
// })

// database.ref('expenses').push({
//     description: "amar",
//     note: "it is not shit",
//     amount: 80000,
//     createdAt: "05/02/2020"
// })

// database.ref('expenses').once('value')
// .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })

//     console.log(expenses)
// })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })

// //child removed

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// //child changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

//child added

// database.ref('expenses').on('child_added',(snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })
//express backend
const express = require('express')
const cors = require('cors')
var admin = require("firebase-admin");

var serviceAccount = require("C:/Users/hilal/Downloads/fir-auth-279eb-firebase-adminsdk-3os3j-2630e2ce66.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

const app = express()
const port = 3000

app.use(cors())

app.get('/', async(req, res) => {
    let email = req.query.email;
    let name;
    console.log(req.query.email)
    var citiesRef = db.collection('calculia DB');
    var query = await citiesRef
        .where('email', '==', email)
        .get()
        .then(snapshot => {
            // console.log(snapshot)
            snapshot.forEach(doc => {
                console.log(doc.id, '=>', doc.data());
                name = doc.data().name;
            });
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });
console.log(name)
  res.json(name)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
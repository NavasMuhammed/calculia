//express backend
const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser')
var admin = require("firebase-admin");


var serviceAccount = require("C:/Users/hilal/Downloads/fir-auth-279eb-firebase-adminsdk-3os3j-2630e2ce66.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

const app = express()
const port = 5000
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())

app.get('/', async (req, res) => {
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

app.get('/test',async (req, res) => { 
    let name = req.query.name;
    let returndata;
    console.log(req.query.email)
    var detailsfound = false;
    var citiesRef = db.collection('studentDetails');
    var query = await citiesRef
        .where('name', '==', name)
        .get()
        .then(snapshot => {
            // console.log(snapshot)
            snapshot.forEach(doc => {
                detailsfound = true;
                console.log(doc.id, '=>', doc.data());
                returndata = doc.data();
            });
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });
    if(!detailsfound){
        db.collection("studentDetails").add({
            name: name,
            level: 0,
            progress:0,
            score:0
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
    if(detailsfound){
        console.log("details found")
        res.json(returndata);
    }
    else{
        res.json({name:name,level:0,progress:0,score:0})
    }
})

app.get('/question',async (req, res) => {
    let level = req.query.level;
    let questData = [];
    var citiesRef = db.collection('questionsDB').doc(level).collection('Q');
    var query = await citiesRef
        .get()
        .then(snapshot => {
            // console.log(snapshot)
            snapshot.forEach(doc => {
                console.log(doc.id, '=>', doc.data());
                questData.push(doc.data());
            });
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });
    res.json(questData)
})

app.post('/update',async (req, res) => {
    let countQstn = req.body.data.countQstn;
    console.log("reached in update"+countQstn);
    let countScore = req.body.data.countScore;
    let name = req.body.data.name;
    let reqfields = req.body.data.reqFields;
    //insert into database
    var citiesRef = db.collection('studentDetails');
    var query = await citiesRef
        .where('name', '==', name)
        .get()
        .then(snapshot => {
            // console.log(snapshot)
            snapshot.forEach(doc => {
                console.log(doc.id, '=>', doc.data());
                db.collection("studentDetails").doc(doc.id).update({
                    [reqfields[0]]: countQstn,
                    [reqfields[1]]: countScore
                })

    console.log(req.body.data);
})})})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
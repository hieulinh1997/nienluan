var express = require('express')
var router = express.Router()
var logger = require('morgan')
var bodyParser = require('body-parser')

var admin = require('firebase-admin')
// This account is no longer valid
var serviceAccount = require('./knowledgequizapp-firebase-adminsdk-cc9mo-e7e58ae12b.json')

var firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://knowledgequizapp.firebaseio.com'
})

var database = firebaseAdmin.database()

// Create instance of express app
var app = express()
app.use(express.static('static_files'));
// app.get('/', function(request, response){
//     var restaurantsRef = database.ref("/Users")
    
//     restaurantsRef.once('value', function(snapshot){
//         var data = snapshot.val()
        
//         if ( !data ) {
//             data = {}
//         }
        
//         response.render('home.ejs', { users: data })        
//     })
// })
// We want to serve js and html in ejs
// ejs stands for embedded javascript
app.set('view engine', 'ejs')

// We also want to send css, images, and other static files
app.use(express.static('views'))
app.set('views', __dirname + '/views')

// Give the server access to the user input
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(logger('dev'))

app.use(function(request, response, next){
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    response.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

var getUsers = database.ref("/Users")
router.get('/', function(req, res, next) {
    res.send(getUsers());
  });


app.get('/', function(request, response){
    var restaurantsRef = database.ref("/Questions")
    
    restaurantsRef.once('value', function(snapshot){
        var data = snapshot.val()
        
        if ( !data ) {
            data = {}
        }
        
        response.render('home.ejs', { questions: data })      
    })
})
app.post('/', function (req, res) {
    console.log("HTTP POST Request");
    res.send("HTTP POST Request");  
  });
  
app.get('/', (req, res) => {
    const allUsernames = Object.keys(Users); // returns a list of object keys
    console.log('allUsernames is:', allUsernames);
    res.send(allUsernames);
  });

app.get('/profile/:userId', (req, res) => {
    var userId = req.params.userId
    
    var user = firebaseAdmin.getAllUsersData(userId)
    
    res.render('profile.ejs', { user: user })
})

app.get('/', function (req, res) {

    console.log("HTTP Get Request");
    var userReference = firebase.database().ref("/Users/");

    //Attach an asynchronous callback to read the data
    userReference.on("value", 
            function(snapshot) {
                    console.log(snapshot.val());
                    res.json(snapshot.val());
                    userReference.off("value");
                    }, 
            function (errorObject) {
                    console.log("The read failed: " + errorObject.code);
                    res.send("The read failed: " + errorObject.code);
            });
    });


var port = process.env.PORT || 8080

app.listen(port, function(){
    console.log('App running on port ' + port)
})

module.exports = router

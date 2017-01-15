
//The server.js acts as the start­ing point of the appli­ca­tion
//First let us start with main requirements for node applicaiton to work

//Load Environment variables
require('dotenv').config();

//Requirements Section:-
var express=require('express');
var bodyParser=require('body-parser');
var path=require('path');
var routes=require('./server/routes/routes');
var ejsLayouts = require("express-ejs-layouts");
var mongoose=require('mongoose');
var session=require('express-session');
var cookieParser=require('cookie-parser');
var flash =require('connect-flash');
var port=process.env.PORT || 8000;
//-----------------------------------------------------------------------------

// Set up the application
var app = express();

// set session and cookie parser
app.use(cookieParser()); //we need first to use cookie parser first
// our session needs to have some default configuration
app.use(session({
  secret:process.env.SECRET, //this will be used to sign the session into the cookie and, the secret makes sure that this session only used with sith application
  cookie:{maxAg:60000},
  resave:false, //forces the sessiont to be saved back to store
  saveUninitialized:false //don't save unmodified session
}));
app.use(flash()); //this will alow us to set flash in our session
//-----------------------------------------------------------------------

//Static folders
app.use(express.static(path.join(__dirname,"./server/public")));
app.use(express.static(path.join(__dirname,"./server/angular")))
app.use(express.static(path.join(__dirname,"./node_modules/angular")));
app.use(express.static(path.join(__dirname,"./node_modules/bootstrap/dist")));
//-----------------------------------------------------------------------------
//View Engine setup
app.set('views', path.join(__dirname,"./server/views"));
app.set('view engine','ejs');//set ejs as our templating view engine
app.use(ejsLayouts); //here we set our layouts
//----------------------------------------------------------------------------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
//Tell express where to look for our static files
//This tells Express that a directory called public contains static content and files should be served directly when requested.
app.use(express.static(__dirname + '/public'));
//The __dirname is the directory where the current file is located. 
//So what this means is that public is a directory located in the same directory as the app.js file.
//----------------------------------------------------------------------------

//connect to our database, here the actual link is hided inside the .env file, this is like securing the sensetive data from being exposed 
mongoose.connect(process.env.DB_URI);

//----------------------------------------------------------------------------

//Connect our routes to our application
app.use('/',routes); // when routes called it will require index.js by default
//-----------------------------------------------------------------------------

//Start our server
// var server = app.listen(port,function(){
//     var host = server.address().address;
//     var port = server.address().port;
app.listen(port,()=>{
  console.log('Server is running and listening at http:/localhost:'+port);
});
  
   // console.log("Server is running at port: " + port);
//});
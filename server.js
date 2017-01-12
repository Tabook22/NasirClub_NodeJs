
//The server.js acts as the start­ing point of the appli­ca­tion

//First let us start with main requirements for node applicaiton to work

//Load Environment variables
require('dotenv').config();

//Requirements Section:-
var express=require('express');
var bodyParser=require('body-parser');
var path=require('path');
var routes=require('./routes/routes');
var ejsLayouts = require("express-ejs-layouts");
var mongoose=require('mongoose');
var port=process.env.PORT || 3000;
//-----------------------------------------------------------------------------

// Set up the application
var app = express();
app.set("port", process.env.PORT || 3000);
app.set('views', path.join(__dirname,"./views"));
app.set('view engine','ejs');//set ejs as our templating view engine
app.use(ejsLayouts);
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

//connect to our database

mongoose.connect(process.env.DB_URI);

//----------------------------------------------------------------------------

//Connect our routes to our application
app.use('/',routes); // when routes called it will require index.js by default

//Start our server
// var server = app.listen(port,function(){
//     var host = server.address().address;
//     var port = server.address().port;
app.listen(port,()=>{
  console.log('Server is running and listening at http:/localhost:'+port);
});
  
   // console.log("Server is running at port: " + port);
//});
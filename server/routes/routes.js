//routes.js:- This is the default file which gets loaded when you require the routes folder, or any other folder what­so­ever. 

var express=require('express');
var router=express.Router();
var postController=require('../controllers/postController');
var userController=require('../controllers/userController');

//Route to the home page ----------------------------------------------------------------------------------
router.get('/',function(req,res){
    res.render("pages/index",{layout:'./layouts/layout'});
    //to change another layout 
    //res.render('pages/index', { layout: 'sidebar-layout' });
});

// Post Controller ----------------------------------------------------------------------------------------
//Here we are simply callilng the controller in routes files and simply 
//using functions in the controller.
router.get('/allPost',postController.allPost);
router.get('/findPost/:id',postController.findPost);
router.get('/addPost',postController.addPost);
router.get('/editPost',postController.editPost);//seed posts to the database to start with
router.get('/delPost/:id/delete',postController.delPost);

//User Controller ------------------------------------------------------------------------------------------
router.get('/allUsers',userController.allUsers);
router.get('/findUser/:user',userController.findUser);
router.get('/addUser',userController.addUser);
router.get('/editUser',userController.editUser);
router.get('/delUser',userController.delUser);
router.post('/registerUser',userController.regUser);

//export router so it will be availabe to be used inside different locaiton in the nodejs application
module.exports=router;
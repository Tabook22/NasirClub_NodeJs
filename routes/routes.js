//index.js:- This is the default file which gets loaded when you require the routes folder, or any other folder what­so­ever. 

var express=require('express');
var router=express.Router();
var postCtrl=require('../controllers/postController');

router.get('/',function(req,res){
    res.render("pages/index");
    //to change another layout 
    //res.render('pages/index', { layout: 'sidebar-layout' });
});
router.get('/nasser',function(req,res){
    res.send("بسم الله الرحمن الرحيم");
});

//Here we are simply callilng the controller in routes files and simply 
//using functions in the controller.
router.route('/postFind').get(postCtrl.getPost);
router.route('/postList').get(postCtrl.getPostLst);
router.route('/postAdd').post(postCtrl.postPost);

module.exports=router;
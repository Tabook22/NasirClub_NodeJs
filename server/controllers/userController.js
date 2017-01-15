//The first thing we need to do is to get our user model, because this controller will need that model to work with it
var User=require('../models/User');

//export controller so it can be used in our nodejs application(for example we can use it inside the routes.js file to link routes to controller and its function)
//keep in mind that we can't use userController.js file any where unless we exported it, and then required it from another location
module.exports={
    allUsers:allUsers, //links to allUsers function which will display all users
    findUser:findUser, //links to findUser function which find a specific user based up on user id
    addUser:addUser,   //links to addUser function which will add display the registration page through which we can add or register new users
    regUser:regUser,   //links to regUsers function which will register an new user into our system
    editUser:editUser, //links to editUsers function which will modifies users registration data
    delUser:delUser    //links to delUsers function which will delete a specific users based on his user id
    }

    /**Fucntion show all users ***************************************************************************/
    function allUsers(req,res){
        //get all user
        User.find({},(err,users)=>{
            if(err){
                res.status(404);
                res.send('Users Not Found !');
            }
             res.render('./partials/allUsers',{
                 layout:'./layouts/layout',
                 users:users,
                 success:req.flash('success')
                });
        });
       
    }
    
    /**Fucntion find *********************************************************************************/
    function findUser(req,res){
        //Find user
    }

    /**Fucntion add users****************************************************************************/
    function addUser(req,res){
        //this will display the registration page
        res.render('./partials/addNewUsers',{layout:'./layouts/layout'});
        
    }

    /** Function to register a new user *************************************************************/
    function regUser(req,res){
        //add new user
        var name=req.body.name;
        var username=req.body.username;
        var password=req.body.password;
        var location=req.body.location
        //res.send("User is Added "+ name +" "+username);

        
        // Create user
        var newUser = User({
            name: name,
            username: username,
            password: password,
           admin: true
        });
        // save the user
        newUser.save(function(err) {
            if (err) throw err;
            console.log('User created!');
        });

        //set a successfull flash message
        req.flash('success', 'Successfuly created user!');// now this success messate will be added to session data
        res.redirect('allUsers'); // here we redirect the user to our user list
    }

    /**Fucntion eidt users***************************************************************************/
    function editUser(req,res){
        //edit user
    }

    /**Fucntion del users***************************************************************************/

    function delUser(req,res){
        //del user
    }
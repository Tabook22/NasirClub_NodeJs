//Link the controller to post model
var Post=require('../models/post');
//here the module will export an object which contains all the function which will do the CRUD operations
//checkout the ourtes.js file to see how the function will be called when a certain route will be used.
module.exports={
    allPost:allPost,
    findPost:findPost,
    addPost:addPost,
    editPost:editPost,
    delPost:delPost
}

/**Function to get all post from database----------------------------------------------------------------*/
function allPost(req,res){
    //get all posts from database
    Post.find({},(err,posts)=>{
        if(err){
            res.status(404);
            res.send('Post Not Found !');
        }

        //return a view with post data
        res.render('./partials/postlst',{
            posts:posts,
            layout:'./layouts/layout'
        });
    });
}

/**Function to find a single post------------------------------------------------------------------------*/
function findPost(req,res){
    Post.findById({_id:req.params.id},(err,post)=>{
        if(err){
            res.status(404);
            res.send('Post Not Found!');
        }
         // object of the user
  //return res.json(post);
     res.render("./partials/findPost",{layout:'./layouts/layout',post:post});
    });
    
 }

/**Function to add new Post------------------------------------------------------------------------------*/
function addPost (req,res){
   var psts=[
       {title:"رونالدو: أصبحت جزءاً من تاريخ كرة القدم",description:'sssss'},
       {title:"بايرن يعير بادشتوبر إلى شالكه",description:'ssssssss'},
       {title:"أنشيلوتي: الأندية الأوروبية في مأمن من الإنفاق الصيني",description:'ssssss'}
    ];
         
        // var newPost=Post({
        //     title:"رونالدو: أصبحت جزءاً من تاريخ كرة القدم",description:'sssss'
        // });
        //use the Post model to insert/save
        //but first we need to remove the whole data before insering the new once, notice in realy data sitution we should't do that, but here we do that just as an example
        Post.remove({},()=>{
            for(pst of psts){
                var newPost=new Post(pst); //here we create a new instance of Post model and add to it the post array of objects
                newPost.save();// here we use the save method of the object post or its instance which we call iet newPost to save data
            }
        // save the Post
            newPost.save(function(err) {
                if (err) throw err;
                console.log('Database seeded');
            });
        })
       
       res.send("Every thing is ok") ;
    }

/**Function to edit post-----------------------------------------------------------------------------------------*/
function editPost(req,res){
    //edit post
}

/**Function to delete post----------------------------------------------------------------------------------------*/
function delPost(req,res){
    Post.remove({_id:req.params.id},(err)=>{
        //set flash data
        //redirect back to the events page

        //req.flash('success','Post deleted!');
        res.redirect('/allPost');
    });
}

//Link the controller to post model
const Post=require('../models/post');

module.exports={
    getPost:function(req,res){
       //do something
    },
    getPostLst:function(req,res){
        var posts=[
            {title:"رونالدو: أصبحت جزءاً من تاريخ كرة القدم"},
            {title:"بايرن يعير بادشتوبر إلى شالكه"},
            {title:"أنشيلوتي: الأندية الأوروبية في مأمن من الإنفاق الصيني"}
        ];
        res.render("partials/postLst",{posts:posts});
    },
    postPost:function(req,res){
        //do something
    },

    //seed our database
    seedPosts:(req,res)=>{
      const posts=[
            {title:"رونالدو: أصبحت جزءاً من تاريخ كرة القدم"},
            {title:"بايرن يعير بادشتوبر إلى شالكه"},
            {title:"أنشيلوتي: الأندية الأوروبية في مأمن من الإنفاق الصيني"}
        ];  
        //use the Post model to insert/save
        for(post in posts){
            var newPost=new Post(Post); //here we create a new instance of Post model and add to it the post array of objects
            newPost.save();// here we use the save method of the object post or its instance which we call iet newPost to save data
        }

        //seeded!
        res.send('Database seeded');
    }
}
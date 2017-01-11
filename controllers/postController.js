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
    }
}
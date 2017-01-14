var mongoose=require('mongoose');
var Schema=mongoose.Schema;

//create a post Schema
var postSchema=new Schema({
    title:String,
    description:String
});

//create the model and add the schema to it
var post=mongoose.model('Post',postSchema);

//export the model
module.exports=post;


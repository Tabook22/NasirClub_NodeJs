var mongoose=require('mongoose');
var Schema=mongoose.Schema;

//create a Schema
var postSchema=new Schema({
    title:{
        type:String,
        unique:true,
        require:true
    },
    description:{
        type:String
    }
});

//create the model
const postModel=mongoose.model('post',postSchema);

//export the model
module.exports=postModel;


var mongoose=require('mongoose');
var Schema=mongoose.Schema;

//create user Schema
var userSchema=new Schema({
  name: String,
  username: { type: String, required: true, unique: true,max:20 },
  password: { type: String, required: true,max:20 },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: { 
     type : Date,
     default: Date.now
  },
 updated_at: { 
    type : Date ,
      default: Date.now 
    }
});

//creat a model to use the schema, othewise it is useless to create schema with using it, 
//and the way to use it is to create model and add the schema to that model

var User=mongoose.model('User',userSchema);

//make this model available to be used in our nodejs project by exporting it, so it can be used
module.exports=User; //Notice: here we are exporting the model user so we can use it, if we don't export it we can't use id in our node project
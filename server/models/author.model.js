const mongoose = require('mongoose'); 
const AuthorSchema = mongoose.Schema({
  name:{
    type:String, 
    minLength: [3,"Name must be at least 3 characters long"], 
    required: [true,"Name is required"]
  }
},{timestamps:true}); 
module.exports = mongoose.model("Author",AuthorSchema); 
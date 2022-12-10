const mongoose = require('mongoose');

mongoose.set('strictQuery',false)

mongoose.connect("mongodb://localhost/authors",()=> {
  console.log('Connected to MongoDB!')
})


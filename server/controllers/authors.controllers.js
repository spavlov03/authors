const Author = require('../models/author.model'); 
module.exports = { 
  createAuthor: (req,res) => { 
    Author.create(req.body)
    .then(author1 => res.json(author1))
    .catch(err=>res.status(400).json(err))
  }, 
  getAuthors: (req,res) => { 
    Author.find(req.body).sort({"name":1})
      .then(author1=>res.json(author1))
      .catch(err=>res.json(err))
  },
  findAuthor: (req,res) => { 
    Author.findOne({_id:req.params.id})
      .then(author1=>res.json(author1))
      .catch(err=>res.json(err))
  },
  updateAuthor: (req,res) => { 
    Author.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
      .then(author1=>res.json(author1))
      .catch(err=>res.status(400).json(err))
  }, 
  deleteAuthor: (req,res) => { 
    Author.deleteOne({_id:req.params.id})
      .then(author1=>res.json(author1))
      .catch(err=>res.json(err))
  }
}
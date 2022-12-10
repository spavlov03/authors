const AuthorsControllers = require('../controllers/authors.controllers'); 
module.exports=(app) => { 
  app.post('/api/author',AuthorsControllers.createAuthor);
  app.get('/api/authors',AuthorsControllers.getAuthors); 
  app.get('/api/author/:id',AuthorsControllers.findAuthor); 
  app.put('/api/author/:id',AuthorsControllers.updateAuthor); 
  app.delete('/api/author/:id',AuthorsControllers.deleteAuthor)
}
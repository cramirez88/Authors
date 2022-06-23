const AuthorController = require('../controllers/author.controller');
module.exports = (app) => {
    // app.get('/api', PersonController.index);
    app.post('/api/author', AuthorController.createPerson);     
    app.get('/api/author', AuthorController.getAllAuthors);
    app.get('/api/author/:_id', AuthorController.getOneAuthor)
    app.put('/api/author/:_id', AuthorController.updateAuthor)
}


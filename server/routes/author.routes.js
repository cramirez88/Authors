const AuthorController = require('../controllers/author.controller');
module.exports = (app) => {
    // app.get('/api', PersonController.index);
    app.post('/api/people', AuthorController.createPerson);     
}


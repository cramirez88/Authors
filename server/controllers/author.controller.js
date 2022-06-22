const Author = require('../models/author.model');    /* this is new */

module.exports.createPerson = (request, response) => {
    const {firstName, lastName} = request.body
    Author.create({
      firstName: firstName,
      lastName: lastName
    }) 
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err));
}


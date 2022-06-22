const Author = require('../models/author.model');    

module.exports.createPerson = (request, response) => {
    const {firstName, lastName} = request.body
    Author.create({
      firstName: firstName,
      lastName: lastName
    }) 
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err));
}

// Get all authors

module.exports.getAllAuthors = (request, response) => {
  Author.find({})
  .then(author => {
    console.log(author)
    response.json(author)
  })
  .catch(err => {
    console.log(err)
    response.json(err)
  })
}



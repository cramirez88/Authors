const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    firstName: { type: String,
                required: [
                  true,
                  'First Name is required and must be at least 3 characters long'
                ]
    },
    lastName: { type: String,
                required: [
                  true,
                  'Last name is required and must be at least 3 characters long'
                ]
    }
}, { timestamps: true });
module.exports = mongoose.model('Author', AuthorSchema);


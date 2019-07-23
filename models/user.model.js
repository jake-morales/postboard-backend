var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    username: {
        type: String,
        unique: true
    },
    password: String,
    
})

const User = mongoose.model('User', userSchema);

module.exports = User;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: String,
    description: String,
    imageURL: String,
}, {
    timestamps: true,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
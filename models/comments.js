const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchemas = new Schema({
    comment:{type:String}
});

const Comments = mongoose.model("amirComments", CommentSchemas);

module.exports = Comments;
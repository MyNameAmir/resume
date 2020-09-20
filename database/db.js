const mongoose = require('mongoose');

const mongoDB = "mongodb+srv://amirComments:5ptuZc17ifzQwmKj@cluster0-4uot5.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(mongoDB, {useNewUrlParser:true, useUnifiedTopology:true});

let db = mongoose.connection;

db.on('error', ()=>console.log("Error connecting to database"));

module.exports = db;


//amirComments

//5ptuZc17ifzQwmKj
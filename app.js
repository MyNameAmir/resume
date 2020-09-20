const express = require('express');
const app = express();


const db = require('./database/db');

const comments = require('./models/comments');

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello there welcome to my page");
})

app.post('/amirComments', (req,res)=>{
    
        
       let comment = new comments(req.body);
       console.log(req.body)
       comments(req.body).save()
       .then(result=>{
    
           console.log(req.body);
       })
        .catch(error=>res.send(error));
    
});

    db.once('open', ()=>{
        
    console.log('connected to db');
        
    const server = app.listen(process.env.PORT, ()=>{
        console.log('listening on 8080');
    });
});
        

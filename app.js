const express = require('express');
const app = express();

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.send("hello there welcome to my page");
})

const server = app.listen(8080, ()=>{console.log('listening')});

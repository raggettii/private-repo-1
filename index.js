const express = require('express');
const app = express();
const port = 8080;

app.get('/',(req,res)=>{
    res.send("Server started Hello sirr jiii ")
});

app.get('/new',(req,res)=>{
    res.send("Just the next page")
});

app.get('/new2',(req,res)=>{
    res.send("Another page of the repo for testing")
});

app.get('/newwwwwww',(req,res)=>{
    res.send("Just one more page ")
});


app.listen(port, () => {
    console.log(`Server started running on port ${port}`);
  });
const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send("Server started Hello sirr jiii ")
});


app.listen(port, () => {
    console.log(`Server started running on port ${port}`);
  });
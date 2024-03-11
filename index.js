const express = require ('express');
const app =express();
port = 5000


app.use("/", (req, res)=>{
    res.send(`Server is up and listening on port ${port}` )
})






app.listen(port, ()=>{
    console.log(`Server is  up and listening on port ${port}` )
})
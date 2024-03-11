const express = require ('express');
const app =express();
port = 5000


app.use("/api/lines", (req, res)=>{
    res.send(`Server is up and listening on port ${port}, Server is up and listening on port ${port}, Server is up and listening on port ${port}, Server is up and listening on port ${port},Server is up and listening on port ${port}m, Server is up and listening on port ${port}, Server is up and listening on port ${port}, Server is up and listening on port ${port}, Server is up and listening on port ${port}, Server is up and listening on port ${port}, Server is up and listening on port ${port}, Server is up and listening on port ${port},  ` )
    res.send(`Server is up and listening on port ${port}, Server is up and listening on port ${port}, Server is up and listening on port ${port}, Server is up and listening on port ${port},Server is up and listening on port ${port}m, Server is up and listening on port ${port}, Server is up and listening on port ${port}, Server is up and listening on port ${port}, Server is up and listening on port ${port}, Server is up and listening on port ${port}, Server is up and listening on port ${port}, Server is up and listening on port ${port}, ,  ` )
})






app.listen(port, ()=>{
    console.log(`Server is  up and listening on port ${port}` )
})
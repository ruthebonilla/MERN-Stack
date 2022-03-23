const express = require("express");
const app = express();
const port = 8000;

// app.get("/api/test", (req, res)=>{
//     res.json({message:"hellooooo"});
// })

require("./server/config/mongoose.config");

app.use(express.json(),express.urlencoded({extended:true}));

require("./server/routes/jokes.routes")(app);

app.listen(port, ()=>console.log(`running on port ${port}`));

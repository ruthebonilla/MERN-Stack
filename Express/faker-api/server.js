const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');
const User = require("./components/User");
const Company = require("./components/Company");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// routes--------------------------------------------
app.get("/api/user/new", (req, res)=>{
    res.json(new User());
});

app.get("/api/company/new", (req, res)=>{
    res.json(new Company());
});

app.get("/api/user/company", (req, res)=>{
    res.json([new User(), new Company()]);
});
// ---------------------------------------------------



// runs port----
app.listen(port, ()=>console.log(`Running on port ${port}!!!!`));

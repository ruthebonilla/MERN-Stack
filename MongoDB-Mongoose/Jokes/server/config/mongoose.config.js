const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/jokes", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("connecting to db was successful!"))
    .catch(err => console.log("connection to db was a fail!", err));
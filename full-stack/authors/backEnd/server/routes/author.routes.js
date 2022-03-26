const AuthorController = require("../controllers/author.controller");


module.exports = app =>{
    app.get("/api/authors", AuthorController.getAllAuthors);
    app.get("/api/authors/:_id", AuthorController.getOneAuthor);
    app.post("/api/authors/create", AuthorController.createAuthor);
    app.patch("/api/authors/update/:_id", AuthorController.updateAuthor);
    app.delete("/api/authors/delete/:_id", AuthorController.deleteAuthor);
    // app.get("/api/authors/random", AuthorController.getRandomAuthor);
}
const ProductController = require("../controllers/product.controller");


module.exports = app =>{
    app.get("/api/products", ProductController.getAllProducts);
    app.get("/api/products/:_id", ProductController.getOneProduct);
    app.post("/api/products/create", ProductController.createProduct);
    app.patch("/api/products/update/:_id", ProductController.updateProduct);
    app.delete("/api/products/delete/:_id", ProductController.deleteProduct);
    // app.get("/api/products/random", ProductController.getRandomProduct);
}
const PirateController = require("../controllers/pirate.controller");


module.exports = app =>{
    app.get("/api/pirates", PirateController.getAllPirates);
    app.get("/api/pirates/:_id", PirateController.getOnePirate);
    app.post("/api/pirates/create", PirateController.createPirate);
    app.patch("/api/pirates/update/:_id", PirateController.updatePirate);
    app.delete("/api/pirates/delete/:_id", PirateController.deletePirate);
    // app.get("/api/pirates/random", PirateController.getRandomPirate);
}
const MemoryController = require("../controllers/memory.controller");


module.exports = app =>{
    app.get("/api/memories", MemoryController.getAllMemories);
    app.get("/api/memories/:_id", MemoryController.getOneMemory);
    app.post("/api/memories/create", MemoryController.createMemory);
    app.patch("/api/memories/update/:_id", MemoryController.updateMemory);
    app.delete("/api/memories/delete/:_id", MemoryController.deleteMemory);
}
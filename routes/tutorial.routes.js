module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");

    var router = require("express").Router();

    app.get("/", tutorials.findAll);
    // create new tutorial
    app.post("/", tutorials.create);

    // 
    app.get("/", tutorials.findAll);

    // 
    app.get("/published", tutorials.findAllPublished);

    // 
    app.get("/:id", tutorials.findOne);
    
    // 
    app.get("/:id",tutorials.update);

    // //
    app.get("/", tutorials.delete);

    // //
    app.get("/", tutorials.deleteAll);

    app.use("/api/tutorials", router);
};
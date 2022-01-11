module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");

    var router = require("express").Router();

    // create new tutorial
    router.post("/", tutorials.create);

    //
    router.get("/", tutorials.findAll);

    //
    router.get("/published", tutorials.findAllPublished);

    //
    router.get("/:id", tutorials.findOne);
    
    //
    router.get("/:id",tutorials.update);

    //
    router.get("/", tutorials.delete);

    //
    router.get("/", tutorials.deleteAll);

    app.use("/api/tutorials", router);
};
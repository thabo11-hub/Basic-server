const { connect } = require("mongoose");

const express = require("express");
const cors = require("cors");
const db = require("./models");
const bodyParser = require("body-parser");

const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "application." });
});
//call the file
const dbConfig = require("./config/db.config.js");

//call mongodb
db.mongoose
  .connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  })
  .then(() => {
    console.log("connected to db");
  })
  .catch(err => {
    console.log("Cannot connect to db",err);
    process.exit();
  });

// set port, listen for requests
// require('./app/routes/tutorial.routes')(app);
require('./routes/tutorial.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
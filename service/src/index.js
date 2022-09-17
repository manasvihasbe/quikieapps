const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/stocks").then((r) => {
  console.log("Connected");
});

const symbolSchema = new mongoose.Schema({
  companyName: String,
  symb: String,
  marketCaps: Number,
  currentPrice: Number,
  viewData:Boolean,
});
const CryptoModel = mongoose.model("Cryptos", symbolSchema);

// defining the Express app
const app = express();
// defining an array to work as the database (temporary solution)
const ads = [{ title: "Hello, world (again)!" }];

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

app.post("/cryptos", (req, res) => {
  console.log(req.body);
  var c = new CryptoModel(req.body);
  c.save().then((result) => {
    res.status(201).send({ id: result._id });
  });
});

// defining an endpoint to return all ads
app.get("/", (req, res) => {
  res.send(ads);
});

app.get("/cryptos", (req, res) => {
  CryptoModel.find().exec(function (err, symbols) {
    res.status(200).send(symbols);
  });
});

app.delete("/cryptos", (req, res) => {
  CryptoModel.deleteOne({_id: req.query.id}).exec(function (err, symbols) {
    res.status(200).send(req.query.id);
  });
});

// starting the server
app.listen(3001, () => {
  console.log("listening on port 3001");
});

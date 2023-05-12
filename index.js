const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Product = require("./app/models/product");
const Funda = require("./app/models/funda");
const { MongoClient } = require("mongodb");
const app = express();
const url =
  "mongodb+srv://robot:123@cluster0.xdlfxyy.mongodb.net/pcase?retryWrites=true&w=majority";
var cursor;
app.use(cors());
app.use(express.json());

var client = new MongoClient(url);

app.listen(3003, () => {
  console.log("app listen on port ", 3003);
});

app.post("/products", async (req, res) => {
  try {
    const product = new Product(req.body);
    client.db("pcase").collection("products").insertOne(product);
    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving product");
  }
});

app.get("/products", async (req, res) => {
  try {
    const result = await client
      .db("pcase")
      .collection("products")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      });
    console.log(result);
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving product");
  }
});

app.get("/funda", async (req, res) => {
  try {
    const result = await client
      .db("pcase")
      .collection("products")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      });
    console.log(result);
    var x = result.filter((e) => {
      return e.categoria == "Fundas";
    });
    console.log(x);
    res.status(201).json(x);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving product");
  }
});

app.post("/funda", async (req, res) => {
  try {
    const funda = new Funda(req.body);
    console.log(funda);
    client.db("pcase").collection("products").insertOne(funda);
    res.status(201).json(funda);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving product");
  }
});

app.get("/audifonos", async (req, res) => {
  try {
    const result = await client
      .db("pcase")
      .collection("products")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      });
    console.log(result);
    var x = result.filter((e) => {
      return e.categoria == "Audifonos";
    });
    console.log(x);
    res.status(201).json(x);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving product");
  }
});

app.post("/eliminar", (req, res) => {
  const nombre = req.body.nombre;
  client.db("pcase").collection("products").deleteOne({ nombre: nombre }).then(console.log("Se elmino"))
    res.status(200).send("Se elimino")
});

const mongoose = require("mongoose");

var con =  mongoose
    .connect("mongodb+srv://robot:389520@cluster0.xdlfxyy.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB", err);
    });

module.exports = {con}
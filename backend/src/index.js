const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

mongoose.set("useCreateIndex", true); // Hide DeprecationWarning

const app = express();
mongoose.connect(
  "mongodb+srv://lthiago:02121994@cluster0-vivyo.mongodb.net/week10?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(express.json());
app.use(routes);

app.listen(3333);

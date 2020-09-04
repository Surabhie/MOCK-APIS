
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require('cors');

mongoose.connect("mongodb://localhost:27017/MyDb",
  { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('mongodb connected')
});

const bill = require('./router/billRoute');
var app = express();

const port = process.env.PORT || 3004;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

app.use('/bill', bill);


app.get('/', (req, res) => {
    res.send('foobar');
})


app.listen(port, () => {
    console.log("server running on port " + port + "...");
});






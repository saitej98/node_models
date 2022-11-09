const express = require("express");
const data = require("./books.json");
const PORT = 8080;
const app = express();

app.get("/", (req, res) => {
  return res.send("Hello guys, Saiteja Golivi Here");
});

app.get("/books", (req, res) => {
  return res.send({ books: data });
});

app.listen(4000, () => {
  console.log(`Listening on ${PORT} port`);
});

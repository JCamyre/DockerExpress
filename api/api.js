const express = require("express");
const cors = require("cors");
const { application } = require("express");

const app = express();
// This so we can send json responses?
app.use(express.json());
// something about accessing the api endpoints
app.use(express.urlencoded({ extended: true }));

// get request to '/'
app.get("/", (req, res) => {
  res.send("Hi there");
});

// Send web scraped info from website designated by url
app.get("/webscrape", (req, res) => {
  res.send(req);
});
// could also do this like /webscrape/:url

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

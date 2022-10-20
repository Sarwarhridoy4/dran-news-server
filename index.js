const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 5000;

const categories = require("./Data/categories.json");
const news = require("./News/News.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("News API Running...");
});

app.get("/news-category", (req, res) => {
  res.send(categories);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "08") {
    res.send(news);
  } else {
    const category_news = news.filter((n) => n.category_id === id);
    res.send(category_news);
  }
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
  console.log(req.params);
});

app.listen(port, () => {
  console.log("Server running at:", port);
});

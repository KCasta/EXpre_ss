import dotenv from "dotenv";
dotenv.config();
import express from "express";

// import http from "http";
// const server = http.createServer((req, res) => {});
// server.listen(3001);
// console.log("server is running at  port 3001");

const app = express();

app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("./public"));

const port = process.env.PORT;

app.use((req, res, next) => {
  const today = new Date();
  const day = today.getDay();
  const hour = today.getHours();
  if (day >= 1 && day <= 5 && hour >= 9 && hour <= 20) {
    next();
  } else {
    res.render("error_Page");
  }
});
app.get("/home-page", (req, res) => {
  res.render("home");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
console.log(port);
app.listen(port, () => {
  console.log(`server running on ${port}`);
});

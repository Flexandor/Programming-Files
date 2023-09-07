import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //console.log(req.rawHeaders);
  res.send("<h1>Hello World!</h1>");
});

app.get("/about", (req, res) => {
  //console.log(req.rawHeaders);
  res.send("<h1>About Me!</h1> <p>My name is Alexander.</p>");
});

app.get("/contact", (req, res) => {
  //console.log(req.rawHeaders);
  res.send("<h1>Contact Me!</h1> <p>email: email@email.com</p>");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

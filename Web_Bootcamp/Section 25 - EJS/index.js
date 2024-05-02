import express from "express";

const app = express();
const port = 3000;
const day = new Date().getDay();



app.get("/", (req, res) => {

    if (day === 6 || day === 0) {
        res.render("index.ejs", { dayType: "a weekend", advice: "It's time to paarrrttttyy hard" });
    } else {
        res.render("index.ejs", { dayType: "a weekday", advice: "It's time to work hard" });
    }



});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

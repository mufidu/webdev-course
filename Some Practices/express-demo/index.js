const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("New request has been coming");
//     res.send("hai");
// });

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/r/:subkaskus/:postid", (req, res) => {
    const { subkaskus, postid } = req.params;
    res.render("sub", { subkaskus, postid });
});

app.listen(8080, () => {
    console.log("Listening port 8080");
});

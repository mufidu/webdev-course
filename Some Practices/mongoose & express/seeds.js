//connect mongoose
var mongoose = require("mongoose");
mongoose
    .connect("mongodb://localhost:27017/library", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("CONNECTION OPEN!!!");
    })
    .catch((err) => {
        console.log("ERROR!!!!");
        console.log(err);
    });

var Book = require("./models/book");

Book.insertMany([
    {
        name: "The Elements of JavaScript Style",
        author: "M promoted",
        description: "The Elements of JavaScript Style",
        category: "Programming",
        price: "29.99",
        quantity: "10",
        status: "available",
    },
    {
        name: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        description: "JavaScript: The Good Parts",
        category: "Programming",
        price: "29.99",
        quantity: "10",
        status: "available",
    },
    {
        name: "JavaScript Patterns",
        author: "Stoyan Stefanov",
        description: "JavaScript Patterns",
        category: "Programming",
        price: "29.99",
        quantity: "10",
        status: "available",
    },
    {
        name: "The Node Beginner Book",
        author: "M promoted",
        description: "The Node Beginner Book",
        category: "Programming",
        price: "29.99",
        quantity: "10",
        status: "available",
    },
    {
        name: "JavaScript: The Definitive Guide",
        author: "David Flanagan",
        description: "JavaScript: The Definitive Guide",
        category: "Programming",
        price: "29.99",
        quantity: "10",
        status: "available",
    },
])
    .then(() => {
        console.log("INSERTED!!!");
    })
    .catch((err) => {
        console.log("ERROR!!!");
        console.log(err);
    });

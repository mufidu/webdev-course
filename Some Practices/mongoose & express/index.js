//connect express
var express = require("express");
var app = express();
var methodOverride = require("method-override");
var path = require("path");
const Book = require("./models/book");

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
mongoose.set("useFindAndModify", false);

// setting ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// setting method and middleware
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

// defining categories
const categories = Book.schema.path("category").enumValues;

// getting all books and filtering by category
app.get("/books", async (req, res) => {
    //filtering by category
    let books = await Book.find({});
    if (req.query.category) {
        books = books.filter((book) => book.category === req.query.category);
    }
    res.render("index", { books, category: req.query.category });
});

// BY GITHUB COPILOT
// // getting book by id
// app.get("/books/:id", async (req, res) => {
//     const book = await Book.findById(req.params.id);
//     res.render("book", { book });
// });

// // creating book
// app.post("/books/", async (req, res) => {
//     const book = new Book(req.body);
//     book.save();
//     res.redirect("/books/");
// });

// // updating book
// app.put("/books/:id", async (req, res) => {
//     const book = await Book.findById(req.params.id);
//     book.update(req.body);
//     res.redirect("/books/");
// });

// // deleting book
// app.delete("/books/:id", async (req, res) => {
//     const book = await Book.findById(req.params.id);
//     book.remove();
//     res.redirect("/books/");
// });

// // starting server
// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });

// make a new book
app.get("/books/new", (req, res) => {
    res.render("new", { categories });
});

// post the new book
app.post("/books", async (req, res) => {
    const book = new Book({
        name: req.body.name,
        author: req.body.author,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        quantity: req.body.quantity,
        status: req.body.status,
    });
    book.save()
        .then(() => {
            res.redirect(`/books/${book._id}`);
        })
        .catch((err) => {
            console.log(err);
            res.redirect(`/books/${book._id}`);
        });
});

// get book detail
app.get("/books/:id", async (req, res) => {
    const book = await Book.findById(req.params.id);
    res.render("book", { book });
});

// edit particular book
app.get("/books/:id/edit", async (req, res) => {
    const { id } = req.params;
    const book = await Book.findById(id);
    res.render("edit", { book, categories });
});

// put the edited book
app.put("/books/:id", async (req, res) => {
    const { id } = req.params;
    await Book.findByIdAndUpdate(id, req.body, { new: true });
    res.redirect(`/books`);
});

// delete a book
app.delete("/books/:id", async (req, res) => {
    const { id } = req.params;
    await Book.findByIdAndRemove(id);
    res.redirect(`/books`);
});

app.listen(3000, () => {
    console.log("Express server listening on port 3000");
});

//create book model
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: [
            "Programming",
            "Cookbook",
            "Reference",
            "Miscellaneous",
            "Non-Fiction",
            "Fiction",
        ],
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Book", bookSchema);

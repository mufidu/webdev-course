//connect mongoose
var mongoose = require("mongoose");
mongoose
    .connect("mongodb://localhost:27017/dontmindme", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("CONNECTION OPEN!!!");
    })
    .catch((err) => {
        console.log("OH NO ERROR!!!!");
        console.log(err);
    });

const thingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price cannot be negative"],
    },
    category: [String],
});

thingSchema.methods.increasePrice = function () {
    this.price += 1;
    return this.save();
};

thingSchema.virtual("discountedPrice").get(function () {
    return this.price - this.price * 0.1;
});

const Thing = mongoose.model("Thing", thingSchema);

console.log(Thing.schema.path("name"));

//print all the things
Thing.find({}).then((things) => {
    things.forEach((thing) => {
        console.log(thing.name);
    });
});

// const toy = new Thing({
//     name: "Toy",
//     description: "Something children play with",
//     price: 100,
//     category: ["fun", "happy"],
// });

// toy.save()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// const mainan = async () => {
//     const pencil = await Thing.findOne({ name: "pencil" });
//     pencil.increasePrice();
//     console.log(pencil.discountedPrice);
// };

// console.log(mainan());

// const anotherThingSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     qty: {
//         type: Number,
//         required: true,
//         min: [0, "Qty cannot be negative"],
//     },
// });

// const anotherThing = mongoose.model(
//     "anotherThing",
//     anotherThingSchema,
//     "things"
// );

// const map = new anotherThing({ name: "map", qty: 3 });
// map.save()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

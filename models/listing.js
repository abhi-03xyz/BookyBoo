// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const listingSchema = new Schema({
//   title: { type: String, required: true },
//   description: String,
//   image: {
//     type: String,
//     default:
//       "https://unsplash.com/photos/sun-shines-through-rock-formations-in-a-desert-iR1qNLDnYP8",
//     set: (v) =>
//       v === ""
//         ? "https://unsplash.com/photos/sun-shines-through-rock-formations-in-a-desert-iR1qNLDnYP8"
//         : v,
//   },
//   price: Number,
//   location: String,
//   country: String,
// });

// const Listing = mongoose.model("Listing", listingSchema);
// module.exports = Listing;


 const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  image: {
    filename: String,
    url: {
      type: String,
      default: "https://unsplash.com/photos/sun-shines-through-rock-formations-in-a-desert-iR1qNLDnYP8",
      set: (v) =>
        v === ""
          ? "https://unsplash.com/photos/sun-shines-through-rock-formations-in-a-desert-iR1qNLDnYP8"
          : v,
    },
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
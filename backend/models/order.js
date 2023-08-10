var mongoose = require("mongoose");
let orderSchema = mongoose.Schema({
  items: [
    {
      id: Number,
      title: String,
      price: Number,
      description: String,
      category: String,
      image: String,
      rating: {
        rate: Number,
        count: Number,
      },
      quantity: Number,
    },
  ],
  user: {
    _id: mongoose.Types.ObjectId,
    userName: String,
    email: String,
  },
});

module.exports = mongoose.model("Order", orderSchema);

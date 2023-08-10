var express = require("express");
var Product = require("../models/product");
var User = require("../models/user");
var Order = require("../models/order");
const { default: mongoose } = require("mongoose");

//express router
let router = express.Router();

var currentUser = {
  userName: "amira",
  email: "amira@gmail.com",
  _id: "64d3ab3d623f51f2f6c1fd71",
};

//  /addUser  post
router.post("/addUser", function (req, res) {
  var userData = req.body;
  console.log(req.body);
  var newUser = new User({
    userName: userData.userName,
    email: userData.email,
    cart: {
      items: [],
    },
  });
  newUser
    .save()
    .then((newuser) => {
      console.log(newuser);
      res.json({
        message: "User created!",
      });
    })
    .catch((err) => {
      console.log("err");
    });
});

//addtocart  post
router.post("/addtocart", function (req, res) {
  var toAddedproductId = req.body.productId;
  User.findById({ _id: currentUser._id })
    .then((user) => {
      let updatedUserCart = [...user.cart.items];
      let newQuantity = 1;
      var cartProductIndex = user.cart.items.findIndex((cartItem) => {
        return cartItem.productId.toString() == toAddedproductId.toString();
      });
      if (cartProductIndex >= 0) {
        //already in cart
        newQuantity = user.cart.items[cartProductIndex].quantity + 1;
        updatedUserCart[cartProductIndex].quantity = newQuantity;
      } else {
        //new item
        updatedUserCart.push({
          productId: new mongoose.Types.ObjectId(toAddedproductId),
          quantity: newQuantity,
        });
      }
      let userCart = {
        items: updatedUserCart,
      };
      return User.updateOne(
        { _id: currentUser._id },
        { $set: { cart: userCart } }
      );
    })
    .then((updatedUser) => {
      console.log(updatedUser);
    })
    .catch((err) => {
      console.log(err);
    });
});

// /getCart get

router.get("/getCart", function (req, res) {
  let userInfo;
  User.findById({ _id: currentUser._id })
    .then((user) => {
      userInfo = user;
      var productsIds = user.cart.items.map((item) => {
        return item.productId;
      });
      return Product.find({ _id: { $in: productsIds } });
    })
    .then((retrivedProducts) => {
      var items = retrivedProducts.map((product) => {
        return {
          id: product.id,
          title: product.title,
          price: product.price,
          description: product.description,
          category: product.category,
          image: product.image,
          rating: {
            rate: product.rating.rate,
            count: product.rating.count,
          },
          quantity: userInfo.cart.items.find((item) => {
            return item.productId.toString() == product._id.toString();
          }).quantity,
        };
      });
      res.json({
        cartItems: items,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

///  /addOrder  post

router.post("/addOrder", function (req, res) {
  let cartItems = req.body.cartItems;
  let newOrder = new Order({
    items: cartItems,
    user: {
      _id: new mongoose.Types.ObjectId(currentUser._id),
      userName: currentUser.userName,
      email: currentUser.email,
    },
  });
  newOrder
    .save()
    .then((createdOrder) => {
      User.updateOne(
        { _id: currentUser._id },
        { $set: { cart: { items: [] } } }
      ).then((updatedCartInfo) => {
        console.log(updatedCartInfo);
        res.json("order created!");
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// /getOrders  get

router.get("/getOrders", function (req, res) {
  Order.find({ "user._id": currentUser._id })
    .then((userOrders) => {
        console.log(userOrders);
        res.json(userOrders)
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;

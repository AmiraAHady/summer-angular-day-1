var express = require("express");
var app = express();
var mongoose = require("mongoose");
var cors = require("cors");

let userRoutes=require('./routes/user')
let productRoutes=require('./routes/products')


//connect to database
mongoose
  .connect(
    "mongodb+srv://meanstack:ASDqwe123@cluster0.lcktbu3.mongodb.net/ecommerce"
  )
  .then(function () {
    console.log("connected to database");
  })
  .catch(function (err) {
    console.log(`Error connecting to database,${err}`);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//  /products =>routes->products
//   /user=>>routes->user
//api for getting allproducts  localhost:3000/product/getproducts
app.use('/user',userRoutes)
app.use('/product',productRoutes)


app.listen(3000, function () {
  console.log("server connected");
});

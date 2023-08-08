var express = require("express");
var app = express();
var mongoose = require("mongoose");
var cors = require("cors");
var Product = require("./models/product");

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

// var data={
//   fullName:{
//     firstName:'ramy',
//     lastName:'ahmed'
//   },
//   age:18,
// }

//products  get //get all products

app.get("/products", function (req, res) {
  let pageNumber = +req.query.page;
  let pageSize = +req.query.pageSize;
  let myQuery = Product.find();
  let fetchedProducts;
  if (pageNumber && pageSize) {
    myQuery.skip(pageSize * (pageNumber - 1)).limit(pageSize);
  }
  myQuery
    .then(function (productsData) {
      fetchedProducts = productsData;
      return Product.count();
      // res.status(200).send(productsData);
    }).then(productsCount=>{
      res.status(200).json({
        products:fetchedProducts,
        totalProductCount:productsCount
      });
    })
    .catch(function (err) {
      console.log("Error");
    });
});

//  /products/:id  get getProductById

app.get("/products/:id", function (req, res) {
  var productId = req.params.id;
  Product.findOne({ id: productId })
    .then(function (singleProduct) {
      if (!singleProduct) {
        res.send({
          message: "No Product Founded with this id",
        });
      } else {
        res.send(singleProduct);
      }
    })
    .catch(function (err) {
      console.log(`Error ${err}`);
    });
});

// /addProduct  Post add new product

app.post("/addProduct", function (req, res) {
  var newProductData = req.body;
  console.log(req.body);
  let newProduct = new Product({
    id: newProductData.id,
    title: newProductData.title,
    price: newProductData.price,
    description: newProductData.description,
    category: newProductData.category,
    image: newProductData.image,
    rating: {
      rate: newProductData.reatingCount,
      count: 120,
    },
  });

  newProduct
    .save()
    .then(function (data) {
      console.log("product added!");
      console.log(data);
    })
    .catch(function (err) {
      console.log("Error");
    });
});

app.listen(3000, function () {
  console.log("server connected");
});

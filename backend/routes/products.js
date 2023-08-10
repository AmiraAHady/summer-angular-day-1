var express = require("express");
var Product = require("../models/product");
//express router

let router=express.Router()

//products  get //get all products
router.get("/getproducts", function (req, res) {
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
    })
    .then((productsCount) => {
      res.status(200).json({
        products: fetchedProducts,
        totalProductCount: productsCount,
      });
    })
    .catch(function (err) {
      console.log("Error");
    });
});

//  /products/:id  get getProductById

router.get("/getById/:id", function (req, res) {
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

router.post("/addProduct", function (req, res) {
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


module.exports=router;
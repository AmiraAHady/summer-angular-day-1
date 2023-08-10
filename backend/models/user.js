var mongoose = require("mongoose");
let mongooseSchema = mongoose.Schema({
  userName: String,
  email: String,
  cart:{
      items:[
          {
              productId: mongoose.Types.ObjectId,
              quantity:Number
          }
      ]
  },
  
  
});

module.exports=mongoose.model("User",mongooseSchema)

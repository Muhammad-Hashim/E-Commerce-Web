const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  image: String,
  stockQuantity: Number,
  
});

const ProductModel= mongoose.CategoryModel("ProductModel", productSchema);

module.exports = ProductModel;

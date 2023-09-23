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
    ref: "Category", // Reference to the Category model
  },
  image: String,
  stockQuantity: Number,
  // Add more fields as needed
});

const ProductModel= mongoose.CategoryModel("ProductModel", productSchema);

module.exports = ProductModel;

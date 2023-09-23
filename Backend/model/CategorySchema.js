const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  // Add more fields as needed
});

const CategoryModel = mongoose.model("Category", categorySchema);

module.exports = CategoryModel;

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const conectin = async () => {
  try {
      console.log("Connected to MongoDB");
    await mongoose.connect(
      "mongodb+srv://muhammadhashimsardar:0ZPht1gvQnAiazY1@cluster0.fapwmzq.mongodb.net/note-app?retryWrites=true&w=majority",
    
    );
  
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};


module.exports = {
  conectin,
};

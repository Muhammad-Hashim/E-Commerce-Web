const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const handleError = (error) => {
  console.error("MongoDB connection error:", error);
};

const conectin = async () => {
  try {
      console.log("Connected to MongoDB");
    await mongoose.connect(
      "mongodb+srv://muhammadhashimsardar:0ZPht1gvQnAiazY1@cluster0.fapwmzq.mongodb.net/note-app?retryWrites=true&w=majority",
      {
          useNewUrlParser: true,
        useUnifiedTopology: true,
              useCreateIndex: true.
      }
    );
      
  
  } catch (error) {
    handleError(error);
  }
};


module.exports = {
  conectin 
};

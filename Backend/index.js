const express = require("express");
const { default: mongoose } = require("mongoose");
const userRoute = require("./routes/user");
const authRouter = require("./routes/auth");
const app = express();
const PORT = 3000;
const bcrypt = require("bcryptjs");
app.use(express.json());


app.use("/auth",  authRouter);
app.use("/user", userRoute,);















 






mongoose
  .connect(
    "mongodb+srv://muhammadhashimsardar:0ZPht1gvQnAiazY1@cluster0.fapwmzq.mongodb.net/note-app?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("conection  is establish ...........");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log("server is running", PORT);
});

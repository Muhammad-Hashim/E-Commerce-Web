const UserModel = require("../model/UserSchame");
const bcrypt = require("bcryptjs");
const authRouter = require("express").Router();
const saltRounds = 10;

authRouter.post("/register", async (req, res) => {
  const password = req.body.password;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  registerUser = await new UserModel({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });

  UserModel.findOne(
    { $or: [{ username: req.body.username }, { email: req.body.email }] },
    (err, existingUser) => {
      if (existingUser) {
        res.send("User already exists");
      } else {
        registerUser.save((err, data) => {
          if (data) {
            res.send("User Registered Successfully");
          } else {
            res.send("Error Occured");
          }
        });
      }
    }
  );
});

module.exports = authRouter;

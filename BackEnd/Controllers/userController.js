const res = require("express/lib/response");
var User = require("../Models/userSchema");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      message: "success",
      Users: users,
    });
  } catch (err) {
    res.status(404).json({
      message: "failure",
      Eror: err,
    });
  }
};

exports.postUser = async (req, res) => {
  try {
    const insertedUser = await User.create(req.body);
    res.status(200).json({
      message: "success",
      user: insertedUser,
    });
  } catch (err) {
    res.status(400).json({
      message: "Eroor",
      Error: err,
    });
  }
};

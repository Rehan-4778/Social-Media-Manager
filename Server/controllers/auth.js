const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
// @description       Register user
// @route             POST  api/v1/auth/register
// @access            Public
exports.register = asyncHandler(async (req, res, next) => {
  // create user
  const {
    name,
    email,
    password,
    age,
    gender,
    profession,
    address,
    ratings,
    awards,
    mentions,
    about,
    statistics,
    campaigns,
  } = req.body;

  const user = await User.create(req.body);

  if (!user) {
    return next(new ErrorResponse("Error creating user", 500));
  }

  res.status(200).json({
    success: true,
    data: user,
  });
});

// @description       Get current logged in user
// @route             GET  api/v1/auth/me
// @access            Private

exports.getUser = asyncHandler(async (req, res, next) => {
  const userId = req.params.userId;

  const user = await User.findOne({ _id: userId });

  if (!user) {
    return next(new ErrorResponse("Error getting user", 500));
  }

  res.status(200).json({
    success: true,
    data: user,
  });
});

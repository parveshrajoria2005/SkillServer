const express = require("express");
const router = express.Router();

const {
  signupUser,
  loginUser,
  otpLogin,
  googleLogin,
  getUserProfile,
  getAllUsers,
  updateUserProfile,
  deleteUser,
  blockUnblockUser,
  changePassword,
} = require("../controllers/userController");

let authentication = require("../middlewares/authMiddleware");
let authorization = require("../middlewares/authorization");

// Public Routes
router.post("/signup", signupUser);
router.post("/login", loginUser);

// LoggedIn User
router.get("/profile", authentication, getUserProfile);

// For Admin
router.get("/allUsers", authentication, authorization("admin"), getAllUsers);

// BLockedUnblocked USer
router.put("/user/block/:userId",authentication, authorization("admin"),blockUnblockUser);




// Change PAssword
router.put("/change-password", authentication, changePassword);
module.exports = router;




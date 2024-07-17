const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const homeController = require("../controllers/homeController");
const adminhomeController = require("../controllers/adminhomeController");
const editController = require("../controllers/editController");

// Auth routes
router.get("/", authController.getLogin);
router.post("/", authController.postLogin); 
router.get('/register', authController.getRegister);
router.post('/register', authController.postRegister);

// Home route
router.get("/home", homeController.getHome);
router.post("/home", homeController.postHome); 

router.get("/admin_home", adminhomeController.getAdminHome);

// Edit route
router.get("/edit", editController.getEdit);
router.post("/edit", editController.postEdit);


// Logout route
router.get("/logout", homeController.getLogout);

module.exports = router;
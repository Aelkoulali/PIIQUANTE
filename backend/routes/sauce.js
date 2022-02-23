const express = require("express");
const router = express.Router();
const sauceCtrl = require("../controllers/sauce");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

router.get("/", auth, sauceCtrl.getAllSauces); //Get All Sauces
router.get("/:id", auth, sauceCtrl.getOneSauce); //Get One Specific Sauce
router.post("/", auth, multer, sauceCtrl.createSauce); //Add And Save One Sauce
router.put("/:id", auth, multer, sauceCtrl.updateSauce); //Update One Sauce
router.delete("/:id", auth, sauceCtrl.deleteSauce); //Delete One Sauce
router.post("/:id/like", auth, sauceCtrl.likeOrDislike); //like Or dislike One Sauce

module.exports = router;
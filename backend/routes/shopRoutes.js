const express = require("express");
const {
  registerShop,
  getAllShops,
  deleteShop,
  updateShop,
} = require("../controllers/shopController");
const isAuthenticated = require("../authMiddleware/isAuthenticated");
const {
  addProductToShop,
  deleteProductFromShop,
  updateProduct,
} = require("../controllers/productControllers");

const router = express.Router();

router.get("/", getAllShops);
router.post("/register-shop", isAuthenticated, registerShop);
router.delete("/delete-shop/:shopId", isAuthenticated, deleteShop);
router.patch("/update-shop/:shopId", isAuthenticated, updateShop);
router.post("/add-product", isAuthenticated, addProductToShop);
router.post(
  "/remove-product/:productId",
  isAuthenticated,
  deleteProductFromShop
);
router.patch("/update-product/:productId", isAuthenticated, updateProduct);

module.exports = router;

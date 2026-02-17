import express from "express"
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js"
import { createProductController, deleteProductController, getProductController, getProductPhotoController, getSingleProductController, productCountController, productFiltersController, productListController, searchController, updateProductController } from "../controllers/productController.js"
import formidable from 'express-formidable'

const router = express.Router()
//create product
router.post('/create-product', requireSignIn,isAdmin, formidable() ,createProductController)

//get product 
// router.get('/get-product', requireSignIn, isAdmin, getProductController )
router.get('/get-product',  getProductController )

//get single product 
// router.get('/getsingle-product/:slug', requireSignIn, isAdmin, getSingleProductController )
router.get('/getsingle-product/:slug',  getSingleProductController )

//get photo 
// product photos are public so the browser <img> tag can load them without auth headers
router.get('/product-photo/:pid', getProductPhotoController)

//delete route 
router.delete('/delete-product/:pid', requireSignIn, isAdmin, deleteProductController)

//update product 
router.put('/update-product/:pid', requireSignIn,isAdmin, formidable() ,updateProductController)

// filter product 
router.post('/product-filters',productFiltersController)

// product count
router.get('/product-count',productCountController)

// product pagination
    router.get('/product-list/:page',productListController)

//search product
router.get("/search/:keyword", searchController);



export default router
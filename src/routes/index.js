const express = require('express');
const router = express.Router();

const { 
  addUser,
  getUsers,
  updateUser,
  deleteUser,
  getUserProducts
} = require('../controllers/user')

const { 
  addCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory
} = require('../controllers/category')

const { 
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  getProductDetail
} = require('../controllers/product')

const { 
  getProfile,
} = require('../controllers/profile')

const { 
  addTransaction,
  getTransactions,
} = require('../controllers/transaction')

const { register, login, checkAuth } = require('../controllers/auth');
const { auth } = require('../middlewares/auth');
const { uploadFile } = require('../middlewares/uploadFile');

router.post('/user', addUser);
router.get('/users', getUsers);
router.get('/user-product', getUserProducts);
router.patch('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

router.post('/category', addCategory);
router.get('/categories', getCategories);
router.get('/category/:id', getCategory);
router.patch('/category/:id', updateCategory);
router.delete('/category/:id', deleteCategory);

router.post('/product', auth, uploadFile('image'), addProduct);
router.get('/products', getProducts);
router.get('/product/:id', getProductDetail);
router.patch('/product/:id', auth, uploadFile('image'), updateProduct);
router.delete('/product/:id', deleteProduct);

router.get("/profile", auth, getProfile);

router.post('/transaction', auth, addTransaction);
router.get('/transactions', auth, getTransactions);

router.post('/register', register);
router.post('/login', login);
router.get("/check-auth", auth, checkAuth);

module.exports = router;
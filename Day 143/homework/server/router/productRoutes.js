import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.post('/', async (req, res) => {
  try {
    const { name, category, price } = req.body;

    if (await Product.findOne({ name })) {
      return res.status(400).json({ error: 'Product already exists!' });
    }

    const newProduct = new Product({ name, category, price });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

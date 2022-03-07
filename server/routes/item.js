import express from 'express';

const router = express.Router();

import {getItems, createItem, updateItem, deleteItem } from '../controllers/item.js';

router.get('/', getItems);
router.post('/', createItem);
router.patch('/:id', updateItem);
router.delete('/:id', deleteItem);

export default router;
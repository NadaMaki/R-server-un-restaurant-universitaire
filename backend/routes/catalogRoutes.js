import express from 'express';

import {
    getCatalogProfile,
    registerCatalog,
    updateCatalogProfile,
    getCatalogs,
    deleteCatalog,
    getCatalogById,
    updateCatalog
} from '../controllers/catalogController.js';

import { protect } from './../middleware/authMiddlewarecatalog.js';

const router = express.Router();

router.route('/').post(registerCatalog).get(protect,  getCatalogs);
//router.post('/login', authCatalog);
router
    .route('/profile')
    .get(protect, getCatalogProfile)
    .put(protect, updateCatalogProfile);
router
    .route('/:id')
    .delete(protect,  deleteCatalog)
    .get(protect,  getCatalogById)
    .put(protect,  updateCatalog);

export default router;

import express from 'express';

import {
    getReservationProfile,
    registerReservation,
    updateReservationProfile,
    getReservations,
    deleteReservation,
    getReservationById,
    updateReservation
} from '../controllers/reservationController.js';

import { protect } from '../middleware/authMiddlewarereservation.js';

const router = express.Router();

router.route('/').post(registerReservation).get(protect,  getReservations);

router
    .route('/profile')
    .get(protect, getReservationProfile)
    .put(protect, updateReservationProfile);

    router
    .route('/:id')
    .delete(protect,  deleteReservation )
    .get(protect,  getReservationById)
    .put(protect,  updateReservation );

export default router;

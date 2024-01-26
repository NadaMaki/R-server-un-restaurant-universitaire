import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import Reservation from '../models/reservationModel.js';

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.reservation = await Reservation.findById(decoded.id).select('-id');

            next();

        } catch (error) {
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    }

    if (!token) {
        res.status(401);
        throw new Error('Not authorized, no token res');
    }
});

export {  protect };



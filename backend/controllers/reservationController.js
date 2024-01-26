import express from 'express';
import asyncHandler from 'express-async-handler';
import Reservation from './../models/reservationModel.js';
import generateToken from './../utils/genarateTokenreservation.js';



const registerReservation = asyncHandler(async (req, res) => {
    try {
        const { email, phonenumber, nbjour, serviice, date0, date1 } = req.body;


        const reservation = await Reservation.create({
            email,
            phonenumber,
            nbjour,
            serviice,
            date0,
            date1,
        });

        if (reservation) {
            res.status(201).json({
                _id: reservation._id,
                email: reservation.email,
                phonenumber: reservation.phonenumber,
                nbjour: reservation.nbjour,
                serviice: reservation.serviice,
                date0: reservation.date0,
                date1: reservation.date1,
                token: generateToken(reservation._id),
            });
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }
    } catch (error) {
        console.error('Error in Reservation:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


const getReservationProfile = asyncHandler(async (req, res) => {
    const reservation = await Reservation.findById(req.reservation._id);

    if (reservation) {
        res.json({
            _id: reservation._id,
            email: reservation.email,
            phonenumber:reservation.phonenumber,
            nbjour: reservation.nbjour,
            serviice: reservation.serviice,
            date0: reservation.date0,
            date1: reservation.date1,

        });
    } else {
        res.status(401);
        throw new Error('reservation not found');
    }
});



const updateReservationProfile = asyncHandler(async (req, res) => {
    const reservation = await Reservation.findById(req.reservation._id);

    if (reservation) {
        reservation.email = req.body.email || reservation.email;
        reservation.phonenumber = req.body.phonenumber || reservation.phonenumber;
        reservation.nbjour = req.body.nbjour || reservation.nbjour;
        reservation.serviice = req.body.serviice || reservation.serviice;
        reservation.date0 = req.body.date0 || reservation.date0;
        reservation.date1 = req.body.date1 || reservation.date1;
       const updatedReservation = await reservation.save();

        res.json({
            _id: updatedReservation._id,
            email: updatedReservation.email,
            phonenumber: updatedReservation.phonenumber,
            nbjour: updatedReservation.nbjour,
            serviice: updatedReservation.serviice,
            date0: updatedReservation.date0,
            date1: updatedReservation.date1,
            token: generateToken(updatedReservation._id)

          
        });
    } else {
        res.status(401);
        throw new Error('reservation not found');
    }
});


const getReservations = asyncHandler(async (req, res) => {
    const reservations = await Reservation.find({});
    res.json(reservations);
});



const deleteReservation = asyncHandler(async (req, res) => {
    const reservation = await Reservation.findById(req.params.id);

    if (reservation) {
        await reservation.remove();
        res.json({ message: 'reservation removed' });
    } else {
        res.status(401);
        throw new Error('reservation not found');
    }
});


const getReservationById = asyncHandler(async (req, res) => {
    const reservation = await Reservation.findById(req.params.id).select('-id');

    if (reservation) {
        res.json(reservation);
    } else {
        res.status(401);
        throw new Error('reservation not found');
    }
});


const updateReservation = asyncHandler(async (req, res) => {
    const reservation = await Reservation.findById(req.params.id);

    if (reservation) {
        reservation.email = req.body.email || reservation.email
        reservation.phonenumber = req.body.phonenumber || reservation.phonenumber
        reservation.nbjour = req.body.nbjour || reservation.nbjour;
        reservation.serviice = req.body.serviice || reservation.serviice;
        reservation.date0 = req.body.date0 || reservation.date0;
        reservation.date1 = req.body.date1 || reservation.date1;

        const updatedReservation = await reservation.save();

        res.json({
            _id: updatedReservation._id,
            email: updatedReservation.email,
            phonenumber: updatedReservation.phonenumber,
            nbjour: updatedReservation.nbjour,
            serviice: updatedReservation.serviice,
            date0: updatedReservation.date0,
            date1: updatedReservation.date1,

        });
    } else {
        res.status(401);
        throw new Error('reservation not found');
    }
});

export {
    
    getReservationProfile,
    registerReservation,
    updateReservationProfile,
    getReservations,
    deleteReservation,
    getReservationById,
    updateReservation
};

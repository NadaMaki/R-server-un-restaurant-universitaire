import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import Catalog from '../models/catalogModel.js';

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.catalog = await Catalog.findById(decoded.id).select('-id');

            next();
        } catch (error) {
            res.status(401);
            throw new Error('Not authorized, token failed cata');
        }
    }

    if (!token) {
        res.status(401);
        throw new Error('Not authorized, no token cata');
    }
});

      //   const admin = (req, res, next) => {
      //      if (req.catalog && req.catalog.link) {
      //           next();
      //       } else {
      //          res.status(401);
      //           throw new Error('Not authorized as an admin');  
      //         }
      //   };

export {
    protect 
};

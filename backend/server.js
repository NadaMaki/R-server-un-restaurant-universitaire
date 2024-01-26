import path from 'path'
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan'
import connectDB from './config/db.js';
import colors from 'colors'

import { notFound, errorHandler } from './middleware/errorMiddlware.js'
import { notFoundcatalo, errorHandlercatalo } from './middleware/errorMiddlwarecatalog.js'
import { notFoundreserva, errorHandlerreserva } from './middleware/errorMiddlwarereservation.js'


import userRoutes from './routes/userRoutes.js'
import catalogRoutes from './routes/catalogRoutes.js'
import reservationRoutes from './routes/reservationRoutes.js'


import uploadRoutes from './routes/uploadRoutes.js'



dotenv.config('./../.env');

connectDB();



const app = express();

 

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json())

 
app.use('/api/catalogs', catalogRoutes); 

app.use('/api/reservations', reservationRoutes); 


app.use('/api/users', userRoutes);

app.use('/api/upload', uploadRoutes);

app.use(express.static('epubs'));



const __dirname = path.resolve()

app.use('/epubs', express.static(path.join(__dirname, 'epubs')));



app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))
} else {
    app.get('/', (req, res) => {
        res.send("API is running");
    })
}

app.use(notFound)
app.use(errorHandler)

app.use(notFoundcatalo)
app.use(errorHandlercatalo) 

app.use(notFoundreserva)
app.use(errorHandlerreserva) 

const PORT = process.env.PORT || 5244;

app.listen(
    PORT,
    console.log(`Server running ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold)
);
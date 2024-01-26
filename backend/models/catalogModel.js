import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const catalogSchema = mongoose.Schema({

    titre: { type: String, },


    link: { type: String,  },  

}, { timestamps: true });

const Catalog = mongoose.model('Catalog', catalogSchema);

export default Catalog;




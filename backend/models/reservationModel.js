import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import { format } from 'date-fns';

const reservationSchema = mongoose.Schema({
  email: { type: String },
  phonenumber: { type: String  },
  nbjour: { type: String},
  serviice: { type: String,  },  
  date0:  { type: String,  },  
  date1:  { type: String,  },  
      
}, { timestamps: true });

reservationSchema.virtual('dateRange').get(function () {
  const formattedDate0 = format(this.date0, 'do MMMM yyyy', { locale: frLocale });
  const formattedDate1 = format(this.date1, 'do MMMM yyyy', { locale: frLocale });
  return `${formattedDate0} - ${formattedDate1}`;
});

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;







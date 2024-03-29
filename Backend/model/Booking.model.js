// models/Booking.js
import { Schema,model } from 'mongoose';
import User from './user.module';
import  Vehical  from './vehicle.module';

const bookingSchema = Schema({
 user_id:{
    type:Object.type.Schema,
    ref: User,
    required: true
  },
  bikeId: {
    type:Object.type.Schema ,
    ref:Vehical,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  // pic
  b_picture:{
    type: String,
    required: true
  },


});

const Booking = model('Booking', bookingSchema);

module.exports = Booking;

import { Schema, model } from 'mongoose';

const invocerocSchema = Schema({
  user_id: {
    type: String,
    required: true
  },
  booking_id: {
    type: String
  },
  amount:{
    type: Number
  },
  increment: {
    type: Number
  }
});

const Invoice = model('Invoice', invocerocSchema);

export default Invoice;

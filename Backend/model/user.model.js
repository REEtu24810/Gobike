// models/User.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  Father_username: {
    type: String,
    required: true,
    unique: true
  },
  Phone_Number: {
    type: String, // Assuming Phone_Number should be a string
    required: true,
    unique: true
  },
  Alternative_Phone_Number: {
    type: Number,
    required: true,
    unique: true
  },
  Adhar_Number: {
    type: Number,
    required: true,
    unique: true
  },
  Pen_Card: {
    type: Number,
    required: true,
    unique: true
  },
  Vehicle_Number: {
    type: String,
    required: true,
    unique: true
  },
  Advance: {
    type: Number,
    required: true,
    unique: true
  },
  Return: {
    type: String,
    required: true
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;

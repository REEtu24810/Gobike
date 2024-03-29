import { model, Schema } from "mongoose";

const vehicleSchema = new Schema({
  user_id: {
    type: String,
    required: true,
  },
  vehical_id: {
    type: String,
    required: true,
  },
  vehicle_image: {
    type: String,
    required: true,
  },
  vehical_range: {
    type: String,
    required: true,
  },
  vehical_status: {
    type: Schema.Types.ObjectId, // Assuming you are referencing another model
    ref: 'PriceSystemModel', // Change 'PriceSystemModel' to the actual model name
    required: true,
  }
});

const Vehical = model('Vehical', vehicleSchema);

export { Vehical };

import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
})

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;

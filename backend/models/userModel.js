import mongoose from "mongoose";
import validator from "validator";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters"],
    validate: {
      validator: (value) => /\d/.test(value), // must contain at least 1 number
      message: "Password must contain at least one number",
    },
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

export default mongoose.model("User", userSchema);

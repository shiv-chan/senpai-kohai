import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  // should we also add other data schema as well?
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model("User", userSchema);

export default User;

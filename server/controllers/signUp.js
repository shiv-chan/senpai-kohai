import User from "../models/userModels.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  const { email, password } = req.body;
  const saltPassword = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(password, saltPassword);

  const signedUser = new User({
    email,
    password: securePassword,
  });

  try {
    const user = await User.findOne({ email }).exec();
    if (user) {
      res.status(409).send({ message: "This email is already registered" });
    } else {
      await siginedUpUser.save();
      res.status(201).json(signedUser);
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

import User from "../models/userModels.js";
import bcrypt from "bcrypt";

export const sendUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).exec();
    if (user) {
      await bcrypt.compare(password, user.password, (error, result) => {
        if (error) {
          throw new Error(error);
        }
        if (result) {
          // 201 request succeeded, and resource created and returend
          res.status(201).json({ message: "loggrd in successfully!" });
        } else {
          res
            .status(403) // forbidden error... you don't have an access to browse the page
            .json({ message: "Either email or password is invalid" });
        }
      });
    }
  } catch (error) {
    // 409 conflict happened in resources
    res.status(409).json({ message: error.message });
  }
};

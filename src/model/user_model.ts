import mongoose from "mongoose";

interface UserInterface extends Document {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const userSchema = new mongoose.Schema<UserInterface>(
  {
    email: {
      type: String,
      required: [true, "Email is mandatory"],
      unique: true,
    },
    username: {
      type: String,
      required: [true, "Username is mandatory"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is mandatory"],
    },
    confirmPassword: {
      type: String,
      required: [true, "Confirm Password is mandatory"],
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;

interface MyUser {
  a: string;
  b: number;
  c: boolean;
}

const u: Omit<MyUser, "a"> = {
  b: 1,
  c: true,
};

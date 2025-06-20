import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const userSchema = new Schema<IUser>({
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 10,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minlength: 4,
    maxlength: 10,
  },
  age: {
    type: Number,
    required: true,
    min: [18, "age must be at least 18 ,got {VALUE}"],
    max: 60,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: function (value) {
        return /\d{3}-\d{3}-\d{4}/.test(value);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: {
      values: ["USER", "ADMIN", "SUPERADMIN"],
      message: "{VALUE} is not a valid",
    },
    uppercase: true,
    default: "USER",
  },
});

export const User = model("User", userSchema);

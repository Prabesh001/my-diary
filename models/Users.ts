import mongoose, { model, models } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true, collection: "Users" }
);

const Users = models.Users || model("Users", userSchema);
export default Users;

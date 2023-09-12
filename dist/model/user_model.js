import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
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
}, {
    timestamps: true,
});
const userModel = mongoose.model("User", userSchema);
export default userModel;
//# sourceMappingURL=user_model.js.map
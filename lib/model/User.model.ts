import mongoose from "mongoose";

const userSchema = new mongoose.Schema<UserType>({
    clerkId : String,
    wishlist : {
        type: [String],
        default: []
    },

},{timestamps: true});

const User = mongoose.models.User || mongoose.model("User", userSchema)

export default User
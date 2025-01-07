import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Establish connectionn
        await mongoose.connect(process.env.MONGO_URI)
        console.log(" ✅ MongoDB Successfully Connected...");
    } catch (error) {
        console.error("❌ Database connection failed: " + error.message);
    }
}

export default connectDB;
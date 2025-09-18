import mongoose, { connect } from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("DB connected!");
    } catch(error) {
        console.error("Error connecting to DB", error);
    }
}
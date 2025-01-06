import mongoose from "mongoose"
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`MongoDb Connected: ${conn.connection.host}`)
    }
    catch (err) {
        console.log("Error connection to MongoDB: ",err.message)
    }
}

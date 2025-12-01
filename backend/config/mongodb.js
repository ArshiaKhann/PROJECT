import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected',() => {
        console.log("DB Connected");
    })

    await mongoose.connect(
  `${process.env.MONGODB_URI}?retryWrites=true&w=majority`,
  { dbName: "e-commerce" } // your database name
);


}

export default connectDB;

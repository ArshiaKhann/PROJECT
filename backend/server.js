import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// App Config
const app = express();
const port = process.env.PORT || 4000;

// ---------------------
// DB + Cloudinary
// ---------------------
connectDB().then(() => console.log("MongoDB connected successfully"))
          .catch(err => console.error("MongoDB connection error:", err));

//connectCloudinary();

// ---------------------
// CORS Configuration
// ---------------------
const allowedOrigins = [
  "http://localhost:5173",           // local frontend
  "https://project-nu-indol-55.vercel.app" // replace with your Vercel URL
];

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "token"]
  })
);


// ---------------------
// Middleware
// ---------------------
app.use(express.json());

// ---------------------
// API Routes
// ---------------------
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Root route
app.get("/", (req, res) => {
  res.send("API Working");
});

// ---------------------
// Start server
// ---------------------
app.listen(port, () => console.log(`Server started on PORT : ${port}`));

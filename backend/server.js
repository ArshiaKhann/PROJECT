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

connectCloudinary();

// ---------------------
// CORS Configuration
// ---------------------
const allowedOrigins = [
  "http://localhost:5173",           // local frontend
  "https://your-frontend.vercel.app" // replace with your Vercel URL
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // allow Postman or curl
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = "CORS policy does not allow access from this origin";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
    methods: ["GET","POST","PUT","DELETE"],
    allowedHeaders: ["Content-Type","Authorization"]
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

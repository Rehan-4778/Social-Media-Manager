/* eslint-disable no-undef */
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const errorHandler = require("./middlewares/error");

// Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for your domain
const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));

// Connect database
connectDB();

// Route files
const auth = require("./routes/auth");

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Mount Routers
app.use("/api/v1/auth", auth);

// Error handler
app.use(errorHandler);

app.use("/", (req, res) => {
  res.status(404).json({ success: false, msg: "Page not found" });
});

const server = app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.bgGreen
      .bold
  );
});

// handle unhandled promise rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error : ${err}`.red);

  server.close(() => process.exit(1));
});

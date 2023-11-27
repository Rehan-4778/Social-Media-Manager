const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
   // allow everyone to connect to the database
   
  });

  console.log(`MongoDB connected ${conn.connection.host}`.green.underline);
};

module.exports = connectDB;

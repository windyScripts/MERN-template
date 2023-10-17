import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"

import sampleRoutes from "./routes/sample.js"

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/',sampleRoutes);

async function connectDB() {
    try{
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('Database connected. :)');
    }
    catch (error) {
      console.log(error);
      process.exit(1);
    }
  }
  
  connectDB().then(()=>{
    app.listen(process.env.PORT || 3000);
    console.log("listening for requests!")
  });
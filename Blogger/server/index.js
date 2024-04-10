
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import dotenv from "dotenv";
import postRoutes from './routes/posts.js';


const app = express();
dotenv.config();

import cors from 'cors';
app.use(cors());


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));



// for every route inside postRoute is gonna start with posts
app.use('/posts', postRoutes);







const CONNECTION_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 7000;

mongoose.connect(CONNECTION_URL).then(() => {
  app.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`);
  });
}).catch((error) => console.log(error.message));

/*

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

// Importing cors middleware
import cors from 'cors';

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

// Using cors middleware
app.use(cors());

// for every route inside postRoute is gonna start with posts
app.use('/posts', postRoutes);

const CONNECTION_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 7000;

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on Port: ${PORT}`);
    });
  })
  .catch((error) => console.log(error.message));

*/
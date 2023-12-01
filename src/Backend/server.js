// server.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import registerRoutes from './register_routes.js';
import RegisterModel from './register_models.js';
import loginRoutes from './login_routes.js';

dotenv.config({ path: '../../config/.env' });

const app = express();
const port = process.env.PORT || 9000;
const databaseURL = process.env.MONGO_DB_URI;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

try {
  mongoose.connect(databaseURL, { useNewUrlParser: true, useUnifiedTopology: true });

  mongoose.connection.on('connected', () => {
    console.log('DB CONNECTED!!! HERE WE GO!!!');
  });

  mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err);
  });
} catch (error) {
  console.error('Error connecting to the database:', error);
  process.exit(1); // Exit the process if the database connection fails
}

const registerMiddleware = registerRoutes(RegisterModel);
const loginMiddleware = loginRoutes(RegisterModel);

if (registerMiddleware) {
  app.use('/register', registerMiddleware);
} else {
  console.error('Error: registerMiddleware is undefined');
}

if (loginMiddleware) {
  app.use('/login', loginMiddleware);
} else {
  console.error('Error: loginMiddleware is undefined');
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

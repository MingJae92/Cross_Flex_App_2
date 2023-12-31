import express from 'express';
import { MongoError } from 'mongodb';

const registerRoutes = (RegisterModel) => {
  const router = express.Router();

  router.post('/', async (req, res) => {
    try {
      const { username, email, password, confirmPassword } = req.body;

      if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords don't match" });
      }

      // Wait for the create method to complete before sending the success message
      const newUser = await RegisterModel.create({ username, email, password, confirmPassword });

      console.log('User saved to DB:', newUser);

      // // Find the user by username or email after registration
      // const foundUser = await RegisterModel.findOne({ username, email });

      // console.log('Found user:', foundUser);

      return res.status(201).json({ message: 'User saved to DB!', newUser });
    } catch (error) {
      console.error(error);

      if (error instanceof MongoError && error.code === 11000) {
        // Duplicate key error
        if (error.message.includes('username')) {
          console.error('Duplicate key error. Username already exists:', error.message);
          return res.status(400).json({ message: 'Duplicate key error. Username already exists.' });
        } else if (error.message.includes('email')) {
          console.error('Duplicate key error. Email already exists:', error.message);
          return res.status(400).json({ message: 'Duplicate key error. Email already exists.' });
        }
      }

      return res.status(500).json({ message: error.message || 'Server error', error });
    }
  });

  return router;
};

export default registerRoutes;

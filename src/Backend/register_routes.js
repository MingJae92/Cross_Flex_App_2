import express from 'express';

const registerRoutes = (RegisterModel) => {
  const router = express.Router();

  router.post('/', async (req, res) => {
    try {
      const { username, email, password, confirmPassword } = req.body;

      if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords don't match" });
      }

      // Wait for the create method to complete before sending the success message
      await RegisterModel.create({ username, email, password, confirmPassword });

      console.log('User saved to DB!');
      return res.status(201).json({ message: 'User saved to DB!' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: error.message || 'Server error', error });
    }
  });

  return router;
};

export default registerRoutes;

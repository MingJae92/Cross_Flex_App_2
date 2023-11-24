import express from 'express';

const registerRoutes = (RegisterModel) => {
  const router = express.Router();

  router.post('/', async (req, res) => {
    try {
      const { username, email, password, confirmPassword } = req.body;

      if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords don't match" });
      }

      // Ensure to include confirmPassword when creating a new user
      await RegisterModel.create({ username, email, password, confirmPassword });

      return res.status(201).json({ message: 'User saved to DB!' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: error.message || 'Server error' });
    }
  });

  return router;
};

export default registerRoutes;

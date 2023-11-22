import express from 'express';
import register_models from './register_models.js';

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const { userName, email, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords don't match" });
        }

        await register_models.create({ userName, email, password, confirmPassword });

        return res.status(201).json({ message: "User saved to DB!" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
});


export default router;

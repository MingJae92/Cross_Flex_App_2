// registerSchema.js
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const registerSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true, // Enforce uniqueness for the username
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    
  },
  { timestamps: true }
);

registerSchema.pre('save', async function (next) {
  try {
    if (this.isModified('password') || this.isNew) {
      const hashedPassword = await bcrypt.hash(this.password, 10);
      this.password = hashedPassword;
    }
    next();
  } catch (error) {
    next(error);
  }
});

// Add a custom error message for duplicate key violation
registerSchema.post('save', (error, doc, next) => {
  if (error.name === 'MongoError' && error.code === 11000) {
    next(new Error('Duplicate key error: The provided username or email already exists.'));
  } else {
    next(error);
  }
});

const RegisterModel = mongoose.model('User', registerSchema);

export default RegisterModel;

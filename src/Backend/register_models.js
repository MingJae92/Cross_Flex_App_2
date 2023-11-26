// registerSchema.js
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const isEmailTaken = async function (value) {
  const emailCount = await this.model('User').countDocuments({ email: value });
  return !emailCount;
};

const isUsernameTaken = async function (value) {
  const usernameCount = await this.model('User').countDocuments({ username: value });
  return !usernameCount;
};

const registerSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: isUsernameTaken,
        message: 'Username is already taken.',
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      validate: {
        validator: isEmailTaken,
        message: 'Email is already taken.',
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    confirmPassword: {
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

    if (this.isModified('confirmPassword') || this.isNew) {
      const hashedConfirmPassword = await bcrypt.hash(this.confirmPassword, 10);
      this.confirmPassword = hashedConfirmPassword;
    }

    next();
  } catch (error) {
    next(error);
  }
});

const RegisterModel = mongoose.model('User', registerSchema);

export default RegisterModel;
